import React, { useEffect, useState } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  scrambleSpeed?: number
  revealSpeed?: number
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 10,
  revealSpeed = 2000,
}) => {
  const [displayText, setDisplayText] = useState('')
  const [isRevealed, setIsRevealed] = useState(false)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!<>#_'

  useEffect(() => {
    let interval: number
    let currentIndex = 0

    const scramble = () => {
      const scrambledText = text
        .split('')
        .map((char, index) => {
          if (index < currentIndex) {
            return text[index]
          }
          if (char === ' ') return ' '
          return characters[Math.floor(Math.random() * characters.length)]
        })
        .join('')

      setDisplayText(scrambledText)

      if (currentIndex < text.length) {
        currentIndex++
        interval = window.setTimeout(scramble, scrambleSpeed)
      } else {
        setIsRevealed(true)
      }
    }

    // Start the scramble effect
    scramble()

    // Cleanup
    return () => {
      clearTimeout(interval)
    }
  }, [text, scrambleSpeed])

  return (
    <span className={className}>
      {displayText}
      {!isRevealed && <span className='animate-pulse'>|</span>}
    </span>
  )
}

export default ScrambleText
