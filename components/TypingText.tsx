'use client'

import { useState, useEffect, useRef } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  eraseSpeed?: number
  pauseTime?: number
}

export default function TypingText({ 
  text, 
  speed = 1, 
  eraseSpeed = 30,
  pauseTime = 5000 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const isErasingRef = useRef(false)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const type = () => {
      if (!isErasingRef.current) {
        if (currentIndexRef.current < text.length) {
          setDisplayedText(text.substring(0, currentIndexRef.current + 1))
          currentIndexRef.current++
          timeout = setTimeout(type, speed)
        } else {
          // Finished typing, wait then start erasing
          timeout = setTimeout(() => {
            isErasingRef.current = true
            type()
          }, pauseTime)
        }
      } else {
        if (currentIndexRef.current > 0) {
          currentIndexRef.current--
          setDisplayedText(text.substring(0, currentIndexRef.current))
          timeout = setTimeout(type, eraseSpeed)
        } else {
          // Finished erasing, wait then start typing again
          isErasingRef.current = false
          timeout = setTimeout(type, pauseTime / 2)
        }
      }
    }

    // Reset and start
    currentIndexRef.current = 0
    isErasingRef.current = false
    setDisplayedText('')
    timeout = setTimeout(type, 500) // Initial delay

    return () => clearTimeout(timeout)
  }, [text, speed, eraseSpeed, pauseTime])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
