"use client";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your IT infrastructure to understand your unique needs.",
    },
    {
      title: "Tailored Strategy Development",
      description: "Our experts design a customised IT plan aligned with your business objectives.",
    },
    {
      title: "Seamless Implementation",
      description:
        "We deploy solutions with minimal disruption, ensuring smooth integration into your existing systems.",
    },
    {
      title: "Ongoing Monitoring & Support",
      description:
        "Our team provides continuous monitoring and 24/7 support to keep your systems running at peak performance.",
    },
    {
      title: "Regular Reviews & Optimisation",
      description: "We regularly evaluate and refine your IT strategy to adapt to evolving business needs.",
    },
  ];

  return (
    <section className="py-16 bg-blue-50 flex justify-center font-serif">
      <div className="w-full max-w-5xl p-8 rounded-lg shadow-lg relative bg-white/70 backdrop-blur-lg">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How We Deliver Exceptional IT Services
        </motion.h2>

        {/* Steps Container */}
        <div className="relative">
          {/* Vertical Progress Line (only on large screens) */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <motion.div
                  className="relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold shadow-md transition-transform duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  {index + 1}
                </motion.div>

                {/* Step Content */}
                <motion.div
                  className="mt-4 md:mt-0 w-full md:w-[50%] p-5 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-2xl text-blue-900">{step.title}</h3>
                  <p className="text-gray-700 text-lg mt-2">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
