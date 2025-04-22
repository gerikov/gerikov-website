import React from 'react'

interface AnimatedFrameProps {
  children: React.ReactNode
  className?: string
  animationDuration?: number
}

const AnimatedFrame: React.FC<AnimatedFrameProps> = ({ children, className = '', animationDuration = 8 }) => {
  return (
    <div
      className={`flex justify-center items-center border-1 border-transparent ${className}`}
      style={
        {
          '--angle': '0deg',
          '--border-color':
            'linear-gradient(var(--angle), #292524 0%, #292524 40%, #292524 50%, #292524 60%, #ff6f00 100%)',
          '--bg-color': 'linear-gradient(#010101, #010101)',
          background: 'padding-box var(--bg-color), border-box var(--border-color)',
          animation: `rotate ${animationDuration}s linear infinite`,
        } as React.CSSProperties
      }
    >
      {children}

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes rotate {
            to {
              --angle: 360deg;
            }
          }

          @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
          }
        `}
      </style>
    </div>
  )
}

export default AnimatedFrame
