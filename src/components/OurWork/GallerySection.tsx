"use client";

import { useState } from "react";
import GalleryFilter from "./GalleryFilter";
import GalleryItem from "./GalleryItem";
import ImageModal from "./ImageModal";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Gallery");

  const categories = [
    "All Gallery",
    "Installations",
    "Products",
    "Safety Equipment",
    "Training",
    "Videos",
  ];

  const galleryItems = [
    {
      id: 1,
      src: "/img/ab1.jpg",
      title: "MRI Safety Installation",
      description: "Advanced safety protocols implementation",
      category: "Installations",
      badgeColor: "#42b3e5",
      type: "image",
    },
    {
      id: 2,
      src: "/img/ab2.jpg",
      title: "TechGate Installation",
      description: "Automated access control system",
      category: "Installations",
      badgeColor: "#42b3e5",
      type: "image",
    },
    {
      id: 3,
      src: "/img/ab3.jpg",
      title: "MSDW - FMD",
      description: "Ferromagnetic detection system",
      category: "Products",
      badgeColor: "#6fb43f",
      type: "image",
    },
    {
      id: 4,
      src: "/img/ab4.jpg",
      title: "Safety Equipment",
      description: "Professional safety gear and tools",
      category: "Safety Equipment",
      badgeColor: "#f59e0b",
      type: "image",
    },
    {
      id: 5,
      src: "/img/video-banner.jpg",
      title: "TechGate Demo Video",
      description: "Product demonstration and features",
      category: "Videos",
      badgeColor: "#ef4444",
      type: "video",
      videoSrc: "/video/TechGate_9-3-2019.mp4",
      duration: "3:45",
    },
  ];

  const filteredItems =
    activeCategory === "All Gallery"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="next-section" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Installation Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of safety installations,
            product demonstrations, and equipment showcases. See how our
            solutions make a difference in real-world applications.
          </p>
        </div>

        {/* Filters */}
        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={() =>
                item.type === "image"
                  ? setSelectedImage(item.src)
                  : setSelectedImage(item.videoSrc || "")
              }
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#6fb43f] to-[#6fb43f] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Load More Gallery Items
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}
