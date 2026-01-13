'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import TypingText from './TypingText'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        scrollToSection('projects')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tight min-h-[1.2em]">
          <TypingText text="Dhruv Joshi" speed={200} eraseSpeed={30} pauseTime={2000} />
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 md:mb-16 text-white/80 font-light px-4">
          Honours Math @ University of Waterloo.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-4xl mx-auto px-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('projects')}
            className="glass-strong px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full md:w-auto"
          >
            Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('experience')}
            className="glass-strong px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-medium transition-all duration-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full md:w-auto"
          >
            Experience
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="glass-strong px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-medium transition-all duration-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full md:w-auto"
          >
            Contact
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

