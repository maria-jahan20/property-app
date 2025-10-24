"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.9, 1])
  const textY = useTransform(scrollYProgress, [0, 0.3], [40, 0])

  const imageOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1])
  const imageY = useTransform(scrollYProgress, [0, 0.4], [60, 0])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="space-y-8"
        >
          {/* Title with underline */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-light tracking-wide text-gray-900 mb-3">Green Living</h2>
            <div className="w-12 h-1 bg-blue-800"></div>
          </div>

          {/* Description */}
          <p className="text-base text-sm lg:text-sm text-gray-700 leading-relaxed font-light">We think that in every approach towards our continuous advancement towards the future, there should be a positive impact at every turn. Our buildings are hence built future-ready. This is ensured by building our apartments keeping sustainability in mind with proper ventilation, landscaped rooftops, kid-friendly green areas for kids and their families to hang out. Hence our apartments will be the home for generations to come. In the race for positive change, we want to be the leading force.</p>

          {/* Quote */}
          <div className="border-l-4 border-gray-400 pl-6 py-4">
            <p className="text-sm text-gray-800 font-bold italic mb-2">We should attempt to bring nature, houses, and human beings together in a higher unity.</p>
            <p className="text-sm text-gray-600">— Ludwig Mies van der Rohe</p>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          style={{
            opacity: imageOpacity,
            y: imageY,
            scale: imageScale,
          }}
          className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <Image src='/images/aboutImages/7.webp' alt='green living' fill className="object-cover" priority />
        </motion.div>
      </div>
    </section>
  )
}
