'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface VideoCardProps {
  videoSrc: string
  thumbnailSrc: string
  alt: string
  tooltip: string
  className?: string
}

export default function VideoCard({
  videoSrc,
  thumbnailSrc,
  alt,
  tooltip,
  className,
}: VideoCardProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className={clsx(
        'relative rounded-3xl cursor-pointer tooltip-container group',
        className
      )}
      data-video={videoSrc}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Image
        src={thumbnailSrc}
        alt={alt}
        width={500}
        height={300}
        className="w-full rounded-3xl object-cover"
      />
      {/* Overlay play button */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300 rounded-3xl group-hover:bg-opacity-40">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Tooltip */}
      <div
        className={clsx(
          'absolute -top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none z-50 shadow-lg transition-all duration-300',
          showTooltip
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2'
        )}
      >
        <span>{tooltip}</span>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}
