import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./providers";
import { AIAssistant } from "@/components/AIAssistant";
import Header from "@/components/layout/Header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { ConditionalFooter } from "@/components/layout/Footer/ConditionalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <main className="flex-1">{children}</main>
              <AIAssistant />
              <ConditionalFooter />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
