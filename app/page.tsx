'use client'
import React from 'react'
import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Features from "@/components/features"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Nav />
      <main className="flex flex-col w-full">
        {/* Hero Section - Full height on mobile */}
        <div className="min-h-screen">
          <Hero />
        </div>

        {/* Main Content Sections - Better spacing and organization */}
        <div className="flex flex-col space-y-12 sm:space-y-0">
          {/* Services Section */}
          <div className="w-full">
            <Services />
          </div>

          {/* About Section */}
          <div className="w-full">
            <About />
          </div>

          {/* Features Section */}
          <div className="w-full">
            <Features />
          </div>

          {/* Portfolio Section */}
          <div className="w-full">
            <Portfolio />
          </div>

          {/* Testimonials Section */}
          <div className="w-full">
            <Testimonials />
          </div>

          {/* Contact Section */}
          <div className="w-full">
            <Contact />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

