"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const PROJECTS = [ { id: 1, image: "/images/homeImages/1.jpg", title: "JCX OLYMPUS", location: "Bashundhara R/A, Dhaka", area: "1700-2250 Sq. Ft.", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, },
     { id: 2, image: "/images/homeImages/2.jpg", title: "JCX GRAND RESIDENCES", location: "Bashundhara R/A, Dhaka", area: "3242-4870 Sqft", details: { orientation: "North-South Side", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, },
      { id: 3, image: "/images/homeImages/3.jpg", title: "ICON 100", location: "Bashundhara R/A, Dhaka", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
      { id: 4, image: "/images/homeImages/4.jpg", title: "JCX PRESIDENT PARK", location: "Bashundhara R/A, Dhaka", area: "4395 Sq. Ft. (approx)", details: { orientation: "North-South Side", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, },
       { id: 5, image: "/images/homeImages/5.jpg", title: "JCX N71 LAKE CONDOS", location: "Bashundhara R/A, Dhaka", area: "3281-5204 Sq (approx)", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
       { id: 6, image: "/images/homeImages/6.jpg", title: "MODERN TOWERS", location: "Bashundhara R/A, Dhaka", area: "2500-3500 Sq. Ft.", details: { orientation: "North-South Side", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
       { id: 7, image: "/images/homeImages/7.jpg", title: "ELITE RESIDENCES", location: "Bashundhara R/A, Dhaka", area: "3000-4000 Sq. Ft.", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
       { id: 8, image: "/images/homeImages/8.jpg", title: "LUXURY PLAZA", location: "Bashundhara R/A, Dhaka", area: "2800-3800 Sq. Ft.", details: { orientation: "North-South Side", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", 

}, }, ]

export default function Perfection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const totalSlides = PROJECTS.length
  const visibleCount = 4

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <div className="w-full bg-black py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light tracking-widest text-white mb-3">OUR PERFECTIONS</h2>
        <div className="w-12 h-1 bg-red-600 mx-auto" />
      </div>

      <div className="relative px-8 md:px-16">
        {/* Carousel Sliding Row */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            width: `${(totalSlides * 100) / visibleCount}%`,
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-1/4 group cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden bg-gray-900 h-150">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="h-full group-hover:scale-105 transition-transform duration-300"
                />

                {hoveredCard === project.id && (
                  <div className="absolute inset-0 bg-black/75 flex flex-col justify-between p-6 transition-opacity duration-300">
                    <div className="space-y-2 text-sm text-white/90">
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Orientation: {project.details.orientation}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Address: {project.details.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Land Size: {project.details.landSize}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Apartment Size: {project.details.apartmentSize}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Number of Units: {project.details.units}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Number of Parking: {project.details.parking}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">•</span>
                        <span>Number of Floors: {project.details.floors}</span>
                      </div>
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 text-sm font-light tracking-wider transition-colors duration-300 w-fit">
                      EXPLORE
                    </button>
                  </div>
                )}
              </div>

              {/* Card Info */}
              <div className="bg-black px-4 py-4 border-b border-gray-800">
                <p className="text-gray-500 text-xs font-light tracking-wider mb-1">{project.location}</p>
                <h3 className="text-white font-light text-lg tracking-wider mb-2">{project.title}</h3>
                <p className="text-gray-600 text-xs font-light">{project.area}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-12 gap-4 mt-8">
  {/* Navigation buttons */}
  <div className="col-span-4 flex gap-4">
    <button
      onClick={goToPrevious}
      className="p-2 text-white/60 hover:text-white transition-colors duration-300"
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={goToNext}
      className="p-2 text-white/60 hover:text-white transition-colors duration-300"
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  </div>

  {/* Progress bar */}
  <div className="col-span-8 flex h-1 bg-gray-800">
    {PROJECTS.slice(0, totalSlides - visibleCount + 1).map((_, index) => (
      <div
        key={index}
        className={`h-1 transition-all duration-500 ${
          index === currentIndex ? "bg-white" : "bg-gray-600"
        }`}
        style={{ flex: 1 }}
      ></div>
    ))}
  </div>
</div>


      
        
      </div>
    </div>
  )
}
