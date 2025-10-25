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
    title: "handover of JCX Nurani Heights",
    image: "/images/newsImages/1.webp",
    date: "10 September, 2025",
  },
  {
    id: 2,
    title: "Ground Breaking Ceremony of JCX Golpo Bari",
    image: "/images/newsImages/3.webp",
    date: "20 January, 2025",
  },
  {
    id: 3,
    title: "Fire safety Tanning",
    image: "/images/newsImages/4.webp",
    date: "20 January, 2025",
  },
  {
    id: 4,
    title: "Capstone Course",
    image: "/images/newsImages/5.webp",
    date: "6 January, 2025",
  },
  {
    id: 5,
    title: "Annual Reward Program 2025",
    image: "/images/newsImages/6.webp",
    date: "4 January, 2025",
  },
  {
    id: 6,
    title: "JCX Pearl handover ceremony",
    image: "/images/newsImages/7.webp",
    date: "4 January, 2025",
  },
  {
    id: 7,
    title: "MOU with City Bank PLC",
    image: "/images/newsImages/8.webp",
    date: "4 January, 2025",
  },
  {
    id: 8,
    title: "Meena Bazar at JCX Business Tower",
    image: "/images/newsImages/9.webp",
    date: "4 January, 2025",
  },
  {
    id: 9,
    title: "The Ground Breaking Ceremony of “𝐉𝐂𝐗 𝐅𝐨𝐫𝐭𝐮𝐧𝐞”",
    image: "/images/newsImages/10.webp",
    date: "4 January, 2025",
  },
  {
    id: 10,
    title: "Ground Breaking Ceremony of JCX Astoria",
    image: "/images/newsImages/2.webp",
    date: "4 January, 2025",
  },
]

export default function AllEventSection() {
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
