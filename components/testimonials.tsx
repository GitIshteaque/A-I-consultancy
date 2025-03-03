"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "AIC's website development showcases precision and professionalism.",
    author: "Mr. Amir Akhtar",
    position: "Director, Cost Accountants of India",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "A visionary platform for academic growth.",
    author: "Mr. Nathan",
    position: "School Principal",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Exceptional clarity in educational resource design.",
    author: "Gaurav Ghosh",
    position: "Commerce Teacher, St. John's School",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Innovative solutions for student engagement.",
    author: "Sabad Akhtar Khan",
    position: "Mathematician & Vice Principal, Grace Liang School",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="testimonials" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm10%2017c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm0-1.5c-3.038%200-5.5-2.462-5.5-5.5s2.462-5.5%205.5-5.5%205.5%202.462%205.5%205.5-2.462%205.5-5.5%205.5z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Hear what educators and professionals have to say about our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800 p-6 rounded-lg shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <Quote className="h-8 w-8 text-blue-400 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="mb-6 text-blue-100 text-lg italic relative z-10">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-blue-300 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-700 rounded-tl-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

