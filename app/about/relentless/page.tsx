"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"


export default function RelentlessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const imageY2 = useTransform(scrollY, [0,500], [0, -120])
  const imageY3 = useTransform(scrollY, [0, 500], [0, -120])

  return (
    <div ref={containerRef} className="relative w-screen bg-black md:py-24">
      <div className="max-w-screen mx-auto px-2 md:px-12">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-center mb-2">
            RELENTLESS IN GOING BEYOND
          </h2>
          {/* Red underline accent */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-red-600" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-12">
          {/* Left: Text Content */}
          <div className="space-y-4 text-gray-300 mb-16">
            <p className="text-base md:text-xs">
              JCX Developments Ltd embarked on the Real Estate journey with the commitment to bring contemporary design
              and develop large-scale Residential, Commercial, and Condominium projects in Bangladesh with Japanese
              collaboration and experience.
            </p>

            <p className="text-base md:text-xs">
              We strive to deliver precious, equitable solutions to our client's wishes and requirements so that their
              aspirations become a reality. This will be accomplished by introducing state-of-the-earth innovative
              Japanese technologies with the partnership with Creed Group from Japan.
            </p>

            <p className="text-base md:text-xs">
              Creed Group, founded in 1996, is a real estate investment company with extensive experience in Japan's
              mature real estate market. Creed Group has been investing in Malaysia, Vietnam, Cambodia, Indonesia,
              Bangladesh, the Philippines, and Myanmars expanding real estate markets since 2002, with a gross
              development value of over USD 800 million to date. Creed Group is concentrating its operations in
              Southeast Asia, with a strategy to work with the best in the industry and bring Japanese quality and
              knowledge to the region.
            </p>

            <p className="text-base md:text-xs">
              The logo defines our philosophy. Beyond bonding explains our allegiance to our clients. The only way we
              can advance forward is when we take our clients with us into the realm of success, where their dreams are
              brought into reality. We go above and beyond to provide an elegant solution to their requirements and only
              stop when we achieve to see their smiles.
            </p>
          </div>

          {/* Right: Image Grid with Scroll Animation */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-12">
  {/* Left Image */}
  <motion.div 
    style={{ y: imageY2 }} 
    className="relative w-full h-[750px] md:h-[450px] overflow-hidden mt-[130px]"
  >
    <motion.div style={{ y: imageY3 }} className="absolute inset-0">
      <Image
        src="/images/aboutImages/2.webp"
        alt="Luxury residential building"
        fill
        className="object-cover"
      />
    </motion.div>
  </motion.div>

  {/* Right Image */}
  <motion.div 
    style={{ y: imageY3 }} 
    className="relative w-full h-[900px] md:h-[600px] overflow-hidden"
  >
    <motion.div style={{ y: imageY2 }} className="absolute inset-0">
      <Image
        src="/images/aboutImages/3.webp"
        alt="Modern rooftop lounge"
        fill
        className="object-cover"
      />
    </motion.div>
  </motion.div>
</div>
</div>

      </div>
    </div>
  )
}
