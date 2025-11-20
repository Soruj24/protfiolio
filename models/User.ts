import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    emailVerified: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  if (this.password) {
    this.password = await bcrypt.hash(this.password, 12);
  }

  next();
});

// Set admin role for specific emails
UserSchema.pre("save", function (next) {
  const adminEmails = ["admin@example.com", process.env.ADMIN_EMAIL].filter(
    Boolean
  );

  if (adminEmails.includes(this.email)) {
    this.role = "admin";
  }

  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
