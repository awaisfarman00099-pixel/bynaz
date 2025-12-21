"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Ayesha Malik",
    role: "E-Commerce Entrepreneur",
    content:
      "BymzTech transformed my Shopify store into a revenue-generating machine. Their attention to detail and marketing expertise is unmatched. Sales increased by 300% in just 3 months!",
    rating: 5,
  },
  {
    name: "John Reynolds",
    role: "Marketing Director",
    content:
      "Working with BymzTech has been a game-changer for our digital presence. Their SEO strategies and social media campaigns delivered results beyond our expectations.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Business Owner",
    content:
      "Professional, creative, and results-driven. The team at BymzTech helped us scale from a local business to serving customers across multiple countries. Highly recommended!",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Success stories from businesses we've helped grow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 rounded-3xl relative">
            {/* Quote Mark */}
            <div className="text-8xl text-primary/20 font-serif absolute top-8 left-8">"</div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-balance">
                {testimonials[currentIndex].content}
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-xl gradient-text">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button onClick={prev} size="icon" variant="outline" className="rounded-full bg-transparent">
                <ChevronLeft size={20} />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button onClick={next} size="icon" variant="outline" className="rounded-full bg-transparent">
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
