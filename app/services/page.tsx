import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Store, Share2, Globe, Package, Search, ArrowRight } from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Brand Management",
    description:
      "Build, scale, and manage your brands on leading platforms with expert strategies and hands-on support.",
    features: [
      "Shopify, Amazon, and eBay store setup",
      "Brand development and positioning",
      "Product listing optimization",
      "Inventory and order management",
      "Performance analytics and reporting",
    ],
    href: "/services/ecommerce",
  },
  {
    icon: Store,
    title: "Online Store Management",
    description: "Complete end-to-end management of your online store for maximum efficiency and profitability.",
    features: [
      "Product uploads and categorization",
      "Order processing and fulfillment",
      "Customer service management",
      "Performance optimization",
      "Sales and conversion tracking",
    ],
    href: "/services/store-management",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Data-driven social media campaigns that build awareness, engagement, and drive conversions.",
    features: [
      "Meta (Facebook & Instagram) ads",
      "TikTok advertising campaigns",
      "Google Ads management",
      "Content strategy and creation",
      "ROI tracking and optimization",
    ],
    href: "/services/social-media",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, high-performance websites built to convert visitors into customers.",
    features: [
      "Custom Shopify store development",
      "Portfolio and business websites",
      "E-commerce platforms",
      "Responsive mobile design",
      "SEO-optimized structure",
    ],
    href: "/services/web-development",
  },
  {
    icon: Package,
    title: "3PL Services",
    description: "Complete logistics solutions for seamless order fulfillment across multiple regions.",
    features: [
      "Warehousing and storage",
      "Professional packaging",
      "Shipping and delivery",
      "Europe, USA, and UK coverage",
      "Real-time tracking systems",
    ],
    href: "/services/3pl",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic SEO services that boost your rankings and drive organic traffic to your website.",
    features: [
      "Comprehensive keyword research",
      "Technical SEO optimization",
      "High-quality backlink building",
      "Content optimization",
      "Monthly performance reports",
    ],
    href: "/services/seo",
  },
]

export default function ServicesPage() {
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
              Services We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="glass p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Icon & Title */}
                  <div className="md:col-span-1">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 glow-primary">
                      <service.icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center glass p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which service is right for you?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's talk about your goals and find the perfect solution for your business
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
