"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"

interface FormData {
  firstName: string
  lastName: string
  phoneNumber: string
  phoneNumberAlt: string
  email: string
  location: string
  landSize: string
  features: string
  message: string
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    phoneNumberAlt: "",
    email: "",
    location: "",
    landSize: "",
    features: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  // ✅ Added scroll-based animation references
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.9, 1])
  const sectionY = useTransform(scrollYProgress, [0, 0.3], [40, 0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        phoneNumberAlt: "",
        email: "",
        location: "",
        landSize: "",
        features: "",
        message: "",
      })
      setSubmitted(false)
    }, 2000)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      style={{
        opacity: sectionOpacity,
        y: sectionY,
      }}
      className="min-h-4xl bg-white py-16 px-4 sm:px-6 lg:px-auto"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl font-light tracking-wide text-black mb-2">ENQUIRY</h1>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="FIRST NAME"
                className="w-full text-black/30 bg-transparent border-b border-black/30 pb-3 text-sm tracking-wide placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="LAST NAME"
                className="w-full text-black/30 bg-transparent border-b border-black/30 pb-3 text-sm tracking-wide placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                required
              />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="PHONE NUMBER (LANDOWNER)"
                className="w-full text-black/30 bg-transparent border-b border-black/30 pb-3 text-sm tracking-wide placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="w-full text-black/30 bg-transparent border-b border-black/30 pb-3 text-sm tracking-wide placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                required
              />
            </motion.div>
          </div>

          {/* Row 5 */}
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              rows={6}
              className="w-full text-black/30 bg-transparent border-b border-black/30 pb-3 text-sm tracking-wide placeholder-black/50 focus:outline-none focus:border-black transition-colors resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div className="flex justify-center pt-8" variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={submitted}
              className="px-8 py-3 border border-primary text-primary text-sm tracking-widest font-medium hover:bg-transparent hover:text-primary-black transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? "SUBMITTED" : "SUBMIT"}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  )
}
