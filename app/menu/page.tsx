"use client"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuSection({ isOpen, onClose }: MenuProps) {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Management Team", href: "/management" },
    { name: "Properties", href: "/properties" },
    { name: "Concerns", href: "/concern" },
    { name: "Landowner", href: "/landowner" },
    { name: "Buyer", href: "/buyer" },
    { name: "Blogs", href: "/blogs" },
    { name: "News & Events", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "CSR", href: "/csr" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />

          {/* Left side (optional image area) */}
          <div className="hidden lg:block w-1/2 h-full relative" />

          {/* Right side - Menu */}
          <motion.div
            className="relative w-full lg:w-1/2 bg-zinc-900 text-white overflow-y-auto h-full flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-gray-800 rounded-full transition-colors z-10"
              aria-label="Close menu"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Main Content */}
            <div className="p-12 pt-20 flex-1 flex">
              {/* Left Column */}
              <div className="flex flex-col justify-between w-1/2 pr-12">
                <div>
                  <h3 className="text-lg font-light tracking-wide text-gray-300 mb-2">Residential</h3>
                  <h3 className="text-lg font-light tracking-wide text-gray-300">Commercial</h3>
                </div>

                <div className="mb-96 text-white/70">
                  <h4 className="text-sm font-semibold text-white mb-3 tracking-wide">JCX Business Tower</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Plot 110/A, Jasper Street, Block A,
                    <br />
                    Bashundhara R/A, Dhaka-1212, Bangladesh
                  </p>
                  <p className="text-xs text-gray-500">© 2025 JCX(BD) All Rights Reserved</p>
                </div>
              </div>

              {/* Right Column - Navigation Links */}
              <div className="w-1/2 flex flex-col justify-start space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="block text-sm font-light text-gray-300 hover:text-white transition-colors tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
