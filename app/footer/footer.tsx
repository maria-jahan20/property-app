import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    column1: [
      { label: "GALLERY", href: "#" },
      { label: "VIDEO", href: "#" },
    ],
    column2: [
      { label: "CAREER", href: "#" },
      { label: "CSR", href: "#" },
      { label: "CONTACT", href: "#" },
    ],
    column3: [
      { label: "CONSTRUCTION STATUS", href: "#" },
      { label: "NEWS & EVENTS", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div className="space-y-4">
            {footerLinks.column1.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {footerLinks.column2.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            {footerLinks.column3.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="mb-8">
          <Link href="#" className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-xs text-gray-500">© {currentYear} JCX BDI | All Rights Reserved</div>

          {/* Credit */}
          <div className="text-xs text-gray-500">Designed & Developed by Dcastalia</div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Icon size={16} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-40">
        <Link
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors shadow-lg"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} className="text-white" />
        </Link>
      </div>
    </footer>
  )
}
