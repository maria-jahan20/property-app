"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/images/homeImages/pic-4.jpeg",
    discover: "EMBRACE THE",
    main: "ELEGANCE",
    detail: "YOU DESERVE",
  },
  {
    id: 2,
    url: "/images/homeImages/pic-2.jpeg",
    discover: "DISCOVER",
    main: "PERFECTION",
    detail: "IN EVERY DETAIL",
  },
  {
    id: 3,
    url: "/images/homeImages/pic-3.jpeg",
    discover: "MODERN",
    main: "AESTHETIC",
    detail: "MADE EASY",
  },
  {
    id: 4,
    url: "/images/homeImages/pic5.jpeg",
    discover: "INNOVATIVE",
    main: "LIVING",
    detail: "REDEFINED",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 3000) // Increased to 5 seconds for a smoother feel
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const pauseAutoPlay = () => {
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1))
    pauseAutoPlay()
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    pauseAutoPlay()
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images with Fade Transition */}
      {CAROUSEL_IMAGES.map((image, index) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.main}
          fill
          className={`
            absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
          priority={index === 0}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* --- TEXT CONTENT FIX --- */}
      {/* We now map over the text content and apply the same fade transition logic */}
      <div className="relative w-full h-full">
        {CAROUSEL_IMAGES.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 flex flex-col justify-center items-start p-8 md:p-24 text-white
              transition-all duration-1000 ease-in-out
              ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
            style={{ transitionDelay: index === currentIndex ? "200ms" : "0ms" }}
          >
            <p className="text-sm font-light tracking-[0.3em] uppercase mb-4">{slide.discover}</p>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-wider uppercase">
              {slide.main}
            </h1>
            <p className="text-sm font-light tracking-[0.3em] uppercase mt-4">{slide.detail}</p>
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
    </div>
  )
}