"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

export default function Two() {
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
              src="/images/managementImages/3.webp"
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
              <p className="text-2xl font-bold">M Muhit Hassan, FCCA
              </p>
              <p className="text-xs">Director</p>
              <div className="w-12 h-1 bg-blue-500 mt-2"></div>
            </div>

            <p className="text-xs md:text-xs">
            M Muhit Hassan, FCCA is one of the Shareholder-Director at JCX Developments Ltd, who has been an integral part of the company since its inception. With extensive experience in the real estate sector, he has proven himself to be a valuable asset to the organization.

            </p>

            <p className="text-xs md:text-xs">
              Born in Dhaka District, Mr. Muhit is one of the youngest FCCA in Bangladesh. He obtained his ACCA qualification from Kaplan Financial, London, United Kingdom in 2013, showcasing his dedication to professional growth.
            </p>
            <p className="text-xs md:text-xs">
            Throughout his career, Mr. Muhit has actively participated in various professional training and development courses, enhancing his skills and efficiency in all aspects of his job. This commitment to continuous improvement has set him apart as a dynamic and ambitious professional.
            </p>
            <p className="text-xs md:text-xs">
            Starting his career in 2012, Mr. Muhit has held positions in renowned companies within the Finance & Accounts Department. Notably, he served as the Head of Finance and Accounts Department at Rangs Group, further solidifying his expertise in the field.  
            </p>
            <p className="text-xs md:text-xs">
            With a proven track record of successfully handling diverse duties and services, Mr. Muhit has established himself as a professional who thrives on challenges and utilizes his full potential for growth and diversification in the real estate business. 
            </p>
          </motion.div>

          
        </div>
      </div>
    </div>
  )
}
