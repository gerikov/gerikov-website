import React, { useEffect, useState } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  scrambleSpeed?: number
  delay?: number
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', scrambleSpeed = 10, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [isRevealed, setIsRevealed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!<>#_'

  // Handle initial delay
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsStarted(true)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      setIsStarted(true)
    }
  }, [delay])

  // Handle scrambling animation
  useEffect(() => {
    if (!isStarted) return

    let interval: number

    const scramble = () => {
      if (currentIndex < text.length) {
        // Show only revealed characters and the current scrambling character
        const visibleText = text
          .split('')
          .map((char, index) => {
            if (index < currentIndex) {
              return char // Show revealed characters
            } else if (index === currentIndex) {
              // Scramble only the current character
              return char === ' ' ? ' ' : characters[Math.floor(Math.random() * characters.length)]
            } else {
              return '' // Hide unrevealed characters
            }
          })
          .join('')

        setDisplayText(visibleText)
        interval = window.setTimeout(scramble, scrambleSpeed)
      } else {
        // Show the complete text when done
        setDisplayText(text)
        setIsRevealed(true)
      }
    }

    // Start the scramble effect
    scramble()

    // Cleanup
    return () => {
      clearTimeout(interval)
    }
  }, [text, scrambleSpeed, currentIndex, isStarted])

  // Move to next character after a delay
  useEffect(() => {
    if (!isRevealed && currentIndex < text.length && isStarted) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
      }, 100) // Adjust this delay to control how long each character scrambles

      return () => clearTimeout(timer)
    }
  }, [currentIndex, isRevealed, text.length, isStarted])

  return (
    <span className={className}>
      {displayText}
      {!isRevealed && isStarted && <span className='animate-pulse'>|</span>}
    </span>
  )
}

export default ScrambleText
