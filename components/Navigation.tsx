'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = ['hero', 'projects', 'experience', 'contact']

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative w-3 h-3 rounded-full transition-all duration-300"
            aria-label={`Navigate to ${section}`}
          >
            <motion.div
              className={`absolute inset-0 rounded-full ${
                activeSection === section
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
              layoutId={activeSection === section ? 'activeDot' : undefined}
            />
          </button>
        ))}
      </div>
    </nav>
  )
}

