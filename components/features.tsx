"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "Comprehensive business strategy development and implementation guidance"
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "Creative approaches to complex business and academic challenges"
    },
    {
      icon: "🤝",
      title: "Personal Attention",
      description: "Dedicated one-on-one support throughout your project"
    },
    {
      icon: "📈",
      title: "Growth Focus",
      description: "Results-driven strategies for sustainable business growth"
    }
  ]

  return (
    <section 
      id="features" 
      className="relative bg-black w-full py-20 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Features</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how our expertise and personalized approach can help you achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700
                         transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-px rounded-xl bg-gradient-to-b from-white/20 to-white/0 
                         hover:from-white/30 hover:to-white/5 transition-all duration-300">
            <button className="px-8 py-4 rounded-xl bg-black text-white hover:bg-gray-900/80
                             transition-all duration-300 text-lg font-semibold">
              Learn More About Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

