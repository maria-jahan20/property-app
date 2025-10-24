"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

export default function Four() {
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
    <div ref={containerRef} className="relative w-full bg-white md:py-24 overflow-hidden">
      <div className="max-w-screen px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Image */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 50 }}
            animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-[850px] md:w-[400px] h-[900px] md:h-[500px] lg:h-[700px] overflow-hidden shadow-lg"
          >
            <Image
              src="/images/managementImages/5.webp"
              alt="Modern rooftop lounge"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
          
          {/* Left Text */}
          <motion.div
            ref={textRef}
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-1 text-black leading-relaxed mt-16"
          >
            <div className="mb-4">
              <p className="text-2xl font-bold">MD MIRJA GOLAM RAHMAN
              </p>
              <p className="text-xs">DIRECTOR - construction, SCM & administration

</p>
              <div className="w-12 h-1 bg-blue-500 mt-2"></div>
            </div>

            <p className="text-xs md:text-xs">
            M Muhit Hassan, FCCA is one of the Shareholder-Director at JCX Developments Ltd, who has been an integral part of the company since its inception. With extensive experience in the real estate sector, he has proven himself to be a valuable asset to the organization.

            </p>

            <p className="text-xs md:text-xs">
            Md. Mirja Golam Rahman was born in 1989 in Lakshmipur district. In past days he was involved in stock market, garment business & import business. Currently he is a Director of Construction, SCM and Administration Department of JCX Development Limited & he is young entrepreneur. Being a young and dynamic leader, he works on various innovations in procurement strategy implementation and management for the sake of company development.
            </p>
            <p className="text-xs md:text-xs">
            He plays his own role in building a strong position of his organization in todays competitive market. He prefers to work directly from the field level and is open to feedback from employees. Success is only possible with a competent, trusted and competent leader, so he believes that there is no substitute for team work with everyone planning to reach specific goals.
            </p>
          </motion.div>

          
        </div>
      </div>
    </div>
  )
}
