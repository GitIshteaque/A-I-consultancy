"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black w-full py-20">
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch to discuss how we can help you achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              <p className="text-gray-400">
                Ready to take your business or academic projects to the next level? 
                Contact us today for a consultation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-blue-400 text-xl">📍</div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">65A/2/1 Tiljala Road, Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-blue-400 text-xl">📧</div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">ishteaqueofficial@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-blue-400 text-xl">📱</div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 8617 273 074</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="block text-white font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-800 
                           text-white placeholder-gray-500 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-white font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-800 
                           text-white placeholder-gray-500 focus:outline-none focus:border-blue-500
                           transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-white font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-800 
                           text-white placeholder-gray-500 focus:outline-none focus:border-blue-500
                           transition-colors duration-300 min-h-[150px]"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-blue-600 text-white font-semibold
                         hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

