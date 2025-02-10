"use client";
import { motion } from "framer-motion";

export default function LeadMagnetSection() {
  return (
    <section className="relative py-20 text-white font-serif">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 bg-[url('/ban3.webp')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60"></div> {/* Black/Greyish Overlay */}

      <div className="relative container mx-auto text-center px-6">
        {/* Animated Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Free Resource: <br />
          <span className="text-white">
            "Top 10 IT Mistakes That Could Be Holding Your Business Back"
          </span>
        </motion.h2>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg md:text-2xl font-bold mb-8 opacity-90 max-w-2xl mx-auto text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Download our exclusive guide and learn how to avoid common IT pitfalls to maximize your business potential.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="relative overflow-hidden px-8 py-4 rounded-lg text-xl font-semibold border-2 border-white
                     text-white transition-all duration-300 ease-out 
                     hover:bg-gray-100 hover:text-black shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          🚀 Access the Free Guide Instantly!
        </motion.button>
      </div>
    </section>
  );
}
