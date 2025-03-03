"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-black w-full py-12">
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">A&I consultancy</h3>
            <p className="text-gray-400">
              Your partner in business growth and academic excellence
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Academic Consultancy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Tutoring</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 A&I consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

