'use client'

import { useEffect } from 'react'
import Background3D from '@/components/Background3D'
import CursorParticles from '@/components/CursorParticles'
import TopNavbar from '@/components/TopNavbar'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        const sections = ['hero', 'projects', 'experience', 'contact']
        const currentSection = sections.find((id) => {
          const element = document.getElementById(id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
          }
          return false
        })
        
        if (currentSection) {
          const currentIndex = sections.indexOf(currentSection)
          const nextIndex = Math.min(currentIndex + 1, sections.length - 1)
          document.getElementById(sections[nextIndex])?.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        const sections = ['hero', 'projects', 'experience', 'contact']
        const currentSection = sections.find((id) => {
          const element = document.getElementById(id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
          }
          return false
        })
        
        if (currentSection) {
          const currentIndex = sections.indexOf(currentSection)
          const prevIndex = Math.max(currentIndex - 1, 0)
          document.getElementById(sections[prevIndex])?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="relative">
      <ScrollProgress />
      <Background3D />
      <CursorParticles />
      <TopNavbar />
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <ImageGallery />
      <Contact />
      <Footer />
    </main>
  )
}

