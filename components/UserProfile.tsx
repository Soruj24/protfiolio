"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription, 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  LogOut,
  Settings,
  Mail,
  Calendar,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Edit3,
  Key,
  Database,
  Activity,
  CreditCard,
  HelpCircle,
  Globe,
  Moon,
  Sun,
  Star,
  Trophy,
  Zap,
  Crown,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  Upload,
  ShieldCheck,
  Smartphone,
  Laptop,
  MapPin,
  Link as LinkIcon,
  Github,
  Twitter,
  Linkedin,
  Globe as WebIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

interface UserStats {
  projects: number;
  contributions: number;
  satisfaction: number;
  experience: number;
  completedTasks: number;
  streak: number;
}

interface SecuritySession {
  id: string;
  device: string;
  browser: string;
  location: string;
  ip: string;
  lastActive: string;
  current: boolean;
}

export function UserProfile() {
  const { data: session, status } = useSession();
  const [showEmail, setShowEmail] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [userStats, setUserStats] = useState<UserStats>({
    projects: 12,
    contributions: 24,
    satisfaction: 98,
    experience: 3,
    completedTasks: 147,
    streak: 15,
  });
  const [sessions, setSessions] = useState<SecuritySession[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Simulate fetching user stats and sessions
    const mockSessions: SecuritySession[] = [
      {
        id: "1",
        device: "iPhone 13",
        browser: "Safari",
        location: "New York, USA",
        ip: "192.168.1.1",
        lastActive: "Current",
        current: true,
      },
      {
        id: "2",
        device: "MacBook Pro",
        browser: "Chrome",
        location: "New York, USA",
        ip: "192.168.1.2",
        lastActive: "2 hours ago",
        current: false,
      },
      {
        id: "3",
        device: "Windows PC",
        browser: "Firefox",
        location: "London, UK",
        ip: "192.168.1.3",
        lastActive: "1 week ago",
        current: false,
      },
    ];
    setSessions(mockSessions);
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Not Signed In
          </h3>
          <p className="text-gray-600 mb-6">
            Please sign in to view your profile
          </p>
          <Button asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const user = session.user;
  const isAdmin = user?.role === "admin";
  const isPremium =
    (user as { subscription?: string })?.subscription === "premium";
  const memberSince = new Date(
    (user as { createdAt?: string | Date })?.createdAt || new Date()
  ).getFullYear();

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800";
      case "premium":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800";
      case "user":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
    }
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case "premium":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "pro":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  const getDeviceIcon = (device: string) => {
    if (
      device.toLowerCase().includes("iphone") ||
      device.toLowerCase().includes("mobile")
    ) {
      return <Smartphone className="w-4 h-4" />;
    } else if (
      device.toLowerCase().includes("mac") ||
      device.toLowerCase().includes("windows")
    ) {
      return <Laptop className="w-4 h-4" />;
    }
    return <Globe className="w-4 h-4" />;
  };

  const terminateSession = (sessionId: string) => {
    setSessions(sessions.filter((session) => session.id !== sessionId));
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex space-x-1 overflow-x-auto">
            {["overview", "security", "preferences", "billing", "social"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {activeTab === "overview" && (
        <>
          {/* Main Profile Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border-b dark:border-gray-700">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                  My Profile
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className={getRoleColor(user?.role || "user")}
                  >
                    {user?.role || "user"}
                  </Badge>
                  {isPremium && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription>
                Manage your account settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6">
                {/* Avatar Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-800 shadow-lg">
                      <AvatarImage src={user?.image || ""} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl">
                        {user?.name?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    {isPremium && (
                      <div className="absolute -top-2 -right-2">
                        <div
                          className={`w-6 h-6 rounded-full ${getSubscriptionColor(
                            (user as any).subscription
                          )} flex items-center justify-center`}
                        >
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Photo
                  </Button>
                </div>

                {/* User Info */}
                <div className="flex-1 space-y-4 min-w-0">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                        {user?.name || "Anonymous User"}
                      </h2>
                      {isEditing && (
                        <Edit3 className="w-4 h-4 text-blue-500 cursor-pointer" />
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span
                          className="cursor-pointer select-none"
                          onClick={() => setShowEmail(!showEmail)}
                        >
                          {showEmail ? user?.email : "••••@••••.•••"}
                        </span>
                        <button
                          onClick={() => setShowEmail(!showEmail)}
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                        >
                          {showEmail ? (
                            <EyeOff className="w-3 h-3 text-gray-400" />
                          ) : (
                            <Eye className="w-3 h-3 text-gray-400" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Member since {memberSince}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>New York, USA</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {userStats.projects}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {userStats.contributions}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Contributions
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {userStats.satisfaction}%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Satisfaction
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {userStats.streak}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Day Streak
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">
                        Profile Completion
                      </span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">
                        Account Verification
                      </span>
                      <span className="font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Account Settings */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        Email Notifications
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Receive updates about your account
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {darkMode ? (
                      <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    )}
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        Dark Mode
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Switch to dark theme
                      </div>
                    </div>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        Two-Factor Auth
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Extra security for your account
                      </div>
                    </div>
                  </div>
                  <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/settings/profile">
                      <User className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/settings/security">
                      <Key className="w-4 h-4 mr-2" />
                      Change Password
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/settings/privacy">
                      <Eye className="w-4 h-4 mr-2" />
                      Privacy Settings
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions & Admin */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isAdmin && (
                  <>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-red-500" />
                        Admin Tools
                      </h4>
                      <Button
                        asChild
                        className="w-full justify-start"
                        variant="outline"
                      >
                        <Link href="/admin">
                          <Settings className="w-4 h-4 mr-2" />
                          Admin Dashboard
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full justify-start"
                        variant="outline"
                      >
                        <Link href="/admin/users">
                          <User className="w-4 h-4 mr-2" />
                          Manage Users
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full justify-start"
                        variant="outline"
                      >
                        <Link href="/admin/projects">
                          <Database className="w-4 h-4 mr-2" />
                          Manage Projects
                        </Link>
                      </Button>
                    </div>
                    <Separator />
                  </>
                )}

                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link href="/projects">
                      <Globe className="w-4 h-4 mr-2" />
                      My Projects
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link href="/settings/billing">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Billing & Subscription
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link href="/help">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help & Support
                    </Link>
                  </Button>
                </div>

                <Separator />

                {/* Sign Out */}
                <Button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full justify-start"
                  variant="outline"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>

                {/* Session Info */}
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <div className="flex justify-between">
                      <span>Session Active:</span>
                      <span className="font-medium text-green-600 dark:text-green-400 flex items-center">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Now
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Login:</span>
                      <span className="font-medium">2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Account Status:</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 text-xs"
                      >
                        Active
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {activeTab === "security" && (
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Manage your account security and active sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Active Sessions */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Active Sessions
              </h4>
              <div className="space-y-3">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        {getDeviceIcon(session.device)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {session.device}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {session.browser} • {session.location}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {session.ip} • {session.lastActive}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {session.current && (
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                        >
                          Current
                        </Badge>
                      )}
                      {!session.current && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => terminateSession(session.id)}
                        >
                          <LogOut className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Security Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <Key className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="justify-start">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Enable 2FA
              </Button>
              <Button variant="outline" className="justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="justify-start">
                <Eye className="w-4 h-4 mr-2" />
                Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "social" && (
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Social Connections
            </CardTitle>
            <CardDescription>
              Connect your social media accounts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "GitHub",
                icon: Github,
                connected: true,
                username: "sorujcodes",
              },
              { name: "Twitter", icon: Twitter, connected: false },
              {
                name: "LinkedIn",
                icon: Linkedin,
                connected: true,
                username: "soruj-m",
              },
              {
                name: "Website",
                icon: WebIcon,
                connected: true,
                username: "soruj.me",
              },
            ].map((social) => (
              <div
                key={social.name}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {social.name}
                    </div>
                    {social.connected && social.username && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        @{social.username}
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  variant={social.connected ? "outline" : "default"}
                  size="sm"
                >
                  {social.connected ? "Connected" : "Connect"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Subscription Status */}
      {!isPremium && activeTab === "overview" && (
        <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50/50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Upgrade to Premium
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get access to advanced features and priority support
                  </p>
                </div>
              </div>
              <Button className="bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                <Zap className="w-4 h-4 mr-2" />
                Upgrade Now
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
