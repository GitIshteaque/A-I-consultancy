"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Cloud, 
  Briefcase, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your specific business needs.",
      features: [
        "Responsive design for all devices",
        "Custom CMS integration",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
        "Performance optimization"
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-400" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "App Store optimization",
        "Ongoing maintenance and updates"
      ]
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-400" />,
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Accessibility compliance"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to increase your online presence and reach.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Content marketing",
        "Analytics and reporting"
      ]
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for your business applications.",
      features: [
        "Cloud migration strategies",
        "AWS, Azure, and Google Cloud",
        "Serverless architecture",
        "DevOps implementation",
        "Security and compliance"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-400" />,
      title: "IT Consulting",
      description: "Expert advice and guidance on technology strategy and implementation.",
      features: [
        "Technology assessment",
        "Digital transformation strategy",
        "IT roadmap development",
        "Vendor selection",
        "Project management"
      ]
    }
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals and requirements through in-depth consultations."
    },
    {
      number: "02",
      title: "Planning",
      description: "Developing detailed project plans with timelines and milestones."
    },
    {
      number: "03",
      title: "Execution",
      description: "Implementing solutions with regular updates and feedback sessions."
    },
    {
      number: "04",
      title: "Support",
      description: "Providing ongoing maintenance and optimization for long-term success."
    }
  ]

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Comprehensive technology solutions to help your business grow and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-500/10">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white ml-4">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-300 mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="group inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg
                             hover:bg-blue-600 transition-all duration-300"
                  >
                    Discuss Your Project
                    <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                
                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 bg-gray-900/50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-black/50 border border-gray-800 
                          hover:border-gray-700 transition-all duration-300"
              >
                <span className="block text-4xl sm:text-5xl font-bold text-blue-500/20 mb-4 group-hover:text-blue-500/30 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-500/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive success in the digital world.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="group inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg
                       hover:bg-blue-600 transition-all duration-300 text-lg font-semibold"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-6 h-6 transform transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 