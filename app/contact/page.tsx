"use client"

import { useEffect } from "react"
import Script from "next/script"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

declare global {
  interface Window {
    Calendly: any
  }
}

export default function ContactPage() {
  const calendlyUrl = "https://calendly.com/famdispatchingllc/30min"

  const handleCalendlyClick = () => {
    window.open(calendlyUrl, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Schedule a meeting with us. Choose a time that works for you and let's discuss your project.
            </p>
          </div>

          {/* Calendly Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass p-10 rounded-3xl hover:scale-[1.02] transition-all duration-300 glow-primary">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 mx-auto">
                <Calendar size={36} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center">Book a Meeting</h2>
              <p className="text-muted-foreground mb-8 text-center leading-relaxed max-w-2xl mx-auto">
                Schedule a 30-minute session at a time that works for you. Choose from our available slots and let's discuss
                your project in detail.
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={handleCalendlyClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary px-8 py-6 text-lg"
                >
                  <Calendar className="mr-2" size={20} />
                  Start Meeting
                </Button>
              </div>
            </div>
          </div>

          {/* Embedded Calendly Widget */}
          <div className="glass p-8 rounded-3xl max-w-6xl mx-auto">
            <div 
              className="calendly-inline-widget" 
              data-url={calendlyUrl} 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
