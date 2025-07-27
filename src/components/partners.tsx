"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const partnerLogos = [
  "/amazon.webp",
  "/google.webp",
  "/hcltech.png",
  "/meta.webp",
  "/microsoft.png",
  "/netflix.webp",
  "/novus.png"
];


const Partners = () => {
  return (
    <section className="py-20 bg-background px-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-red-600">P</span>ortfolio<span className="text-red-600">.</span> is trusted by
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by professionals from companies like
          </p>
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:flex sm:flex-row sm:justify-center sm:items-center gap-8 sm:gap-12 px-8 py-8">
       
        {/* Partner logos */}
        {partnerLogos.map((src, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <Image
              src={src}
              alt={`Partner logo ${idx + 1}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;