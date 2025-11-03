"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  const isVideo = image.endsWith(".mp4") || image.includes("video");

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 transition"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Media Content */}
        <div className="w-full h-full flex items-center justify-center">
          {isVideo ? (
            <video
              controls
              autoPlay
              className="w-full h-full object-contain"
              src={image}
            />
          ) : (
            <Image
              src={image}
              alt="Gallery Preview"
              width={800}
              height={600}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
