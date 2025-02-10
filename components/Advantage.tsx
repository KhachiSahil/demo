"use client";
import { motion } from "framer-motion";

export default function AdvantageSection() {
  const advantages = [
    {
      title: "Tailored Solutions for Every Business",
      description:
        "We customize our services to meet the unique needs of each client, ensuring optimal performance and growth.",
    },
    {
      title: "Proactive IT Management",
      description:
        "We identify and resolve potential issues before they impact your business, with an average response time of under 5 minutes.",
    },
    {
      title: "Transparent, Predictable Pricing",
      description: "Our straightforward pricing ensures you know exactly what you're paying for.",
    },
    {
      title: "Scalable IT Solutions",
      description: "As your business grows, our solutions evolve to meet your changing needs.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-white font-serif flex justify-center overflow-hidden">
      <div className="container max-w-6xl relative">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-blue-900 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The WebAlora Advantage
        </motion.h2>

        {/* Central Vertical Line (Visible only on larger screens) */}
        <motion.div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400"
          style={{ height: "85%", maxWidth: "100vw" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Advantage Cards */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Horizontal Branch Line (Only on larger screens) */}
              <motion.div
                className="hidden md:block absolute top-1/2 w-[50px] sm:w-[60px] h-1 bg-blue-400"
                style={{
                  left: index % 2 !== 0 ? "50%" : "auto",
                  right: index % 2 === 0 ? "50%" : "auto",
                  maxWidth: "100vw",
                }}
                initial={{ width: "0px" }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              ></motion.div>

              {/* Advantage Card */}
              <motion.div
                className="p-6 sm:p-8 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-blue-200 w-full md:w-[45%] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
