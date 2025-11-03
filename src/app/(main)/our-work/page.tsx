'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageHeader from '@/src/components/common/PageHeader'
import GallerySection from '@/src/components/OurWork/GallerySection'

export default function OurWork() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  return (
    <>
      <PageHeader
        title="Gallery"
        backgroundImage="/img/ab1.jpg"
        scrollTargetId="#next-section"
      />
      <GallerySection/>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
