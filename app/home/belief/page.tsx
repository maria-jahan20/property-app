"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const beliefs = [
  {
    id: "trust",
    label: "TRUST",
    title: "Trustworthiness",
    description:
      "Trustworthiness is one of our most prized values. Ensuring a culture that naturalizes the sense of reliability among the people involved enhances productivity, respect and helps strengthen the bond between the clients and us.",
  },
  {
    id: "closeness",
    label: "CLOSENESS",
    title: "Closeness",
    description:
      "We believe in building close relationships with our clients and team members. This proximity allows us to understand their needs deeply and deliver solutions that truly resonate with their vision and goals.",
  },
  {
    id: "uniqueness",
    label: "UNIQUENESS",
    title: "Uniqueness",
    description:
      "Every project is unique, and we treat it as such. Our approach celebrates individuality and creativity, ensuring that each solution we deliver is tailored to the specific requirements and aspirations of our clients.",
  },
  {
    id: "integrity",
    label: "INTEGRITY",
    title: "Integrity",
    description:
      "Integrity is the foundation of everything we do. We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction with our stakeholders.",
  },
]

export default function BeliefsSection() {
  const [activeTab, setActiveTab] = useState("trust")
  const sectionRef = useRef(null)

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  const activeContent = beliefs.find((b) => b.id === activeTab)

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
          THE BASIS OF OUR BELIEFS
        </h2>
        <div className="w-12 h-1 bg-red-500 mx-auto mt-6"></div>
      </div>

      {/* Wrapper (image + text overlap) */}
      <div className="lg:relative md:relative lg:max-w-7xl md:max-w-4xl lg:mx-auto md:mx-auto lg:flex md:flex lg:flex-col md:flex-col lg:flex-row md:flex-row lg:items-start md:items-start md:gap-0 lg:gap-0">
        {/* Left (Pinned Text Block) */}
        <div className="relative z-20 w-full h-[450px] lg:w-1/2 bg-zinc-900 p-8 lg:sticky md:sticky lg:top-32">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 mb-8 border-b border-gray-700 pb-6">
            {beliefs.map((belief) => (
              <button
                key={belief.id}
                onClick={() => setActiveTab(belief.id)}
                className={`text-xs font-semibold tracking-widest transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === belief.id
                    ? "text-white border-b-white"
                    : "text-gray-500 border-b-transparent hover:text-gray-300"
                }`}
              >
                {belief.label}
              </button>
            ))}
          </div>

          {/* Animated Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-light text-white mb-4">
              {activeContent?.title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {activeContent?.description}
            </p>
          </motion.div>
        </div>

        {/* Right (Parallax Image + Overlap) */}
        <motion.div
          style={{ y: imageY }}
          className="relative w-full lg:w-3/5 h-[500px] lg:-ml-32 rounded-sm overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.5)]"
        >
          <Image
            src="/images/homeImages/basis1.jpg"
            alt="Teamwork and collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}
