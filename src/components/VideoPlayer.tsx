'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoPlayerProps {
  videoSrc: string
  thumbnailSrc: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export default function VideoPlayer({ 
  videoSrc, 
  thumbnailSrc, 
  alt, 
  width = 300, 
  height = 200, 
  className = "" 
}: VideoPlayerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <div 
        className={`relative cursor-pointer group ${className}`}
        onClick={openModal}
      >
        <Image 
          src={thumbnailSrc} 
          alt={alt} 
          width={width} 
          height={height} 
          className="w-full rounded-3xl transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity duration-300 rounded-3xl group-hover:bg-opacity-50">
          <div className="w-16 h-16 bg-black bg-opacity-30 rounded-full flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300 group-hover:scale-110">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl mx-auto">
            <button 
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <video 
                className="w-full h-auto max-h-[80vh] object-contain"
                controls
                autoPlay
                onEnded={closeModal}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
