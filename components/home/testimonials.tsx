"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Ayesha Malik",
    role: "E-Commerce Entrepreneur",
    content:
      "Ecombyzaman transformed my Shopify store into a revenue-generating machine. Their attention to detail and marketing expertise is unmatched. Sales increased by 300% in just 3 months!",
    rating: 5,
    image: "/images/1.jpg",
    imageTitle: "E-Commerce Store Optimization Services - Shopify Development",
    imageDescription: "Professional e-commerce store optimization and Shopify development services delivering 300% sales growth through expert store setup, product optimization, and conversion rate improvements.",
  },
  {
    name: "John Reynolds",
    role: "Marketing Director",
    content:
      "Working with Ecombyzaman has been a game-changer for our digital presence. Their SEO strategies and social media campaigns delivered results beyond our expectations.",
    rating: 5,
    image: "/images/2.jpg",
    imageTitle: "SEO & Digital Marketing Services - Search Engine Optimization",
    imageDescription: "Comprehensive SEO and digital marketing services including search engine optimization, social media marketing, and content strategy to drive organic traffic and improve online visibility.",
  },
  {
    name: "Fatima Noor",
    role: "Business Owner",
    content:
      "Professional, creative, and results-driven. The team at Ecombyzaman helped us scale from a local business to serving customers across multiple countries. Highly recommended!",
    rating: 5,
    image: "/images/3.jpg",
    imageTitle: "Web Development & E-Commerce Solutions - Global Business Growth",
    imageDescription: "Custom web development and e-commerce solutions enabling businesses to scale internationally through responsive website design, multi-platform integration, and digital transformation services.",
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
              <div className="flex items-center justify-center gap-4">
                <div className="relative group">
                  <img
                    src={testimonials[currentIndex].image || "/images/1.jpg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    title={testimonials[currentIndex].imageTitle}
                    loading="lazy"
                    width={64}
                    height={64}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/images/1.jpg"
                    }}
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border border-border z-50">
                    <div className="text-sm font-semibold mb-1">{testimonials[currentIndex].imageTitle}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[currentIndex].imageDescription}</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xl gradient-text">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
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
