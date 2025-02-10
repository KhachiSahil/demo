"use client"
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center max-w-3xl">
        <motion.h2
          className="text-4xl font-bold mb-6 leading-tight text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Empower Your Business with WebAlora's Expertise
        </motion.h2>

        <motion.p
          className="text-lg mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join the growing number of businesses that trust WebAlora for their IT needs. 
          Let's explore how we can help you achieve your business goals through strategic, reliable IT solutions.
        </motion.p>

        <motion.button
          className="px-8 py-4 border-2 border-gray-800 text-lg font-semibold rounded-lg transition-all duration-300 relative overflow-hidden hover:bg-gray-800 hover:text-white"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          Book a Free Consultation
        </motion.button>
      </div>
    </section>
  );
}
