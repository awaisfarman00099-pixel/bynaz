import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceDetailLayoutProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  packages?: {
    name: string
    price: string
    features: string[]
    popular?: boolean
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export default function ServiceDetailLayout({
  icon: Icon,
  title,
  subtitle,
  description,
  benefits,
  process,
  packages,
  faqs,
}: ServiceDetailLayoutProps) {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 glow-primary">
              <Icon size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">{subtitle}</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass p-12 rounded-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Key <span className="gradient-text">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="glass p-8 rounded-2xl flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      {packages && packages.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                Pricing <span className="gradient-text">Packages</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`glass p-8 rounded-3xl ${pkg.popular ? "ring-2 ring-primary scale-105" : ""}`}
                  >
                    {pkg.popular && (
                      <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold gradient-text mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          : "bg-transparent border border-border hover:border-primary"
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      <Link href="/contact">Choose Plan</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="glass p-6 rounded-2xl group">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and create a customized solution for your business
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
            >
              <Link href="/contact">
                Contact Us Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
