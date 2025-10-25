"use client"

import { motion } from "framer-motion"

interface ConcernCard {
  id: number
  title: string
  image: string
  isMiddle?: boolean
}

const concernsData: ConcernCard[] = [
  {
    id: 1,
    title: "JCX TRADING LIMITED",
    image: "/images/concernImages/6.webp",
  },
  {
    id: 2,
    title: "JCX GOLD AND DIAMOND",
    image: "/images/concernImages/2.jpg",
    isMiddle: true,
  },
  {
    id: 3,
    title: "JCX ARCHITECTS & INTERIOR",
    image: "/images/concernImages/3.webp",
  },
  {
    id: 4,
    title: "JCX HOSPITALITY INDUSTRY",
    image: "/images/concernImages/4.jpg",
  },
  {
    id: 5,
    title: "JCX PROPERTY LTD",
    image: "/images/concernImages/5.webp",
  },
]

export default function ConcernsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-xl text-black font-light tracking-wide">OUR CONCERNS</h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
      </div>

      {/* Grid Container */}
      <div className="max-w-screen mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 items-end">
          {concernsData.map((concern) => (
            <motion.div
              key={concern.id}
              className={`flex flex-col ${concern.isMiddle ? "" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: concern.id * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container with Zoom Effect */}
              <motion.div
                className="relative overflow-hidden bg-gray-200 flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
  className={`relative w-full ${
    concern.isMiddle
      ? "h-[650px] md:h-[300px] lg:h-[650px]"
      : "h-[550px] md:h-[320px] lg:h-[550px]"
  }`}
>
  <motion.img
    src={concern.image}
    alt={concern.title}
    className="w-full h-full object-cover"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  />
</div>

              </motion.div>

              {/* Title */}
              <div className="mt-4">
                <h4 className="text-sm md:text-base font-semibold text-black tracking-wider">{concern.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
