"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const calendlyUrl = "https://calendly.com/bymztech" // Replace with your actual Calendly link
  const whatsappNumber = "+923147860366"
  const whatsappMessage = "Hi! I'd like to discuss a project with BymzTech."

  const handleCalendlyClick = () => {
    window.open(calendlyUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navigation />

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
              Schedule a meeting via Calendly or message me on WhatsApp. No forms needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Calendly Card */}
            <div className="glass p-10 rounded-3xl hover:scale-105 transition-all duration-300 glow-primary">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 mx-auto">
                <Calendar size={36} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center">Book a Meeting</h2>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                Schedule a 1-on-1 session at a time that works for you. Choose from my available slots and let's discuss
                your project in detail.
              </p>
              <Button
                onClick={handleCalendlyClick}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
              >
                Open Calendly
                <Calendar className="ml-2" size={20} />
              </Button>
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>15, 30, or 60-minute sessions available</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass p-10 rounded-3xl hover:scale-105 transition-all duration-300 glow-secondary">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 mx-auto">
                <MessageCircle size={36} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center">Chat on WhatsApp</h2>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                Have a quick question or want to chat directly? Send me a message on WhatsApp and I'll get back to you
                as soon as possible.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="w-full glass bg-transparent hover:border-secondary hover:text-secondary transition-all"
              >
                Message on WhatsApp
                <MessageCircle className="ml-2" size={20} />
              </Button>
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Phone size={16} />
                  <span>Usually responds within a few hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:bymztech@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                bymztech@gmail.com
              </a>
            </div>

            <div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+923147860366" className="text-muted-foreground hover:text-primary transition-colors">
                +92-314-7860366
              </a>
            </div>

            <div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <div className="text-muted-foreground">Faisalabad, Pakistan</div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="glass p-8 md:p-10 rounded-3xl max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-xl glass">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl glass">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl glass">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 glass">
                <Clock size={48} className="text-primary mb-3" />
                <div className="text-center">
                  <p className="font-semibold mb-1">Pakistan Standard Time</p>
                  <p className="text-sm text-muted-foreground">UTC+5:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="glass p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274429577!2d72.67270889999999!3d31.418715399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88793417ea!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
