"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <div className="w-full h-[200px] overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ minWidth: "200%" }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center mx-4">
              <span
                className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
                style={{
                  WebkitTextStroke: "2px gray",
                }}
              >
                Build your online CV with Portfolio.
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
