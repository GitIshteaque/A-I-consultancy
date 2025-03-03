"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative bg-black min-h-screen w-full py-20">
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 text-lg">
            Learn about the founder and vision behind A&I Consultancy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Ishteaque Ahmed Ishaqui</h3>
              <p className="text-gray-400 mb-2">Sole Founder & Director</p>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Ishteaque A-I is the whole and soul of A&I Consultancy. With a strong academic
                background in Commerce and Accountancy, he has established this one-person
                company with a mission to bridge academic theory with practical solutions.
              </p>
              <p>
                His hands-on approach ensures that every project receives personal attention and
                meets the highest standards of quality. As both the visionary and executor,
                Ishteaque brings a unique perspective to each client engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-blue-400 mb-4 text-2xl">📚</div>
                <h4 className="text-xl font-semibold text-white mb-2">Academic Consultancy</h4>
                <p className="text-gray-400">Expert guidance in academic research and writing</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-blue-400 mb-4 text-2xl">📊</div>
                <h4 className="text-xl font-semibold text-white mb-2">Portfolio Development</h4>
                <p className="text-gray-400">Professional portfolio creation and optimization</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-blue-400 mb-4 text-2xl">💻</div>
                <h4 className="text-xl font-semibold text-white mb-2">Website Design</h4>
                <p className="text-gray-400">Modern and responsive web development</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="text-blue-400 mb-4 text-2xl">📈</div>
                <h4 className="text-xl font-semibold text-white mb-2">Commerce/Accountancy Tutoring</h4>
                <p className="text-gray-400">Specialized tutoring in business subjects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

