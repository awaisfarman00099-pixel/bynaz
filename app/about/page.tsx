"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="gradient-text">BymzTech</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We believe in building strategies that last. We believe in creating results that matter.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to empower businesses in the digital age, BymzTech has grown from a small team of
                passionate professionals to a leading digital agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past 10+ years, we've helped hundreds of businesses transform their digital presence, scale
                their e-commerce operations, and achieve remarkable growth through innovative strategies and dedicated
                support.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Faisalabad, Pakistan, we serve clients across Europe, USA, UK, and beyond, delivering
                world-class digital solutions that drive real results.
              </p>
            </div>
            <div className="relative">
              <div className="glass p-8 rounded-3xl group/image">
                <img 
                  src="/images/20.jpg" 
                  alt="Digital Agency Team - E-Commerce, Web Development & SEO Services" 
                  title="Digital Agency Team - E-Commerce, Web Development & SEO Services"
                  className="rounded-2xl w-full relative"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/images/20.jpg"
                  }}
                />
                <div className="absolute bottom-8 left-8 right-8 p-4 bg-background/90 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity rounded-xl">
                  <div className="text-sm font-semibold mb-1">Digital Agency Team - E-Commerce, Web Development & SEO Services</div>
                  <div className="text-xs text-muted-foreground">Our expert team specializes in e-commerce solutions, web development, SEO optimization, and digital marketing services to help businesses succeed online and achieve their growth goals.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="glass p-12 rounded-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Mission & Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Target className="text-primary" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses worldwide with cutting-edge digital solutions that drive growth, enhance brand
                  presence, and deliver measurable results. We're committed to building long-term partnerships based on
                  trust, innovation, and excellence.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Award className="text-secondary" />
                  Our Values
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Excellence in every project we undertake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Innovation and creativity at our core</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Client success as our top priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrity and transparency in all dealings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="glass p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold gradient-text mb-2">90%</div>
              <div className="text-muted-foreground">Creative Approach</div>
            </div>
            <div className="glass p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Guaranteed Success</div>
            </div>
            <div className="glass p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold gradient-text mb-2">85%</div>
              <div className="text-muted-foreground">Brand Strategy</div>
            </div>
          </div>

          {/* CEO Section */}
          <div className="glass p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary mb-2 font-semibold text-lg">CEO</p>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Sher Zaman</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  With over a decade of experience in digital marketing and e-commerce, Sher Zaman founded BymzTech with a
                  vision to help businesses thrive in the digital world. His expertise spans across multiple domains
                  including e-commerce strategy, digital marketing, and business development.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Under his leadership, BymzTech has grown to become a trusted partner for businesses looking to scale
                  their operations and achieve sustainable growth in the competitive digital landscape.
                </p>
              </div>
              <div className="relative">
                <div className="relative group">
                  <img
                    src="/images/ceo.jpg"
                    alt="Mr. Zaman - CEO"
                    className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-xl"
                    title="Mr. Zaman - CEO"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/images/ceo.jpg"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
