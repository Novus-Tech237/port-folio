"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Minimal Design",
    description: "Clean aesthetics that put your content in the spotlight.",
    icon: "✨",
  },
  {
    title: "Responsive",
    description: "Flawless experiences across all devices and screen sizes.",
    icon: "📱",
  },
  {
    title: "Fast Performance",
    description: "Lightning-quick load times for smooth user interactions.",
    icon: "⚡",
  },
  {
    title: "Accessibility",
    description: "Inclusive design practices for all users.",
    icon: "🌈",
  },
  {
    title: "SEO Optimized",
    description: "Built to help your site rank higher in search results.",
    icon: "🔍",
  },
]

export default function FeatureCarousel() {
  const [moveWidth, setMoveWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      // Duplicate the features, so calculate single set width.
      const totalScrollWidth = carousel.current.scrollWidth
      const singleSetWidth = totalScrollWidth / 2
      setMoveWidth(singleSetWidth)
    }
  }, [])

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 text-red-600">
          Why Choose Us
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 , ease: "easeOut" }}>
          <motion.div ref={carousel} className="overflow-hidden">
            <motion.div
              animate={{ x: -moveWidth }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex"
            >
              {[...features, ...features].map((feature, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
                >
                  <div>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}