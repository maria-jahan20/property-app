"use client"

import { motion,Variants, Transition } from "framer-motion"

interface ConcernCard {
  id: number
  title: string
  image: string
  date?: string
}

const concernsData: ConcernCard[] = [
  {
    id: 1,
    title: "JCX Development: Shaping Bangladeshi Architecture with Modern Design",
    image: "/images/blogImages/2.webp",
    date: "10 September, 2025",
  },
  {
    id: 2,
    title: "How to Maintain Your Apartment for Long-Term Value?",
    image: "/images/blogImages/3.webp",
    date: "20 January, 2025",
  },
  {
    id: 3,
    title: "How Does Location Impact Property Resale Value?",
    image: "/images/blogImages/4.webp",
    date: "20 January, 2025",
  },
  {
    id: 4,
    title: "Compliances for Land Development in Bangladesh: Things You Need to Know",
    image: "/images/blogImages/5.webp",
    date: "6 January, 2025",
  },
  {
    id: 5,
    title: "Everything About Property Taxes in Bangladesh",
    image: "/images/blogImages/6.webp",
    date: "4 January, 2025",
  },
  {
    id: 6,
    title: "Classic vs. Luxury Apartments: Which One Should You Choose In Dhaka?",
    image: "/images/blogImages/7.webp",
    date: "4 January, 2025",
  },
  {
    id: 7,
    title: "Classic vs. Luxury Apartments: Which One Should You Choose In Dhaka?",
    image: "/images/blogImages/8.webp",
    date: "4 January, 2025",
  },
  {
    id: 8,
    title: "Classic vs. Luxury Apartments: Which One Should You Choose In Dhaka?",
    image: "/images/blogImages/9.webp",
    date: "4 January, 2025",
  },
  {
    id: 9,
    title: "Classic vs. Luxury Apartments: Which One Should You Choose In Dhaka?",
    image: "/images/blogImages/10.jpg",
    date: "4 January, 2025",
  },
  {
    id: 10,
    title: "Classic vs. Luxury Apartments: Which One Should You Choose In Dhaka?",
    image: "/images/blogImages/11.webp",
    date: "4 January, 2025",
  },
]

export default function AllBlogSection() {
    const containerVariants: Variants & {
        visible: (i: number) => { opacity: number; y: number; transition: Transition }
      } = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.17, 0.67, 0.83, 0.67], // cubic-bezier equivalent of "easeOut"
          },
        }),
      }

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12">

      {/* Grid Container */}
      <div className="max-w-screen mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concernsData.map((concern, index) => (
            <motion.div
              key={concern.id}
              className="flex flex-col h-full"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image Container - Only Image Zooms */}
              <div className="relative overflow-hidden bg-gray-200 flex-1">
                <motion.img
                  src={concern.image}
                  alt={concern.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                {concern.date && <p className="text-xs text-zinc-600 mb-2">{concern.date}</p>}
                <h3 className="text-sm md:text-base font-semibold text-black leading-snug">{concern.title}</h3>
                <a href="#" className="text-xs font-semibold text-blue-500 mt-3 inline-block hover:underline">
                  READ MORE →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
