"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  User,
  Settings,
  LogOut,
  Mail,
  Shield,
  Calendar,
  CreditCard,
  HelpCircle,
  UserPlus,
  Bell,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function UserMenu({
  session: serverSession,
}: {
  session?: import("next-auth").Session | null;
}) {
  const { data: clientSession } = useSession();
  const session = serverSession || clientSession;
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // No synchronous setState here; rely on serverSession or clientSession hydration.
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          Sign In
        </Button>
        <Button size="sm" disabled>
          Sign Up
        </Button>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" asChild className="border-gray-300">
          <Link href="/auth/signin" className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Link>
        </Button>
        <Button
          size="sm"
          asChild
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Link href="/auth/signup" className="flex items-center">
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Link>
        </Button>
      </div>
    );
  }

  const userInitials = session.user?.name
    ? session.user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : session.user?.email?.[0].toUpperCase() || "U";

  const userRole = session.user?.role || "user";
  const isAdmin = userRole === "admin";
  const isPremium = userRole === "premium";

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-9 w-auto px-2 rounded-full border border-transparent hover:border-gray-200 transition-all duration-200 hover:bg-white/80"
        >
          <div className="flex items-center space-x-2">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
              />
            ) : (
              <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-sm">
                {userInitials}
              </div>
            )}
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700 leading-none">
                {session.user?.name?.split(" ")[0] || "User"}
              </span>
              <span className="text-xs text-gray-500 leading-none mt-0.5">
                {isAdmin ? "Admin" : isPremium ? "Premium" : "Member"}
              </span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Online Status Indicator */}
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 rounded-xl shadow-xl border border-gray-200/80 backdrop-blur-sm bg-white/95"
        align="end"
        forceMount
      >
        {/* User Header */}
        <DropdownMenuLabel className="p-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-md">
                {userInitials}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {session.user?.name || "User"}
              </p>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {session.user?.email}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge
                  variant={
                    isAdmin
                      ? "destructive"
                      : isPremium
                      ? "default"
                      : "secondary"
                  }
                  className="text-xs"
                >
                  {isAdmin ? (
                    <>
                      <Shield className="w-3 h-3 mr-1" />
                      Administrator
                    </>
                  ) : isPremium ? (
                    <>
                      <Sparkles className="w-3 h-3 mr-1" />
                      Premium
                    </>
                  ) : (
                    "Member"
                  )}
                </Badge>
                <div className="flex items-center text-xs text-green-600">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  Online
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuGroup className="p-2">
          {/* Profile & Settings */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
          >
            <Link href="/profile" className="flex items-center w-full">
              <User className="w-4 h-4 mr-3 text-gray-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">Profile</div>
                <div className="text-xs text-gray-500">
                  View and edit your profile
                </div>
              </div>
            </Link>
          </DropdownMenuItem>

          {isAdmin && (
            <DropdownMenuItem
              asChild
              className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
            >
              <Link href="/admin" className="flex items-center w-full">
                <Settings className="w-4 h-4 mr-3 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Admin Dashboard
                  </div>
                  <div className="text-xs text-gray-500">
                    Manage site content and users
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
          )}

          {/* Notifications */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
          >
            <Link href="/notifications" className="flex items-center w-full">
              <Bell className="w-4 h-4 mr-3 text-orange-600" />
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Notifications
                  </div>
                  <div className="text-xs text-gray-500">View your alerts</div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  3
                </Badge>
              </div>
            </Link>
          </DropdownMenuItem>

          {/* Messages */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
          >
            <Link href="/messages" className="flex items-center w-full">
              <Mail className="w-4 h-4 mr-3 text-green-600" />
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Messages
                  </div>
                  <div className="text-xs text-gray-500">Check your inbox</div>
                </div>
                <Badge variant="default" className="text-xs bg-blue-500">
                  5
                </Badge>
              </div>
            </Link>
          </DropdownMenuItem>

          {/* Billing */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
          >
            <Link href="/billing" className="flex items-center w-full">
              <CreditCard className="w-4 h-4 mr-3 text-purple-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">Billing</div>
                <div className="text-xs text-gray-500">Manage subscription</div>
              </div>
            </Link>
          </DropdownMenuItem>

          {/* Calendar */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
          >
            <Link href="/calendar" className="flex items-center w-full">
              <Calendar className="w-4 h-4 mr-3 text-red-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Calendar
                </div>
                <div className="text-xs text-gray-500">View schedule</div>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="p-2">
          {/* Help & Support */}
          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-3 py-2.5 mb-1"
          >
            <Link href="/help" className="flex items-center w-full">
              <HelpCircle className="w-4 h-4 mr-3 text-gray-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Help & Support
                </div>
                <div className="text-xs text-gray-500">
                  Get help and documentation
                </div>
              </div>
            </Link>
          </DropdownMenuItem>

          {/* Sign Out */}
          <DropdownMenuItem
            onClick={handleSignOut}
            className="cursor-pointer rounded-lg px-3 py-2.5 text-red-600 hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700"
          >
            <LogOut className="w-4 h-4 mr-3" />
            <div>
              <div className="text-sm font-medium">Sign Out</div>
              <div className="text-xs text-red-500">
                Log out of your account
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {/* Footer */}
        <div className="p-3 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Last login: Today</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
