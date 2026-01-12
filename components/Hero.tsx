'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tight"
        >
          Dhruv Joshi
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-xl sm:text-2xl md:text-3xl mb-12 md:mb-16 text-white/80 font-light px-4"
        >
          Honours Math @ University of Waterloo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-4xl mx-auto px-4"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="glass-strong px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full md:w-auto"
          >
            Projects
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.08, y: -8, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('experience')}
            className="glass-strong px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full md:w-auto"
          >
            Experience
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="glass-strong px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full md:w-auto"
          >
            Contact
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

