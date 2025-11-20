"use client";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Trash2, X } from "lucide-react";

interface BulkActionsProps {
  selectedCount: number;
  onBulkAction: (action: "publish" | "unpublish" | "delete") => void;
  onClearSelection: () => void;
}

export default function BulkActions({
  selectedCount,
  onBulkAction,
  onClearSelection
}: BulkActionsProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="flex items-center gap-4 mb-6 p-4 bg-blue-500/10 rounded-lg border border-blue-400/30 backdrop-blur-md">
      <span className="text-sm text-blue-300">
        {selectedCount} posts selected
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onBulkAction("publish")}
          className="bg-green-500/10 hover:bg-green-500/20 border-green-400/30 text-green-300 hover:text-green-200 transition-all duration-300 hover:scale-105"
        >
          <Eye className="w-4 h-4 mr-2" />
          Publish
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onBulkAction("unpublish")}
          className="bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-400/30 text-yellow-300 hover:text-yellow-200 transition-all duration-300 hover:scale-105"
        >
          <EyeOff className="w-4 h-4 mr-2" />
          Unpublish
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onBulkAction("delete")}
          className="bg-red-500/10 hover:bg-red-500/20 border-red-400/30 text-red-300 hover:text-red-200 transition-all duration-300 hover:scale-105"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearSelection}
          className="text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}