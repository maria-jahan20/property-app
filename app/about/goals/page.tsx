"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "mission",
    title: "MISSION",
    description: "Our mission is to put our customers' happiness as the first priority.",
    image: "/images/aboutImages/5.webp",
  },
  {
    id: "brand-promise",
    title: "BRAND PROMISE",
    description:
      "Our brand promise is to establish trust with clients with a touch of our individuality and integrity.",
    image: "/images/aboutImages/4.webp",
  },
  {
    id: "vision",
    title: "VISION",
    description:
      "We envision building apartments that are both luxurious and affordable, enhancing the lives of our residents.",
    image: "/images/aboutImages/6.webp",
  },
]

export default function ImageGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="px-4">
      <div className="w-screen max-w-screen h-[650px] flex">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative flex-1 overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            animate={{
              flex: hoveredId === item.id ? 1.3 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 100,
            }}
          >
            {/* Image */}
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              animate={{
                opacity: hoveredId === item.id ? 0.6 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Text Content */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              animate={{
                opacity: hoveredId === item.id ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Title */}
              <motion.h2
                className="text-white text-lg font-bold tracking-wider mb-4"
                animate={{
                  y: hoveredId === item.id ? 0 : 10,
                  opacity: hoveredId === item.id ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-white/90 text-xs leading-relaxed max-w-xs"
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0,
                  y: hoveredId === item.id ? 0 : 10,
                }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
