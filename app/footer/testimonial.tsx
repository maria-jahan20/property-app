"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Testimonial {
  id: number
  image: string
  quote: string
  name: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/footerImages/DSC04477-scaled-1.webp",
    quote:
      "Thank you for helping us throughout the project and also getting the apartment ready on time. Really happy with the effort of your team and wish you success.",
    name: "Mehazablen Chowdhury",
  },
  {
    id: 2,
    image: "/images/footerImages/IMG_4588-scaled-1.webp",
    quote:
     "Outstanding work quality and timely delivery. The team was very responsive and accommodating to all our needs. Great experience working with them.",
    name: "Mohshin Ahmed",
  },
  {
    id: 3,
    image: "/images/footerImages/DSC04730-scaled-1.webp",
    quote:
      "Excellent service and professional team. They understood our requirements perfectly and delivered beyond expectations. Highly recommended for any project.",
    name: "Sarah Johnson",
  },
  {
    id: 4,
    image: "/images/footerImages/IMG_4749-1.webp ",
    quote:
     "Assalamu Aleikum. I want to start by thanking the people at JCX for being very friendly and understanding. I have experienced this kind of cooperation very rarely in this industry. Best Wishes to the company.",
      
    name: "Ahmed Hassan",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // There are 3 steps for 4 testimonials (2 per slide)
  const totalSteps = 3

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSteps - 1 ? 0 : prev + 1))
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ]

  return (
    <section className="bg-neutral-800 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">TESTIMONIALS</h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-red-500"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col md:flex-row gap-4">
              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-80 relative overflow-hidden">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote */}
              <div className="w-full md:w-1/2 bg-black p-6 md:p-8 flex flex-col justify-between">
                <p className="text-white text-sm md:text-base leading-relaxed mb-6">{testimonial.quote}</p>
                <p className="text-white font-semibold text-sm md:text-base">-{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation & Segmented Progress Bar */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
  onClick={goToPrevious}
  className="group text-white transition-colors p-2"
  aria-label="Previous testimonial"
>
  <ArrowLeft
    size={32}
    className="transition-transform duration-300 group-hover:scale-150"
  />
</button>


          {/* Right Arrow */}
<button
  onClick={goToNext}
  className="group text-white transition-colors p-2"
  aria-label="Next testimonial"
>
  <ArrowRight 
    size={32} 
    className="transition-transform duration-300 group-hover:scale-150"
  />
</button>


          {/* Segmented Progress Bar */}
          <div className="flex flex-1 justify-between ml-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-1 w-1/3 transition-all duration-500 ${
                  currentIndex === index ? "bg-white" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  )
}
