import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingCTA from "@/components/floating-cta"
import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import Services from "@/components/home/services"
import Stats from "@/components/home/stats"
import Process from "@/components/home/process"
import Testimonials from "@/components/home/testimonials"
import Ticker from "@/components/home/ticker"
import BlogPreview from "@/components/home/blog-preview"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Process />
      <Ticker />
      <Testimonials />
      <BlogPreview />
      <CTASection />
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </main>
  )
}
