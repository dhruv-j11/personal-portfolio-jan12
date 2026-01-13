"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  // imageWidth should match the Tailwind widths in the markup (md: 400, default: 300)
  const [imageWidth, setImageWidth] = useState(300)
  const [imagesPerView, setImagesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      // match the CSS widths: md -> 400, default -> 300
      setImageWidth(window.innerWidth >= 768 ? 400 : 300)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Recompute how many images fit in view when the container or imageWidth changes
  useEffect(() => {
    const computePerView = () => {
      const el = containerRef.current
      if (!el) return setImagesPerView(1)
      const gap = 16 // tailwind gap-4 = 1rem = 16px
      const per = Math.floor(el.offsetWidth / (imageWidth + gap)) || 1
      setImagesPerView(per)
    }
    computePerView()
    window.addEventListener('resize', computePerView)
    return () => window.removeEventListener('resize', computePerView)
  }, [imageWidth])

  // Use the actual gallery files from public/images/gallery
  const images = [
    { id: 1, src: `/images/gallery/Gallery-1.jpg`, alt: `Gallery image 1` },
    { id: 2, src: `/images/gallery/Gallery-2.jpg`, alt: `Gallery image 2` },
    { id: 3, src: `/images/gallery/Gallery-3.jpg`, alt: `Gallery image 3` },
    { id: 4, src: `/images/gallery/Gallery-4.jpg`, alt: `Gallery image 4` },
    { id: 5, src: `/images/gallery/Gallery-5.JPG`, alt: `Gallery image 5` },
    { id: 6, src: `/images/gallery/Gallery-6.jpg`, alt: `Gallery image 6` },
    { id: 7, src: `/images/gallery/Gallery-7.JPG`, alt: `Gallery image 7` },
    { id: 8, src: `/images/gallery/Gallery-8.jpg`, alt: `Gallery image 8` },
    { id: 9, src: `/images/gallery/Gallery-9.JPG`, alt: `Gallery image 9` },
    { id: 10, src: `/images/gallery/Gallery-10.JPG`, alt: `Gallery image 10` },
    { id: 11, src: `/images/gallery/Gallery-11.jpg`, alt: `Gallery image 11` },
    { id: 12, src: `/images/gallery/Gallery-12.jpg`, alt: `Gallery image 12` },
    { id: 13, src: `/images/gallery/Gallery-13.jpg`, alt: `Gallery image 13` },
  ]

  // calculate max index based on dynamic imagesPerView
  const maxIndex = Math.max(0, images.length - imagesPerView)
  
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  const goNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }
  

  return (
    <section className="py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          
        </h2>
        
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            className={`z-10 glass-strong rounded-full p-3 md:p-4 transition-all duration-100 flex-shrink-0 ${
              canGoPrev 
                ? 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer opacity-100 hover:scale-105' 
                : 'cursor-not-allowed opacity-30'
            }`}
            aria-label="Previous images"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            ref={containerRef}
            className="flex-1 overflow-hidden"
          >
            <motion.div
              className="flex gap-4"
              animate={{
                // include the gap between items (tailwind gap-4 = 16px)
                x: `-${currentIndex * (imageWidth + 16)}px`,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 w-[300px] md:w-[400px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden glass-strong hover:scale-[1.02] transition-transform duration-100 relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 400px, 300px"
                    className="object-cover"
                    priority={image.id <= 2}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            disabled={!canGoNext}
            className={`z-10 glass-strong rounded-full p-3 md:p-4 transition-all duration-100 flex-shrink-0 ${
              canGoNext 
                ? 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer opacity-100 hover:scale-105' 
                : 'cursor-not-allowed opacity-30'
            }`}
            aria-label="Next images"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
