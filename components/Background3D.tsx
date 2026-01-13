'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function ParticleField() {
  const [particleCount, setParticleCount] = useState(50)
  
  useEffect(() => {
    // Reduce particles for better performance
    if (window.innerWidth < 768) {
      setParticleCount(20)
    } else if (window.innerWidth < 1024) {
      setParticleCount(35)
    }
  }, [])

  const colors = ['#00FFFF', '#0080FF', '#FF00FF', '#FF0080'] // Aqua, Blue, Purple, Pink

  const particles = useMemo(() => 
    Array.from({ length: particleCount}, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40,
      z: (Math.random() - 0.5) * 40,
      speed: Math.random() * 0.01 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
      initialY: (Math.random() - 0.5) * 40,
    })), [particleCount]
  )

  return (
    <>
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}
    </>
  )
}

function FloatingParticle({ 
  x, 
  y, 
  z, 
  speed, 
  color, 
  initialY 
}: { 
  x: number
  y: number
  z: number
  speed: number
  color: string
  initialY: number
}) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Simplified floating motion for better performance
      const time = state.clock.elapsedTime
      const floatY = Math.sin(time * speed * 0.5 + x * 0.1) * 2
      
      meshRef.current.position.y = initialY + floatY
      meshRef.current.rotation.y += speed * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        opacity={0.8}
        transparent
      />
    </mesh>
  )
}

export default function Background3D() {
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Hide 3D background on mobile or if reduced motion is preferred
  if (isReducedMotion) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-30 md:opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00FF" />
        <ParticleField />
      </Canvas>
    </div>
  )
}

