"use client"

import Image from "next/image"

interface Award {
  id: string
  image: string
  alt: string
}

interface AwardsSectionProps {
  awards?: Award[]
}

export default function AwardsSection({
  awards = [
    {
      id: "1",
      image: "/images/footerImages/Award-2-min.webp",
      alt: "Award-2-min",
    },
    {
      id: "2",
      image: "/images/footerImages/Award-1-min.webp",
      alt: "Award-1-min",
    },
    {
      id: "3",
      image: "/images/footerImages/Award-3-min.webp",
      alt: "Award-3-min",
    },
  ],
}: AwardsSectionProps) {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#2D3748] tracking-wide uppercase mb-4">
            Our Awards and Recognition
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-0.5 bg-blue-600"></div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* KEY CHANGES:
            - Changed md:grid-cols-2 to md:grid-cols-3
            - Added max-w-6xl to constrain the grid's width
            - Added mx-auto to center the newly constrained grid
            - Changed shadow to shadow-md for a subtler look like the original
          */}
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* This is the container for the image */}
              <div className="relative w-full aspect-[3/2] flex items-center justify-center p-6 md:p-8">
                <div className="relative w-4/5 h-4/5">
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.alt}
                    fill
                    className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}