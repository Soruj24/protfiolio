"use client";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { Label } from "@/components/ui/label";

interface ImageUploadProps {
  imagePreview: string;
  onImageChange: (file: File | null) => void;
  onImageClear: () => void;
  currentImage?: string;
}

export default function ImageUpload({
  imagePreview,
  onImageChange,
  onImageClear,
  currentImage
}: ImageUploadProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-300">
        Project Image
      </Label>
      <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 hover:border-blue-400 transition-colors">
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {imagePreview ? (
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-full h-48 object-cover rounded-lg shadow-md"
              />
              <button
                type="button"
                onClick={onImageClear}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">Image preview</p>
          </div>
        ) : (
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center cursor-pointer py-8"
          >
            <Upload className="w-12 h-12 text-gray-500 mb-3" />
            <p className="text-sm font-medium text-gray-400 mb-1">
              Click to upload project image
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, WEBP up to 5MB
            </p>
            {currentImage && (
              <div className="mt-3 flex items-center text-sm text-blue-400">
                <ImageIcon className="w-4 h-4 mr-1" />
                Current image is set
              </div>
            )}
          </label>
        )}
      </div>
    </div>
  );
}