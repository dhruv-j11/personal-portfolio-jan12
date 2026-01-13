'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
]

export default function TopNavbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Check if we're at the top (hero section)
      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection('hero')
        return
      }

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
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-6 pr-8 md:pr-16 lg:pr-24">
      <div className="flex justify-end w-full">
        <div className="flex gap-2 md:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-100 hover:scale-105 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-white/30 hover:text-white/80'
              } backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20`}
            >
              {item.name}
              {activeSection === item.id && (
                <div className="absolute inset-0 rounded-xl bg-white/10 border border-white/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
