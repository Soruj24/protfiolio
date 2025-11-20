"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  User,
  Shield,
  UserCheck,
  Search,
  RefreshCw,
  Filter,
  MoreVertical,
  Mail,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  X,
  Loader2,
  Eye,
  Ban,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: "admin" | "user";
  createdAt: string;
  lastLogin?: string;
  isActive?: boolean;
  emailVerified?: boolean;
}

interface BulkAction {
  type: "promote" | "demote" | "delete";
  userIds: string[];
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">("all");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [bulkAction, setBulkAction] = useState<BulkAction | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Memoized filtered users for better performance
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active"
          ? user.isActive !== false
          : user.isActive === false);

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchTerm, roleFilter, statusFilter]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/user-role");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      // You could add a toast notification here
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserRole = async (userId: string, newRole: "admin" | "user") => {
    setActionLoading(userId);
    try {
      const response = await fetch("/api/admin/user-role", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, role: newRole }),
      });

      if (response.ok) {
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
        // Clear selection if user was selected
        setSelectedUsers((prev) => prev.filter((id) => id !== userId));
      } else {
        throw new Error("Failed to update user role");
      }
    } catch (error) {
      console.error("Error updating user role:", error);
      // You could add a toast notification here
    } finally {
      setActionLoading(null);
    }
  };

  const toggleUserStatus = async (userId: string, isActive: boolean) => {
    setActionLoading(userId);
    try {
      const response = await fetch("/api/admin/user-status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, isActive }),
      });

      if (response.ok) {
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, isActive } : user
          )
        );
      } else {
        throw new Error("Failed to update user status");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleBulkAction = async () => {
    if (!bulkAction) return;

    setActionLoading("bulk");
    try {
      // Handle bulk actions
      if (bulkAction.type === "promote") {
        await Promise.all(
          bulkAction.userIds.map((userId) => updateUserRole(userId, "admin"))
        );
      } else if (bulkAction.type === "demote") {
        await Promise.all(
          bulkAction.userIds.map((userId) => updateUserRole(userId, "user"))
        );
      }

      setSelectedUsers([]);
      setBulkAction(null);
    } catch (error) {
      console.error("Error performing bulk action:", error);
    } finally {
      setActionLoading(null);
    }
  };

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const selectAllUsers = () => {
    setSelectedUsers(
      selectedUsers.length === filteredUsers.length
        ? []
        : filteredUsers.map((user) => user._id)
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  };

  const stats = useMemo(() => {
    const total = users.length;
    const admins = users.filter((u) => u.role === "admin").length;
    const active = users.filter((u) => u.isActive !== false).length;
    const verified = users.filter((u) => u.emailVerified).length;

    return { total, admins, active, verified };
  }, [users]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 backdrop-blur-sm p-6 transition-all duration-500">
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">
                    Total Users
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stats.total}
                  </p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all">
                  <User className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">
                    Admins
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stats.admins}
                  </p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-all">
                  <Shield className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">
                    Active
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {stats.active}
                  </p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-all">
                  <UserCheck className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">
                    Verified
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {stats.verified}
                  </p>
                </div>
                <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-all">
                  <CheckCircle className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management Card */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md border-gray-700/30 transition-all duration-500 hover:shadow-purple-500/10">
          <CardHeader className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border-b border-gray-700/30">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="flex items-center text-white">
                <Shield className="w-6 h-6 mr-3 text-purple-400 drop-shadow-lg" />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  User Management
                </span>
                <Badge variant="secondary" className="ml-3 bg-purple-500/20 text-purple-200 border-purple-400/30">
                  {filteredUsers.length} users
                </Badge>
              </CardTitle>

              <div className="flex items-center gap-3">
                {selectedUsers.length > 0 && (
                  <div className="flex items-center gap-2 mr-4 p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <span className="text-sm text-blue-300">
                      {selectedUsers.length} selected
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setBulkAction({ type: "promote", userIds: selectedUsers })
                      }
                      disabled={actionLoading === "bulk"}
                      className="bg-blue-500/10 hover:bg-blue-500/20 border-blue-400/30 text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      {actionLoading === "bulk" ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Shield className="w-4 h-4 mr-2" />
                      )}
                      Make Admin
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setBulkAction({ type: "demote", userIds: selectedUsers })
                      }
                      disabled={actionLoading === "bulk"}
                      className="bg-purple-500/10 hover:bg-purple-500/20 border-purple-400/30 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      {actionLoading === "bulk" ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <User className="w-4 h-4 mr-2" />
                      )}
                      Make User
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedUsers([])}
                      className="text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-300"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchUsers}
                  disabled={isLoading}
                  className="bg-gray-700/50 hover:bg-gray-600/50 border-gray-600 text-gray-200 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <RefreshCw
                    className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
                  />
                  Refresh
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={roleFilter}
                  onChange={(e) =>
                    setRoleFilter(e.target.value as "all" | "admin" | "user")
                  }
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="all">All Roles</option>
                  <option value="admin">Admins</option>
                  <option value="user">Users</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(
                      e.target.value as "all" | "active" | "inactive"
                    )
                  }
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Users List */}
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <User className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  No users found
                </h3>
                <p className="text-gray-400">
                  {searchTerm || roleFilter !== "all" || statusFilter !== "all"
                    ? "Try adjusting your search or filters"
                    : "No users in the system yet"}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium text-gray-300 border-b border-gray-700/50">
                  <div className="col-span-1">
                    <Switch
                      checked={selectedUsers.length === filteredUsers.length}
                      onCheckedChange={selectAllUsers}
                      className="data-[state=checked]:bg-purple-500"
                    />
                  </div>
                  <div className="col-span-4">User</div>
                  <div className="col-span-3">Role & Status</div>
                  <div className="col-span-2">Last Login</div>
                  <div className="col-span-2 text-right">Actions</div>
                </div>

                {/* Users */}
                {filteredUsers.map((user) => (
                  <div
                    key={user._id}
                    className={`grid grid-cols-12 gap-4 items-center p-4 border rounded-lg transition-all duration-300 group hover:scale-[1.02] ${
                      selectedUsers.includes(user._id)
                        ? "bg-blue-500/10 border-blue-400/30 shadow-lg shadow-blue-500/20"
                        : "bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/40 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10"
                    }`}
                  >
                    {/* Selection */}
                    <div className="col-span-1">
                      <Switch
                        checked={selectedUsers.includes(user._id)}
                        onCheckedChange={() => toggleUserSelection(user._id)}
                        className="data-[state=checked]:bg-purple-500"
                      />
                    </div>

                    {/* User Info */}
                    <div className="col-span-4">
                      <div className="flex items-center space-x-3">
                        {user.image ? (
                          <Image
                            src={user.image}
                            alt={user.name}
                            className="w-10 h-10 rounded-full border-2 border-gray-600 group-hover:border-purple-400 transition-all duration-300"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600 group-hover:border-purple-400 transition-all duration-300">
                            <User className="w-5 h-5 text-gray-400 group-hover:text-purple-300 transition-colors" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-semibold text-white truncate group-hover:text-purple-200 transition-colors">
                            {user.name}
                          </h3>
                          <p className="text-sm text-gray-400 truncate flex items-center group-hover:text-gray-300 transition-colors">
                            <Mail className="w-3 h-3 mr-1" />
                            {user.email}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center group-hover:text-gray-400 transition-colors">
                            <Calendar className="w-3 h-3 mr-1" />
                            Joined {formatDate(user.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Role & Status */}
                    <div className="col-span-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant={
                            user.role === "admin" ? "default" : "secondary"
                          }
                          className={`flex items-center transition-all duration-300 ${
                            user.role === "admin"
                              ? "bg-purple-500/20 text-purple-300 border-purple-400/30 group-hover:bg-purple-500/30"
                              : "bg-blue-500/20 text-blue-300 border-blue-400/30 group-hover:bg-blue-500/30"
                          }`}
                        >
                          {user.role === "admin" ? (
                            <>
                              <Shield className="w-3 h-3 mr-1" />
                              Admin
                            </>
                          ) : (
                            <>
                              <UserCheck className="w-3 h-3 mr-1" />
                              User
                            </>
                          )}
                        </Badge>

                        {user.emailVerified && (
                          <Badge
                            className="bg-green-500/20 text-green-300 border-green-400/30 group-hover:bg-green-500/30 transition-all duration-300"
                          >
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}

                        {user.isActive === false && (
                          <Badge
                            className="bg-red-500/20 text-red-300 border-red-400/30 group-hover:bg-red-500/30 transition-all duration-300"
                          >
                            <Ban className="w-3 h-3 mr-1" />
                            Inactive
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Last Login */}
                    <div className="col-span-2">
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {user.lastLogin ? getTimeAgo(user.lastLogin) : "Never"}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex justify-end space-x-2">
                      {user.role === "user" ? (
                        <Button
                          size="sm"
                          onClick={() => updateUserRole(user._id, "admin")}
                          disabled={actionLoading === user._id}
                          className="bg-purple-500/20 hover:bg-purple-500/30 border-purple-400/30 text-purple-300 hover:text-purple-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                        >
                          {actionLoading === user._id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Shield className="w-4 h-4" />
                          )}
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateUserRole(user._id, "user")}
                          disabled={actionLoading === user._id}
                          className="bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/30 text-blue-300 hover:text-blue-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >
                          {actionLoading === user._id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleUserStatus(user._id, !user.isActive)}
                        disabled={actionLoading === user._id}
                        className="bg-gray-600/50 hover:bg-gray-500/50 border-gray-500 text-gray-300 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300"
                      >
                        {actionLoading === user._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : user.isActive === false ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Ban className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bulk Action Confirmation Modal */}
        {bulkAction && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300">
            <Card className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400 drop-shadow-lg" />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Confirm Bulk Action
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Are you sure you want to {bulkAction.type}{" "}
                  {bulkAction.userIds.length} user(s)? This action cannot be
                  undone.
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={handleBulkAction}
                    disabled={actionLoading === "bulk"}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    {actionLoading === "bulk" ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : null}
                    Confirm
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setBulkAction(null)}
                    disabled={actionLoading === "bulk"}
                    className="bg-gray-700/50 hover:bg-gray-600/50 border-gray-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}