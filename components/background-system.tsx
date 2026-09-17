"use client"

import { useEffect, useRef } from "react"

export function BackgroundSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let columns = 0
    const fontSize = 14
    const drops: number[] = []
    
    // The characters to display
    const chars = "01".split("")

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      const newColumns = Math.floor(canvas.width / fontSize)
      if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
          // Initialize drops randomly on the screen to avoid a "wall" effect on start
          drops[x] = Math.random() * canvas.height / fontSize
        }
      }
      columns = newColumns
    }
    
    setCanvasDimensions()
    window.addEventListener('resize', setCanvasDimensions)

    let lastTime = 0
    const fps = 12 // Very slow and subtle
    const interval = 1000 / fps

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw)

      const deltaTime = time - lastTime
      if (deltaTime < interval) return
      lastTime = time - (deltaTime % interval)

      // Fade out effect for the trail - use background color with high opacity
      ctx.fillStyle = 'rgba(11, 15, 18, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set binary text styling
      ctx.fillStyle = 'rgba(45, 212, 191, 0.15)' // Teal color with low opacity
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < columns; i++) {
        // Random binary character
        const text = chars[Math.floor(Math.random() * chars.length)]
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        // Reset drop to top if it's past the bottom randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }

    animationFrameId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0b0f12]">
      {/* 1. Ambient Lighting (Subtle Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-900/10 blur-[120px]" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-900/5 blur-[100px]" />

      {/* 2. Binary Data Stream Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-60 blur-[1px]" 
        style={{ display: 'block' }} 
      />

      {/* 3. Technical Grid with Parallax */}
      <div className="absolute inset-[-50%]">
        <div 
          className="absolute inset-0 opacity-[0.04] animate-parallax-slow"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.015] animate-parallax-slower"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '1rem 1rem',
          }}
        />
      </div>

      {/* 4. Noise Texture */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}
