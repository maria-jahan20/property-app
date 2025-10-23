"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/images/homeImages/p4.jpg",
    discover: "EMBRACE THE",
    main: "ELEGANCE",
    detail: "YOU DESERVE",
  },
  {
    id: 2,
    url: "/images/homeImages/p2.jpg",
    discover: "DISCOVER",
    main: "PERFECTION",
    detail: "IN EVERY DETAIL",
  },
  {
    id: 3,
    url: "/images/homeImages/p3.jpg",
    discover: "MODERN",
    main: "AESTHETIC",
    detail: "MADE EASY",
  },
  {
    id: 4,
    url: "/images/homeImages/p5.jpg",
    discover: "INNOVATIVE",
    main: "LIVING",
    detail: "REDEFINED",
  },
  {
    id: 5,
    url: "/images/homeImages/p1.jpg",
    discover: "INNOVATIVE",
    main: "LIVING",
    detail: "REDEFINED",
  },
  {
    id: 6,
    url: "/images/homeImages/p6.jpg",
    discover: "INNOVATIVE",
    main: "LIVING",
    detail: "REDEFINED",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState("next") // track slide direction

  // 👉 Define these BEFORE useEffect
  const pauseAutoPlay = () => {
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 4000)
  }

  const goToPrevious = () => {
    setDirection("prev")
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1))
    pauseAutoPlay()
  }

  const goToNext = () => {
    setDirection("next")
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    pauseAutoPlay()
  }

  // ✅ Now `goToNext` exists before useEffect runs
  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      goToNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Sliding Images */}
      <div
        className="flex transition-transform duration-[1000ms] ease-in-out w-full h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {CAROUSEL_IMAGES.map((image) => (
          <div key={image.id} className="relative w-full h-screen flex-shrink-0">
            <Image
              src={image.url}
              alt={image.main}
              fill
              className="object-cover"
              priority={image.id === 1}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-24 text-white">
              <p className="text-sm font-light tracking-[0.3em] uppercase mb-4">{image.discover}</p>
              <h1 className="text-7xl md:text-9xl font-extralight tracking-wider uppercase">
                {image.main}
              </h1>
              <p className="text-sm font-light tracking-[0.3em] uppercase mt-4">{image.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 z-20 text-white">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 text-2xl">
            <button onClick={goToPrevious} className="hover:opacity-70 transition-opacity" aria-label="Previous">
              &larr;
            </button>
            <button onClick={goToNext} className="hover:opacity-70 transition-opacity" aria-label="Next">
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Slider Indicator */}
      <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2 flex">
        {CAROUSEL_IMAGES.map((_, index) => (
          <div
            key={index}
            className={`w-25 h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-white w-12" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
