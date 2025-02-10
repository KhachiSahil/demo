"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-white">
      {/* Optional Background Decoration */}
      <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative container mx-auto text-center px-6">
        {/* Animated Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Your Strategic IT Partner for Growth & Innovation
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg md:text-xl opacity-90 text-gray-700 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          WebAlora is a leading IT service provider, delivering tailored, high-performance solutions to businesses
          across the UK. Our commitment to excellence and innovation drives our clients' success in an ever-evolving
          digital landscape.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md
                     transition-all duration-300 hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Learn More About Us
        </motion.button>
      </div>
    </section>
  );
}
