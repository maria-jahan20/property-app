"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// ---------------------- Project Data ----------------------
const PROJECTS = [
  {
    id: 1,
    image: "/images/propertiesImages/2.jpg",
    title: "JCX OLYMPUS",
    location: "Bashundhara R/A, Dhaka",
    category: "Ready",
    type: "Apartment",
    area: "1700-2250 Sq. Ft.",
    details: {
      orientation: "North-South Side (Lake View)",
      address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A",
      landSize: "20 Katha",
      apartmentSize: "4395 sq. ft (approx)",
      units: "26",
      parking: "52",
      floors: "D1-B2-G-D13",
    },
  },
  {
    id: 2,
    image: "/images/propertiesImages/3.jpg",
    title: "JCX GRAND RESIDENCES",
    location: "Bashundhara R/A, Dhaka",
    category: "Ongoing",
    type: "Condo",
    area: "3242-4870 Sqft",
    details: {
      orientation: "North-South Side",
      address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A",
      landSize: "20 Katha",
      apartmentSize: "4395 sq. ft (approx)",
      units: "26",
      parking: "52",
      floors: "D1-B2-G-D13",
    },
  },
  {
    id: 3,
    image: "/images/propertiesImages/4.webp",
    title: "ICON 100",
    location: "Bashundhara R/A, Dhaka",
    category: "Upcoming",
    type: "Penthouse",
    area: "6800-18300 SFT",
    details: {
      orientation: "North-South Side (Lake View)",
      address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A",
      landSize: "20 Katha",
      apartmentSize: "4395 sq. ft (approx)",
      units: "26",
      parking: "52",
      floors: "D1-B2-G-D13",
    },
  },
  { id: 4, image: "/images/propertiesImages/5.jpg", title: "ICON 100", location: "Bashundhara R/A, Dhaka", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
  { id: 5, image: "/images/propertiesImages/6.jpg", title: "ICON 100", location: "Gulshan", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Gulshan", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
  { id: 6, image: "/images/propertiesImages/7.jpg", title: "ICON 100", location: "Bashundhara R/A, Dhaka", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
  { id: 7, image: "/images/propertiesImages/8.webp", title: "ICON 100", location: "Bashundhara R/A, Dhaka", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
  { id: 8, image: "/images/propertiesImages/9.jpg", title: "ICON 100", location: "Bashundhara R/A, Dhaka", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
  { id: 9, image: "/images/propertiesImages/10.webp", title: "ICON 100", location: "Bashundhara R/A, Dhaka", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, }, 
  { id: 10, image: "/images/propertiesImages/11.webp", title: "ICON 100", location: "Bashundhara R/A, Dhaka", category: "Upcoming", type: "Penthouse", area: "6800-18300 SFT", details: { orientation: "North-South Side (Lake View)", address: "Plot-102/D, Road-16, Block-I, Bashundhara R/A", landSize: "20 Katha", apartmentSize: "4395 sq. ft (approx)", units: "26", parking: "52", floors: "D1-B2-G-D13", }, },
]

// ---------------------- FilterBar Component ----------------------
interface FilterBarProps {
  categories: string[]
  types: string[]
  locations: string[]
  selectedCategory: string
  selectedType: string
  selectedLocation: string
  onCategoryChange: (value: string) => void
  onTypeChange: (value: string) => void
  onLocationChange: (value: string) => void
}

export function FilterBar({
  categories,
  types,
  locations,
  selectedCategory,
  selectedType,
  selectedLocation,
  onCategoryChange,
  onTypeChange,
  onLocationChange,
}: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="bg-black border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-screen mx-auto px-8 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Category Filter */}
          <div className="flex-1 relative">
            <button
              onClick={() => toggleDropdown("category")}
              className="w-full flex items-center justify-between px-4 py-3 bg-black text-white text-sm font-medium"
            >
              <span>{selectedCategory || "HANDOVER"}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openDropdown === "category" ? "rotate-180" : ""}`}
              />
            </button>
            <div className="w-65 h-px bg-white"></div>
            <AnimatePresence>
              {openDropdown === "category" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-800 mt-1 z-50"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        onCategoryChange(cat)
                        setOpenDropdown(null)
                      }}
                      className={`w-full text-left px-4 py-3 text-sm ${
                        selectedCategory === cat ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Type Filter */}
          <div className="flex-1 relative">
            <button
              onClick={() => toggleDropdown("type")}
              className="w-full flex items-center justify-between px-4 py-3 bg-black text-white text-sm font-medium"
            >
              <span>{selectedType || "SELECT TYPE"}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`}
              />
            </button>
            <div className="w-65 h-px bg-white"></div>
            <AnimatePresence>
              {openDropdown === "type" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-800 mt-1 z-50"
                >
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        onTypeChange(type)
                        setOpenDropdown(null)
                      }}
                      className={`w-full text-left px-4 py-3 text-sm ${
                        selectedType === type ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Location Filter */}
          <div className="flex-1 relative">
            <button
              onClick={() => toggleDropdown("location")}
              className="w-full flex items-center justify-between px-4 py-3 bg-black text-white text-sm font-medium"
            >
              <span>{selectedLocation || "SELECT LOCATION"}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openDropdown === "location" ? "rotate-180" : ""}`}
              />
            </button>
            <div className="w-65 h-px bg-white"></div>
            <AnimatePresence>
              {openDropdown === "location" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-800 mt-1 z-50"
                >
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        onLocationChange(loc)
                        setOpenDropdown(null)
                      }}
                      className={`w-full text-left px-4 py-3 text-sm ${
                        selectedLocation === loc ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------- Main Property Section ----------------------
export default function PropertySection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const [selectedCategory, setSelectedCategory] = useState("Select Category")
  const [selectedType, setSelectedType] = useState("Select Type")
  const [selectedLocation, setSelectedLocation] = useState("Select Location")

  const categories = ["Select Category", "Ready", "Ongoing", "Upcoming"]
  const types = ["Select Type", "Apartment", "Condo", "Penthouse"]
  const locations = ["Select Location", "Bashundhara R/A", "Gulshan", "Banani"]

  const filteredProjects = PROJECTS.filter((project) => {
    const matchCategory = selectedCategory === "Select Category" || project.category === selectedCategory
    const matchType = selectedType === "Select Type" || project.type === selectedType
    const matchLocation = selectedLocation === "Select Location" || project.location.includes(selectedLocation)
    return matchCategory && matchType && matchLocation
  })

  return (
    <div>
      {/* Filter Bar */}
      <FilterBar
        categories={categories}
        types={types}
        locations={locations}
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        selectedLocation={selectedLocation}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        onLocationChange={setSelectedLocation}
      />

      {/* Property Grid */}
      <div className="w-full bg-white py-16 px-8 md:px-16">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-900 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative h-[500px]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay (only inside image area) */}
                <AnimatePresence>
  {hoveredCard === project.id && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/75 flex flex-col justify-center p-6 text-white"
    >
      <div className="space-y-2 text-sm text-white/90">
        <p>Orientation: {project.details.orientation}</p>
        <p>Address: {project.details.address}</p>
        <p>Land Size: {project.details.landSize}</p>
        <p>Apartment Size: {project.details.apartmentSize}</p>
        <p>Units: {project.details.units}</p>
        <p>Parking: {project.details.parking}</p>
        <p>Floors: {project.details.floors}</p>

        {/* Explore button inline */}
        <div className="flex items-center gap-3 pt-3">
          <div className="h-px w-12 bg-white"></div>
          <button className="text-white text-xs font-light tracking-wider hover:text-gray-300 transition">
            EXPLORE
          </button>
          <div className="h-px w-12 bg-white"></div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

              </div>

              {/* Footer Section (always visible) */}
              <div className="bg-white px-4 py-4">
                <p className="text-black text-xs font-light tracking-wider mb-1">{project.location}</p>
                <h3 className="text-black font-bold text-lg tracking-wider mb-2">{project.title}</h3>
                <p className="text-black text-xs font-light">{project.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
