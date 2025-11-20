"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut,
  Cog,
  Zap,
  Rocket,
  User,
  Shield,
  CreditCard,
  Bell,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

interface UserMenuProps {
  session: Session;
}

export default function UserMenu({ session }: UserMenuProps) {
  if (!session) {
    return <AuthButtons />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-full group border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors"
          >
            <Avatar className="h-8 w-8 group-hover:scale-105 transition-transform duration-200">
              <AvatarImage src={session.user?.image || ""} alt="Profile" />
              <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-medium text-sm">
                {session.user?.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 rounded-xl p-3 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border border-gray-200/60 dark:border-gray-700/60 shadow-xl shadow-black/5"
      >
        <UserInfo session={session} />
        <DropdownMenuSeparator className="my-2 bg-gray-100 dark:bg-gray-700" />
        <MenuItems session={session} />
        <DropdownMenuSeparator className="my-2 bg-gray-100 dark:bg-gray-700" />
        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Enhanced User Info Component
import { Session } from "next-auth";

const UserInfo = ({ session }: { session: Session }) => (
  <div className="flex items-start space-x-3 p-2">
    <div className="relative">
      <Avatar className="h-14 w-14 border-2 border-white shadow-md">
        <AvatarImage src={session.user?.image || ""} alt="Profile" />
        <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-800 text-white font-semibold text-base">
          {session.user?.name?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
        <Zap className="w-2 h-2 text-white" />
      </div>
    </div>
    <div className="flex flex-col space-y-2 flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-900 dark:text-white truncate text-sm">
          {session.user?.name}
        </p>
        <Badge
          variant="secondary"
          className="ml-2 text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800 font-medium px-2 py-0 h-5"
        >
          {session.user?.role || "User"}
        </Badge>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
        {session.user?.email}
      </p>
      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
          <span>Online</span>
        </div>
        <span>•</span>
        <span>Last active: Now</span>
      </div>
    </div>
  </div>
);

// Enhanced Menu Items Component
const MenuItems = ({ session }: { session: Session }) => {
  const menuItems = [
    {
      href: "/profile",
      icon: User,
      label: "Profile",
      description: "Manage your personal information",
    },
    {
      href: "/notifications",
      icon: Bell,
      label: "Notifications",
      description: "View your alerts",
      badge: "3",
    },
    {
      href: "/billing",
      icon: CreditCard,
      label: "Billing",
      description: "Payment methods & invoices",
    },
    {
      href: "/support",
      icon: HelpCircle,
      label: "Help & Support",
      description: "Get assistance",
    },
  ];

  const adminItems = [
    {
      href: "/admin",
      icon: Shield,
      label: "Admin Console",
      description: "System administration",
    },
     
  ];

  return (
    <div className="space-y-1">
      {menuItems.map((item) => (
        <DropdownMenuItem key={item.href} asChild className="p-0">
          <Link
            href={item.href}
            className="w-full cursor-pointer rounded-lg flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-gray-900 dark:text-white">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {item.description}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {item.badge && (
                <Badge
                  variant="destructive"
                  className="h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 text-white"
                >
                  {item.badge}
                </Badge>
              )}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </Link>
        </DropdownMenuItem>
      ))}

      {session.user?.role === "admin" && (
        <>
          <div className="px-3 pt-2">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Administration
            </p>
          </div>
          {adminItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild className="p-0">
              <Link
                href={item.href}
                className="w-full cursor-pointer rounded-lg flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.description}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </DropdownMenuItem>
          ))}
        </>
      )}
    </div>
  );
};

// Enhanced Logout Button Component
const LogoutButton = () => (
  <DropdownMenuItem
    onClick={() => signOut({ callbackUrl: "/" })}
    className="cursor-pointer rounded-lg flex items-center justify-between p-3 hover:bg-red-50 dark:hover:bg-red-900/20 group transition-colors text-red-600 dark:text-red-400"
  >
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
        <LogOut className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-sm">Sign Out</span>
        <span className="text-xs text-red-500/70 dark:text-red-400/70">
          End your session
        </span>
      </div>
    </div>
  </DropdownMenuItem>
);

// Enhanced Auth Buttons Component
const AuthButtons = () => (
  <div className="hidden sm:flex items-center space-x-3">
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="rounded-lg border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
      >
        <Link href="/auth/signin" className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>Sign In</span>
        </Link>
      </Button>
    </motion.div>
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        asChild
        size="sm"
        className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-200 font-medium"
      >
        <Link href="/auth/signup" className="flex items-center space-x-2">
          <Rocket className="w-4 h-4" />
          <span>Get Started</span>
        </Link>
      </Button>
    </motion.div>
  </div>
);
