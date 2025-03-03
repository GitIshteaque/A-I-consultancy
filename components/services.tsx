"use client"

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Palette, 
  BarChart, 
  Cloud,
  Briefcase,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Search,
  Zap,
  Shield,
  Users,
  Database,
  Bot,
  Globe,
  Lock,
  X,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react'
import Link from 'next/link'

interface ServiceType {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  category?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export default function Services() {
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200])

  // Statistics data
  const statistics = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "50+", label: "Expert Team Members" }
  ]

  // Original services array with added stats
  const services: ServiceType[] = [
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
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      category: "development",
      stats: [
        { value: "100+", label: "Websites Launched" },
        { value: "99%", label: "Uptime" }
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
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
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
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-400" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to increase your online presence and reach.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Content marketing",
        "Analytics and reporting"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
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
      ],
      gradient: "from-blue-500/20 to-indigo-500/20"
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
      ],
      gradient: "from-violet-500/20 to-purple-500/20"
    }
  ]

  // Additional service categories
  const additionalServices: ServiceType[] = [
    {
      icon: <Database className="w-12 h-12 text-blue-400" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: [
        "Big Data Processing",
        "Predictive Analytics",
        "Business Intelligence",
        "Data Visualization",
        "Machine Learning Models"
      ],
      gradient: "from-teal-500/20 to-green-500/20",
      category: "data"
    },
    {
      icon: <Bot className="w-12 h-12 text-blue-400" />,
      title: "AI Solutions",
      description: "Leverage artificial intelligence to automate and optimize your business processes.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbots & Virtual Assistants",
        "AI Integration"
      ],
      gradient: "from-yellow-500/20 to-orange-500/20",
      category: "ai"
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: "IoT Services",
      description: "Connect and manage your devices with comprehensive IoT solutions.",
      features: [
        "IoT Architecture Design",
        "Device Management",
        "Real-time Analytics",
        "Edge Computing",
        "IoT Security"
      ],
      gradient: "from-pink-500/20 to-rose-500/20",
      category: "iot"
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures and monitoring.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Incident Response",
        "Compliance Management",
        "Security Training"
      ],
      gradient: "from-red-500/20 to-orange-500/20",
      category: "security"
    }
  ]

  // Combine all services
  const allServices = [...services, ...additionalServices]

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory)

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'data', name: 'Data & Analytics' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'security', name: 'Security' },
    { id: 'iot', name: 'IoT' }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const process = [
    {
      icon: <Search className="w-8 h-8" />,
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals and requirements through in-depth consultations.",
      details: [
        "Initial consultation",
        "Requirements gathering",
        "Business analysis",
        "Technical assessment"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "02",
      title: "Planning",
      description: "Developing detailed project plans with timelines and milestones.",
      details: [
        "Project roadmap",
        "Resource allocation",
        "Timeline definition",
        "Risk assessment"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "03",
      title: "Execution",
      description: "Implementing solutions with regular updates and feedback sessions.",
      details: [
        "Agile development",
        "Regular updates",
        "Quality assurance",
        "Progress tracking"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "04",
      title: "Support",
      description: "Providing ongoing maintenance and optimization for long-term success.",
      details: [
        "24/7 monitoring",
        "Performance optimization",
        "Security updates",
        "Continuous improvement"
      ]
    }
  ]

  return (
    <section id="services" className="relative bg-black w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold text-blue-400 mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive technology solutions to help your business grow and succeed.
          </motion.p>
        </motion.div>

        {/* Mobile-optimized Category Filter */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-3 min-w-max md:min-w-0 pb-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                    ${activeCategory === category.id 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white'}`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  onClick={() => setSelectedService(service)}
                  className="relative overflow-hidden rounded-2xl bg-gray-900/50 p-8 border border-gray-800 
                            hover:border-gray-700 transition-all duration-500 h-full cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-6 inline-block rounded-lg bg-blue-500/10 p-3 text-blue-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="mb-4 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="mb-6 text-gray-400">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mr-4">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedService.description}</p>
                
                {selectedService.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedService.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Process</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We follow a structured approach to ensure successful project delivery and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredProcess(index)}
              onMouseLeave={() => setHoveredProcess(null)}
            >
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gray-900/50 border border-gray-800 
                            hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-blue-500/20 mr-4 
                                   group-hover:text-blue-500/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 
                                  group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 
                               transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredProcess === index ? "auto" : 0,
                      opacity: hoveredProcess === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-2 pt-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                         border border-gray-800">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Have questions about our services? Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+918617273074"
                className="group inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg
                         hover:bg-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 8617 273 074
              </a>
              <a 
                href="mailto:ishteaqueofficial@gmail.com"
                className="group inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg
                         hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                ishteaqueofficial@gmail.com
              </a>
              <Link 
                href="/contact"
                className="group inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg
                         hover:bg-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Form
              </Link>
            </div>
            <div className="mt-6 text-gray-400">
              <p>Office Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              <p className="mt-2">
                <span className="block sm:inline">65A/2/1 Tiljala Road,</span>{" "}
                <span className="block sm:inline">Kolkata, West Bengal, India</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 