"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";
import { Comment } from "./types";
import { cn } from "@/lib/utils";

interface CommentsSectionProps {
  comments: Comment[];
  newComment: string;
  onCommentChange: (content: string) => void;
  onAddComment: () => void;
  formatDate: (dateString: string) => string;
}

export default function CommentsSection({
  comments,
  newComment,
  onCommentChange,
  onAddComment,
  formatDate,
}: CommentsSectionProps) {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl"
    >
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-white">
          <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
          Discussion ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Add Comment */}
        <div className="mb-8">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => onCommentChange(e.target.value)}
            className="min-h-[100px] mb-3 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
          <div className="flex justify-end">
            <Button
              onClick={onAddComment}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Send className="w-4 h-4" />
              <span>Post Comment</span>
            </Button>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-700 pb-6 last:border-b-0"
            >
              <div className="flex space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm">
                    {comment.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-white">
                      {comment.author.name}
                    </span>
                    <Badge variant="outline" className="text-xs bg-gray-700/50 border-gray-600 text-gray-300">
                      {comment.author.role}
                    </Badge>
                    <span className="text-sm text-gray-400">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    {comment.content}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <ThumbsDown className="w-3 h-3 mr-1" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      Reply
                    </Button>
                  </div>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-4 ml-4 space-y-4 border-l-2 border-gray-600 pl-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs">
                              {reply.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-white">
                                {reply.author.name}
                              </span>
                              <Badge
                                variant="outline"
                                className="text-xs bg-blue-500/20 border-blue-500/30 text-blue-400"
                              >
                                {reply.author.role}
                              </Badge>
                              <span className="text-xs text-gray-400">
                                {formatDate(reply.createdAt)}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">
                              {reply.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </MotionCard>
  );
}