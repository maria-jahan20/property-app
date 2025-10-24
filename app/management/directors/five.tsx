"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

export default function Five() {
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
              <p className="text-2xl font-bold">Siddiquar Rahman
              </p>
              <p className="text-xs">Chief Executive Officer

</p>
              <div className="w-12 h-1 bg-red-500 mt-2"></div>
            </div>

            <p className="text-xs md:text-xs">
            Mr. Siddiquar Rahman has been in the real estate business for the last 10 years. Being a CEO at JCX Developments he overlooks the overall planning, design, and development of the company. Other than JCX, he is also the director of NRB Global Insurance.
            </p>

            <p className="text-xs md:text-xs">
            He has shown everyone that age does not matter to be successful and especially in a society where experience is valued over anything else. Being a symbol of inspiration for others in the company and aspiring young leaders he has proved that being a young entrepreneur can be a challenging aspect but success is inevitable when the work is done with integrity and immense passion.
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
              src="/images/managementImages/6.webp"
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
