"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "John Doe", company: "ABC Corp", testimonial: "WebAlora transformed our IT infrastructure, significantly improving our productivity and security." },
    { name: "Jane Smith", company: "XYZ Inc", testimonial: "The team at WebAlora is responsive, knowledgeable, and always goes above and beyond." },
    { name: "Michael Lee", company: "TechWave", testimonial: "Their support is top-notch. Fast response times and excellent service!" },
    { name: "Sarah Johnson", company: "CloudNet", testimonial: "A game changer for our business. Highly recommended!" },
    { name: "David Brown", company: "NextGen Solutions", testimonial: "Fantastic service! The team truly understands client needs." },
    { name: "Emily Wilson", company: "SoftTech", testimonial: "Reliable, professional, and always delivering quality solutions." },
    { name: "Chris Evans", company: "CyberSec", testimonial: "Enhanced our security protocols and streamlined IT processes." },
    { name: "Sophia Martinez", company: "InnovaTech", testimonial: "Great experience working with WebAlora. Efficient and skilled team!" },
    { name: "Daniel Carter", company: "FutureCloud", testimonial: "Their expertise helped us scale our operations seamlessly." },
    { name: "Olivia Adams", company: "DigitalVerse", testimonial: "Highly competent and always ready to assist. Love their service!" }
  ];

  return (
    <section className="relative py-16 flex font-serif justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-[url('/map.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-700/20"></div>

      <div className="relative container max-w-6xl">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={50}  
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 2, spaceBetween: 60 }  
          }}
          className="mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full h-72 flex flex-col justify-center p-10 rounded-xl shadow-lg bg-[#E3EAF5] border border-gray-400 text-center text-lg leading-relaxed
                           hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="mb-6 text-gray-800 italic text-xl flex-1">
                  "{testimonial.testimonial}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900 text-2xl">{testimonial.name}</p>
                  <p className="text-gray-600 text-lg">{testimonial.company}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Explore More Button */}
        <div className="text-center">
          <motion.button
            className="px-6 py-3 rounded-lg text-lg font-semibold bg-[#1E3A8A] text-white shadow-md
                       transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore More Success Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
}
