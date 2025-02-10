"use client";
import React from "react";
import { FaExclamationTriangle, FaDollarSign, FaShieldAlt, FaCloud, FaCogs } from "react-icons/fa";

// Pain Points Data with Icons
const painPoints = [
  {
    title: "Downtime Affecting Productivity?",
    solution: "Our proactive monitoring and rapid response ensure your systems run smoothly with minimal interruptions.",
    icon: <FaExclamationTriangle className="text-red-500 text-4xl" />,
  },
  {
    title: "Escalating IT Expenses?",
    solution: "We provide cost-effective, scalable IT solutions that align with your business goals.",
    icon: <FaDollarSign className="text-green-500 text-4xl" />,
  },
  {
    title: "Concerns About Data Security and Compliance?",
    solution: "Our cutting-edge cybersecurity services protect your sensitive data and ensure compliance with industry standards.",
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: "Struggling with Outdated Technology?",
    solution: "We modernize your infrastructure with innovative cloud solutions and streamlined network systems.",
    icon: <FaCloud className="text-purple-500 text-4xl" />,
  },
  {
    title: "Complex IT Systems Holding You Back?",
    solution: "Our strategic consultancy services simplify IT management and drive efficiency.",
    icon: <FaCogs className="text-yellow-500 text-4xl" />,
  },
];

// Reusable Card Component
function PainPointCard({ title, solution, icon }: { title: string; solution: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-xl text-center">{solution}</p>
    </div>
  );
}

export default function PainPointsSection() {
  return (
    <section className="py-16 font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif md:text-4xl font-bold text-center text-gray-800 mb-12">
          Transforming IT Challenges into Growth Opportunities
        </h2>

        {/* Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard key={index} title={point.title} solution={point.solution} icon={point.icon} />
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-bold hover:bg-blue-900 transition duration-300 shadow-md hover:shadow-lg">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
