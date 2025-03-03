"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Code, BarChart, Laptop, Briefcase } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "Manufacturing Process Automation",
      category: "Automation",
      client: "Global Manufacturing Corp.",
      stats: [
        { label: "Efficiency Increase", value: "60%" },
        { label: "Cost Reduction", value: "40%" }
      ],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "E-commerce Platform Development",
      category: "Software",
      client: "RetailTech Solutions",
      stats: [
        { label: "Sales Growth", value: "200%" },
        { label: "Customer Satisfaction", value: "85%" }
      ],
      icon: <Laptop className="h-6 w-6" />
    },
    {
      title: "Digital Marketing Transformation",
      category: "Marketing",
      client: "Fashion Retail Brand",
      stats: [
        { label: "ROI Increase", value: "300%" },
        { label: "Lead Generation", value: "150%" }
      ],
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "Business Process Optimization",
      category: "Consulting",
      client: "Logistics Solutions Inc.",
      stats: [
        { label: "Operational Costs", value: "-45%" },
        { label: "Process Efficiency", value: "90%" }
      ],
      icon: <Briefcase className="h-6 w-6" />
    }
  ]

  return (
    <section 
      id="portfolio" 
      ref={ref} 
      className="relative bg-black w-full py-12 sm:py-20 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
            Explore our flagship projects and successful implementations
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Discover how we've helped businesses transform their operations and achieve remarkable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mx-auto max-w-7xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-800 
                            hover:border-gray-700 transition-all duration-300">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex-1 pr-4">
                    <span className="inline-block px-3 py-1 text-sm text-blue-400 
                                   bg-blue-400/10 rounded-full mb-2 sm:mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{project.client}</p>
                  </div>
                  <div className="text-blue-400 bg-blue-400/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                    {project.icon}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="bg-black/50 rounded-lg p-3 sm:p-4">
                      <p className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Link 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 
                           transition-colors group-hover:translate-x-2 duration-300
                           text-sm sm:text-base"
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="inline-block p-px rounded-xl bg-gradient-to-b from-white/10 to-black/10 
                         hover:from-white/20 hover:to-black/20 transition-all duration-300">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black text-white hover:bg-gray-900/80
                             transition-all duration-300 text-base sm:text-lg font-semibold">
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

