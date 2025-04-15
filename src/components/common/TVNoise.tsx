import React, { useEffect, useRef } from 'react'

const TVNoise: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Pixel size and grid settings
    const pixelSize = 3 // Size of each pixel in the grid
    const gridWidth = Math.ceil(canvas.width / pixelSize)
    const gridHeight = Math.ceil(canvas.height / pixelSize)

    // Create noise pattern
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      // Create a grid of larger pixels
      for (let gridY = 0; gridY < gridHeight; gridY++) {
        for (let gridX = 0; gridX < gridWidth; gridX++) {
          // Randomly decide if this grid cell should be active
          if (Math.random() > 0.95) {
            const brightness = Math.random() * 100
            const alpha = Math.random() * 100 + 30

            // Fill the entire grid cell with the same color
            for (let py = 0; py < pixelSize; py++) {
              for (let px = 0; px < pixelSize; px++) {
                const x = gridX * pixelSize + px
                const y = gridY * pixelSize + py

                if (x < canvas.width && y < canvas.height) {
                  const index = (y * canvas.width + x) * 4
                  data[index] = brightness // R
                  data[index + 1] = brightness // G
                  data[index + 2] = brightness // B
                  data[index + 3] = alpha
                }
              }
            }
          }
        }
      }

      return imageData
    }

    // Animation loop with controlled frame rate
    let animationFrameId: number
    let lastTime = 0
    const targetFPS = 10 // Very low frame rate for slower animation
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        const noise = createNoise()
        ctx.putImageData(noise, 0, 0)
        lastTime = currentTime
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className='fixed inset-0 pointer-events-none mix-blend-screen opacity-50' />
}

export default TVNoise
