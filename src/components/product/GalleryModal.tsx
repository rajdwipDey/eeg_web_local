"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  initialIndex?: number;
}

export default function GalleryModal({ images, initialIndex = 0 }: Props) {
  const [isOpen, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image src={images[currentIndex]} alt="Gallery" width={800} height={600} className="rounded-lg" />
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">×</button>
            <button onClick={prevImage} className="absolute top-1/2 left-2 text-white text-2xl -translate-y-1/2">‹</button>
            <button onClick={nextImage} className="absolute top-1/2 right-2 text-white text-2xl -translate-y-1/2">›</button>
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white">{currentIndex + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
