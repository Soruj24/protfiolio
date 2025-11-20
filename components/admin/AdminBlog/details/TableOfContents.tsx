"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react"; 
import { cn } from "@/lib/utils";

// Define the type for a single item in the table of contents
interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  tableOfContents: TableOfContentsItem[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function TableOfContents({
  tableOfContents,
  activeSection,
  onSectionClick,
}: TableOfContentsProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg text-white">
          <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
          Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {tableOfContents.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={cn(
                "w-full text-left p-3 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-blue-500/20 hover:text-blue-400 border-l-2",
                activeSection === item.id
                  ? "bg-blue-500/20 text-blue-400 border-blue-500 shadow-sm"
                  : "text-gray-300 border-transparent hover:border-blue-500/50"
              )}
              style={{
                paddingLeft: `${(item.level - 1) * 16 + 16}px`,
                marginLeft: `${(item.level - 1) * 8}px`,
              }}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}