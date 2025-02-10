"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdHome, MdInfo, MdContactPage, MdWork } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-8 md:px-16 flex justify-between items-center h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-28 w-28">
            <Image src="/logo.jpeg" alt="WebAlora Logo" fill className="object-contain" />
          </div>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          <li>
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
              <MdHome className="text-2xl text-blue-600" /> Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
              <MdInfo className="text-2xl text-blue-600" /> About
            </Link>
          </li>
          <li>
            <Link href="/services" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
              <MdWork className="text-2xl text-blue-600" /> Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
              <MdContactPage className="text-2xl text-blue-600" /> Contact
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Link href="/get-started" className="hidden md:block px-8 py-3 border-2 border-blue-700 text-blue-700 text-lg font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all">
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-900 text-3xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full flex flex-col items-center py-6 space-y-6 text-lg font-semibold">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
            <MdHome className="text-2xl text-blue-600" /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
            <MdInfo className="text-2xl text-blue-600" /> About
          </Link>
          <Link href="/services" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
            <MdWork className="text-2xl text-blue-600" /> Services
          </Link>
          <Link href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all">
            <MdContactPage className="text-2xl text-blue-600" /> Contact
          </Link>
          <Link href="/get-started" className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
