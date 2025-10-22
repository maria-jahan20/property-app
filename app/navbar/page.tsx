"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image" // Make sure to import Image
import { Menu, Phone } from "lucide-react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsTop(currentScrollY < 10)

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
    ${isTop ? "bg-transparent" : "bg-black/80 shadow-md fixed top-0 w-full z-[99999] transition-all duration-1000"}
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
  `

  return (
    <nav className={navClasses}>
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="JCX Logo"
              width={100} // Adjust width as needed
              height={40} // Adjust height as needed
              className="object-contain"
            />
          </Link>

          {/* Parent div that groups all right-aligned items */}
          <div className="hidden md:flex items-center gap-8 text-white uppercase text-sm font-light tracking-wider">
            {/* Group 1: Navigation Links */}
            <div className="flex items-center gap-6">
              <Link href="#residential" className="hover:text-gray-300 transition-colors">
                Residential
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="#commercial" className="hover:text-gray-300 transition-colors">
                Commercial
              </Link>
            </div>

            {/* Group 2: Phone Number */}
            <Link href="tel:16777" className="hover:text-gray-300 transition-colors flex items-center gap-2 normal-case">
              <Phone size={16} />
              <span>16777</span>
            </Link>

            {/* Group 3: Menu Button (at the very right) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-gray-300 transition-colors flex items-center gap-3"
            >
              <span>Menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute w-full">
          <Link href="#residential" className="block text-white px-4 py-3 hover:bg-gray-900 uppercase">
            Residential
          </Link>
          <Link href="#commercial" className="block text-white px-4 py-3 hover:bg-gray-900 uppercase">
            Commercial
          </Link>
          <Link href="tel:16777" className="block text-white px-4 py-3 hover:bg-gray-900 uppercase">
            16777
          </Link>
        </div>
      )}
    </nav>
  )
}