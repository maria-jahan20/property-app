"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

export default function DirectorSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const imageInView = useInView(imageRef, { once: false, amount: 0.3 })
  const textInView = useInView(textRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -200])
  const textY = useTransform(scrollYProgress, [0, 1], [100, -200])

  return (
    <div ref={containerRef} className="relative w-full bg-black md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 50 }}
            animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[400px] h-[850px] md:h-[300px] overflow-hidden"
          >
            <Image
              src="/images/aboutImages/8.webp"
              alt="Modern rooftop lounge"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
          {/* Right Text */}
          <motion.div
            ref={textRef}
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-1 text-gray-300 leading-relaxed mt-16"
          >
            <p className="text-base text-xs">
              Mr. Md. Iqbal Hossain Chowdhury comes of a reputed Muslim family of Lakshipur. He has graduated from Dhaka
              College followed by an MBA from South East University. He is the Director in the Board of Directors of
              Bengal Commercial Bank Limited representing B. Dash Japan Co. Ltd. Mr. Chowdhury is well known as one of
              the established Real Estate business personalities of the country. He is the Managing Director of renowned
              JCX Development Ltd and JCX Trading Ltd. He has played a great role in the industry by earning FDI
              (Foreign Direct Investment) through joint venture business enterprise with Japanese CREED Group, which is
              the ever first of its kind.
            </p>

            <p className="text-base text-xs">
              Mr. Md. Iqbal Hossain Chowdhury is successfully running a business Conglomerate with diversified interests
              in Energy, Auto Mobiles, Tourism and Hospitality sector. He is also Director of Bengal Life Insurance
              Company Ltd, Moonlight Shipping, Napier Homes Ltd and JAPASTY Co. Ltd. Mr. Md. Iqbal Hossain Chowdhury is
              also the Director of one the most popular restaurants in Dhaka named The Rio-Lounge and Brew Splash. Mr.
              Chowdhury is involved in many social activities and widely acclaimed for his philanthropic contributions
              to the society. He is Director of Federation of Bangladesh Chambers of Commerce and Industry (FBCCI). He
              is also the Vice Chairman of Bashundhara Kings Football Team, Member of SAARC Chamber of Commerce and
              Industry (SCCI), Member of Japan Bangladesh Chamber of Commerce and Industry (JBCCI)
            </p>

            <div>
            <p className="mt-4 font-bold">
              Md. Iqbal Hossain Chowdhury </p >
              <p className="text-xs">Managing Director</p>
            
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
