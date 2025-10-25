"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function BannerSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth parallax for text (moves slightly up as you scroll)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const textOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[650px] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background image - full screen */}
      <div className="absolute inset-0">
        <Image
          src="/images/blogImages/1.webp"
          alt="Chess Queen"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Scroll-animated text */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center text-white"
      >
        {/* Label */}
        <p className="text-sm md:text-base font-light tracking-widest text-white/70 uppercase mb-4">
        News & Events

        </p>
        <p className="text-2xl md:text-2xl text-white/70 uppercase mb-4">WRITING & RESPONSIBILITY</p>

      </motion.div>
    </section>
  )
}
