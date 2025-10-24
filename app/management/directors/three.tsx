"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

export default function Three() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  const imageInView = useInView(imageRef, { once: false, amount: 0.3 })
  const textInView = useInView(textRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -200])
  const textY = useTransform(scrollYProgress, [0, 1], [100, -200])

  return (
    <div ref={containerRef} className="relative w-full bg-zinc-900 md:py-24 overflow-hidden">
      <div className="max-w-screen px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Text */}
          <motion.div
            ref={textRef}
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-1 text-gray-300 leading-relaxed mt-16"
          >
            <div className="mb-4">
              <p className="text-2xl font-bold">Asif Mahamud Chowdhury</p>
              <p className="text-xs">Director, Operations

</p>
              <div className="w-12 h-1 bg-red-500 mt-2"></div>
            </div>

            <p className="text-xs md:text-xs">
            Mr. Asif Mahamud Chowdhury is one of the youngest directors of the Construction and Procurement Department of JCX Development. With his age, he brings along the dynamic energy needed as a driving force to bring innovation to the company.
            </p>

            <p className="text-xs md:text-xs">
            With his leadership in the planning, designing, and development department, JCX has witnessed contemporary growth in all aspects. From the professional development of the employees to the planning of capital projects, all are efficiently being administered by Mr. Asif Mahamud Chowdhury.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 50 }}
            animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-[850px] md:w-[400px] h-[900px] md:h-[500px] lg:h-[700px] overflow-hidden shadow-lg"
          >
            <Image
              src="/images/managementImages/4.webp"
              alt="Modern rooftop lounge"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
