"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function DreamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionCenter = window.innerHeight / 2
      const distanceFromCenter = sectionRect.top - sectionCenter
      const offset = distanceFromCenter * 0.3
      setScrollOffset(offset)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] overflow-hidden my-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/buyerImages/3.webp" alt="Background" fill className="object-cover" priority />
      </div>

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 py-2">
        <div
          className="text-center text-white max-w-3xl transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${scrollOffset}px)`,
          }}
        >
          <p className="text-xs md:text-xs tracking-widest mb-2">START BUILDING YOUR</p>
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-light mb-6">Dream</h2>
          <div className="grid grid-row-3">
            <span className="mb-2">______________</span>
            <a
              href="#contact"
              className="text-white text-xs tracking-widest hover:text-white/70 transition-colors duration-300 inline-block"
            >
              CONTACT US
            </a>
            <span>______________</span>
          </div>
        </div>
      </div>
    </section>
  )
}
