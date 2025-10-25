"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function MiddleSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Animations for different elements
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [50, 0, 0, -50])

  const leftParagraphX = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [-50, 0, 0, -50])
  const rightParagraphX = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [50, 0, 0, 50])

  return (
    <div ref={containerRef} className="relative py-10 md:px-8 lg:px-12">
      {/* Descriptive Headline */}
      <motion.div style={{ opacity: textOpacity, y: textY }} className="mb-16 max-w-4xl">
        <p className="text-lg text-gray-300 mr-56">
          If you are looking for a company that would value your resources and helps you find a place with exquisite
          workmanship at the same time,JCX is the ultimate place to rely on.
        </p>
      </motion.div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-[65%_35%] lg:grid-cols-[65%_35%] gap-4 lg:gap-6 md:gap-6">
         {/* Left Column - Two Paragraphs in Grid */}
         <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-4">
          {/* Left Paragraph */}
          <motion.div
            style={{
              opacity: textOpacity,
              x: leftParagraphX,
            }}
            className="space-y-4"
          >
            <p className="text-gray-300 leading-relaxed text-xs">
              At JCX, you can put your faith without any hesitation because we ensure creating true value for your
              investment. Alongside by putting your resources here at JCX, you would be endowed with opulence and unique
              properties in the market and feel the ultimate pleasure of triumph.
            </p>
          </motion.div>

          {/* Right Paragraph */}
          <motion.div
            style={{
              opacity: textOpacity,
              x: rightParagraphX,
            }}
            className="space-y-4"
          >
            <p className="text-gray-300 leading-relaxed text-xs">
              Our expert team understands the client journey and tries to deliver a consistent customer experience
              across the whole period, from the development to delivery, that helps our brand build a strong customer
              relationship and promote reliability and trustworthiness.
            </p>
          </motion.div>
        </div>
        {/* Right Column - Image */}
        <motion.div
          style={{
            opacity: imageOpacity,
            scale: imageScale,
            y: imageY,
          }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-lg aspect-square overflow-hidden shadow-2xl">
            <Image src="/images/buyerImages/2.webp" alt="Business partnership" fill className="object-cover" priority />
          </div>
        </motion.div>

       
      </div>
    </div>
  )
}
