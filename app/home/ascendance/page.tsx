"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function AscendanceSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // ✨ Dramatic 10-inch parallax (≈500px)
  const yLeft = useTransform(scrollYProgress, [0, 1], [500, -500])
  const opacityLeft = useTransform(scrollYProgress, [0, 0.1, 0.3, 1], [0, 0.6, 1, 1])

  const yRight1 = useTransform(scrollYProgress, [0, 1], [400, -400])
  const yRight2 = useTransform(scrollYProgress, [0, 1], [480, -480])
  const yRight3 = useTransform(scrollYProgress, [0, 1], [560, -560])

  // Prevent image overlap by increasing spacing dynamically
  const gapRight = useTransform(scrollYProgress, [0, 1], [32, 220])
  const gapLeft = useTransform(scrollYProgress, [0, 1], [32, 220])

  return (
    <section
      ref={ref}
      className="relative bg-[#f5f5f5] py-44 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-light tracking-[0.25em] text-gray-800 uppercase">
          Our Ascendance
        </h2>
        <div className="w-24 h-[2px] bg-gray-500 mx-auto mt-5"></div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 items-start">
        {/* LEFT SIDE */}
        <motion.div
          className="md:col-span-2 flex flex-col relative z-10"
          style={{ gap: gapLeft }}
        >
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p>
              JCX Developments Ltd embarked on the Real Estate journey with the
              commitment to bring contemporary design and develop large-scale
              Residential, Commercial, and Condominium projects in Bangladesh
              with Japanese collaboration.
            </p>
            <p>
              We strive to deliver precise, exquisite solutions to our client's
              wishes, introducing state-of-the-art Japanese technologies in
              partnership with Creed Group.
            </p>
          </div>

          {/* LEFT IMAGE */}
          <motion.div
            style={{ y: yLeft, opacity: opacityLeft }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            className="overflow-hidden mt-20 rounded-3xl shadow-[0_35px_100px_rgba(0,0,0,0.35)] transform-gpu"
          >
            <Image
              src="/images/homeImages/A1.webp"
              alt="Ascendance main"
              width={1200}
              height={800}
              className="object-cover w-full h-[500px] md:h-[600px] lg:h-[700px]"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div className="flex flex-col" style={{ gap: gapRight }}>
          <div className="flex gap-8">
            {/* RIGHT TOP LEFT */}
            <motion.div
              style={{ y: yRight1 }}
              transition={{ ease: "easeInOut", duration: 1.2 }}
              className="flex-1 overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.35)] transform-gpu"
            >
              <Image
                src="/images/homeImages/A2.webp"
                alt="Gallery 1"
                width={600}
                height={400}
                className="object-cover w-full h-[240px] md:h-[300px] lg:h-[360px]"
              />
            </motion.div>

            {/* RIGHT TOP RIGHT */}
            <motion.div
              style={{ y: yRight2 }}
              transition={{ ease: "easeInOut", duration: 1.2 }}
              className="flex-1 overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.35)] transform-gpu"
            >
              <Image
                src="/images/homeImages/A3.webp"
                alt="Gallery 2"
                width={600}
                height={400}
                className="object-cover w-full h-[240px] md:h-[300px] lg:h-[360px]"
              />
            </motion.div>
          </div>

          {/* RIGHT BOTTOM LARGE */}
          <motion.div
            style={{ y: yRight3 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            className="overflow-hidden mt-12 rounded-3xl shadow-[0_35px_100px_rgba(0,0,0,0.35)] transform-gpu"
          >
            <Image
              src="/images/homeImages/A4.jpg"
              alt="Gallery 3"
              width={1200}
              height={800}
              className="object-cover w-full h-[500px] md:h-[600px] lg:h-[500px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
