"use client"

import Image from "next/image"
export default function HeavenSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] overflow-hidden my-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homeImages/contact.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-3xl">
          <p className="text-xs md:text-xs tracking-widest mb-2">A LITTLE PIECE OF</p>
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-light mb-6">HEAVEN</h2>
          <div className="grid grid-row-3">
            <span className="mb-2" >______________</span>
            <a
              href="#contact"
              className="text-white text-xs tracking-widest hover:text-white/70 transition-colors duration-300 inline-block"
            >
              CONTACT US
            </a>
            <span>______________</span>
          </div>
        </div>
      </div>
    </section>
  )
}
