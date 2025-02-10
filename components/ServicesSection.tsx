"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCloud, FaShieldAlt, FaCogs, FaSyncAlt, FaNetworkWired, FaLightbulb } from "react-icons/fa";

// Services Data
const services = [
  {
    title: "Managed IT Services",
    description: "Comprehensive management of your IT infrastructure to ensure seamless, secure operations.",
    icon: <FaCogs className="text-blue-600 text-5xl" />,
  },
  {
    title: "Cybersecurity Solutions",
    description: "Advanced protection against cyber threats with proactive monitoring, threat detection, and data encryption.",
    icon: <FaShieldAlt className="text-red-600 text-5xl" />,
  },
  {
    title: "Cloud Solutions & Migration",
    description: "Secure, scalable cloud services that enhance flexibility and efficiency.",
    icon: <FaCloud className="text-purple-600 text-5xl" />,
  },
  {
    title: "IT Consultancy & Strategy",
    description: "Expert guidance to align technology with your business objectives for sustainable growth.",
    icon: <FaLightbulb className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Reliable solutions to protect and recover your critical data with minimal downtime.",
    icon: <FaSyncAlt className="text-green-600 text-5xl" />,
  },
  {
    title: "Network Infrastructure Design & Support",
    description: "Building robust, scalable networks to support your business now and into the future.",
    icon: <FaNetworkWired className="text-indigo-600 text-5xl" />,
  },
];

// Service Card Component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <motion.div
      className="bg-white p-6 font-serif rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-xl text-center flex-grow">{description}</p>
    </motion.div>
  );
}

// Main Section Component
export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-serif md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          End-to-End IT Solutions Tailored for Your Business
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex"
            >
              <ServiceCard title={service.title} description={service.description} icon={service.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
