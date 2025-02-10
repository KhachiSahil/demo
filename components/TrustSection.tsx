"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrustSection() {
  const [step, setStep] = useState(0);
  const totalLogos = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % totalLogos);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-800">
          The IT Partner Trusted by Industry Leaders
        </h2>

        {/* Step-wise Sliding Logo Section */}
        <div className="overflow-hidden w-full mb-12 bg-blue-100 py-6 md:py-8 rounded-xl shadow-lg">
          <motion.div
            className="flex items-center gap-12 md:gap-16"
            animate={{ x: `-${step * 180}px` }}
            transition={{ type: "tween", duration: 0.8 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 md:gap-16">
                {["comp1.webp", "comp2.webp", "comp3.webp", "comp4.webp", "comp5.webp", "comp6.svg"].map((src, index) => (
                  <div key={index} className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
                    <Image src={`/${src}`} alt="Client Logo" layout="fill" objectFit="contain" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-lg font-serif md:text-2xl text-gray-700 leading-relaxed mb-8 mx-auto">
          Our extensive portfolio includes businesses across multiple sectors, all relying on our expertise to maintain
          seamless operations and robust security.
        </p>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100+", label: "Businesses Served" },
            { value: "Thousands", label: "of Devices Managed" },
            { value: "99%", label: "Client Retention Rate" },
            { value: "24/7", label: "Dedicated Support" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 md:p-8 flex flex-col items-center justify-center text-center 
                hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-800">{item.value}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
