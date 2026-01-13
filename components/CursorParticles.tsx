'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  vx: number
  vy: number
}

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    // Colors array defined inside useEffect to avoid dependency warning
    const colors = ['#FFFFFF', '#00FFFF', '#0080FF', '#BF00FF'] // White, Aqua, Blue, Purple
    
    // Initialize particles - reduced for performance
    const particleCount = window.innerWidth < 768 ? 15 : 25
    const initialParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 8 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.7 + 0.3,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
    }))
    setParticles(initialParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate distance from mouse
          const dx = mousePos.x - particle.x
          const dy = mousePos.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Attract particles to cursor with fluid motion
          const force = Math.min(100 / (distance + 1), 2)
          const angle = Math.atan2(dy, dx)

          // Update velocity with smooth interpolation - optimized
          const newVx = particle.vx * 0.85 + Math.cos(angle) * force * 0.05
          const newVy = particle.vy * 0.85 + Math.sin(angle) * force * 0.05

          // Update position
          const newX = particle.x + newVx
          const newY = particle.y + newVy

          // Boundary check with wrap-around
          const finalX = newX < 0 ? window.innerWidth : newX > window.innerWidth ? 0 : newX
          const finalY = newY < 0 ? window.innerHeight : newY > window.innerHeight ? 0 : newY

          return {
            ...particle,
            x: finalX,
            y: finalY,
            vx: newVx,
            vy: newVy,
            opacity: Math.min(0.8, 0.3 + 50 / (distance + 1)),
          }
        })
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-sm transition-opacity duration-100"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  )
}
