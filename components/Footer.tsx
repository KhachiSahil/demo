import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdCloud, MdSecurity, MdComputer, MdCode, MdHome, MdInfo, MdContactPage } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-20 border-t border-gray-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">About WebAlora</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            WebAlora is a leading IT service provider, delivering tailored, high-performance solutions 
            to businesses across the UK.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">Our Services</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <MdCloud className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">Cloud Solutions</a>
            </li>
            <li className="flex items-center gap-3">
              <MdSecurity className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">Cybersecurity</a>
            </li>
            <li className="flex items-center gap-3">
              <MdComputer className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">IT Consulting</a>
            </li>
            <li className="flex items-center gap-3">
              <MdCode className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">Software Development</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <MdHome className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-3">
              <MdInfo className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            </li>
            <li className="flex items-center gap-3">
              <MdContactPage className="text-blue-600 text-xl" />
              <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-900">Connect With Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="p-4 bg-gray-100 text-blue-900 rounded-full hover:bg-blue-50 transition-all text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="p-4 bg-gray-100 text-blue-900 rounded-full hover:bg-blue-50 transition-all text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="p-4 bg-gray-100 text-blue-900 rounded-full hover:bg-blue-50 transition-all text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-gray-500 border-t border-gray-300 pt-8 text-lg">
        © {new Date().getFullYear()} WebAlora. All Rights Reserved.
      </div>
    </footer>
  );
}
