"use client";
import { Upload, X } from "lucide-react";
import { Label } from "@/components/ui/label";

interface ImageUploadProps {
  imagePreview: string;
  onImageChange: (file: File | null) => void;
  onImageClear: () => void;
  currentImage?: string;
  label?: string;
}

export default function ImageUpload({
  imagePreview,
  onImageChange,
  onImageClear,
  currentImage,
  label = "Cover Image"
}: ImageUploadProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-gray-300">{label}</Label>
      <div className="border-2 border-dashed border-gray-600 rounded-xl p-4 hover:border-purple-400 transition-all duration-300 bg-gray-700/30">
        <input
          type="file"
          id="coverImage"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {imagePreview || currentImage ? (
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={imagePreview || currentImage}
                alt="Preview"
                className="max-w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <button
                type="button"
                onClick={onImageClear}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">Image preview</p>
          </div>
        ) : (
          <label
            htmlFor="coverImage"
            className="flex flex-col items-center justify-center cursor-pointer py-8 hover:scale-105 transition-transform duration-300"
          >
            <Upload className="w-12 h-12 text-gray-400 mb-3" />
            <p className="text-sm font-medium text-gray-300 mb-1">
              Click to upload cover image
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, WEBP up to 5MB
            </p>
          </label>
        )}
      </div>
    </div>
  );
}