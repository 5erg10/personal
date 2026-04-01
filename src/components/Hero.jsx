import { useRef, useState, useCallback } from 'react'
import { useThreeScene } from '../hooks/useThreeScene'
import { SLIDES } from '../data/slides'

export default function Hero() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const onProgress = useCallback((p) => setProgress(p), [])
  const onReady = useCallback(() => setLoaded(true), [])

  useThreeScene(containerRef, { onProgress, onReady })

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">

      {/* Three.js canvas — desktop only */}
      <div
        ref={containerRef}
        className="absolute inset-0 hidden md:block"
      />

      {/* Mobile slideshow */}
      <div className="absolute inset-0 md:hidden">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="hero-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${s.bg})`,
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[var(--black)]/60" />
      </div>

      {/* Loading overlay (desktop) */}
      <div
        className={`absolute inset-0 z-10 hidden md:flex flex-col items-center justify-center bg-[var(--black)] font-mono text-[var(--yellow)] text-sm tracking-widest transition-opacity duration-700 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <span>Loading {progress}%</span>
        <div className="mt-3 w-40 h-[2px] bg-white/10">
          <div
            className="h-full bg-[var(--yellow)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Name + tagline */}
      <div className="absolute bottom-10 right-6 md:right-10 z-20 text-right">
        <p className="font-mono text-[var(--yellow)] text-sm md:text-base opacity-80 mb-1">
          Convierto ideas en código
        </p>
        <img
          src="images/serImg.png"
          alt="Sergio"
          className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] object-cover border-[10px] border-[var(--black)] ml-auto"
        />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/40 font-mono text-xs animate-bounce">
        ↓ scroll
      </div>
    </section>
  )
}
