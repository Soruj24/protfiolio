"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface AuthorBioProps {
  author: BlogPost["author"];
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg text-white">
          <User className="w-5 h-5 mr-2 text-purple-400" />
          About the Author
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <Avatar className="h-16 w-16 mx-auto mb-3 border-2 border-purple-500/20">
            <AvatarImage src={author.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white text-xl">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-white">{author.name}</h3>
          <p className="text-sm text-gray-300 mb-2">{author.role}</p>
          <p className="text-sm text-gray-300">{author.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
