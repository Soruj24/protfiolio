import NextAuth, { type DefaultSession, type DefaultUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "./mongodb-connect";
import type { Adapter } from "next-auth/adapters";
import type { JWT } from "next-auth/jwt";
import type { Account, Profile } from "next-auth";

// Extended User type
interface ExtendedUser extends DefaultUser {
  role?: string;
}

// Extended Session type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends ExtendedUser { }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

// Credentials type
interface Credentials {
  email: string;
  password: string;
}

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Partial<Record<"email" | "password", unknown>>, request: Request) {
        const { email, password } = credentials as { email?: string; password?: string };
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        // Check if user has a password (social login users might not have password)
        if (!user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          password || "",
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        } as ExtendedUser;
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: JWT;
      user?: ExtendedUser;
    }) {
      if (session.user) {
        session.user.id = token.sub || user?.id;
        session.user.role = token.role || user?.role || "user";
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: ExtendedUser }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async signIn({
      user,
      account,
      profile,
    }: {
      user: ExtendedUser;
      account: Account | null | undefined;
      profile?: Profile;
    }) {
      // Only allow specific email domains or addresses for admin access
      const allowedEmails = [
        "sorujmahmudb2h@gmail.com",
        process.env.ADMIN_EMAIL,
      ].filter(Boolean) as string[];

      if (user.email && allowedEmails.includes(user.email)) {
        user.role = "admin";
      } else {
        // For other users, set default role
        user.role = "user";
      }

      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Create the handler
const handler = NextAuth(authOptions);

// Export everything properly
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = handler;
