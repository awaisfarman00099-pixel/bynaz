"use client"

import Link from "next/link"
import { ShoppingCart, Store, Share2, Globe, Package, Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageModal from "@/components/image-modal"

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Brand Management",
    description: "Build, scale, and manage your brands on Shopify, Amazon, and eBay with expert strategies.",
    image: "/images/21.jpg",
    imageTitle: "E-Commerce Brand Management Services - Shopify, Amazon & eBay",
    imageDescription: "Complete e-commerce brand management services including Shopify store setup, Amazon FBA optimization, eBay store management, brand development, and multi-platform strategy.",
    href: "/services/ecommerce",
  },
  {
    icon: Store,
    title: "Online Store Management",
    description: "Complete product uploads, order processing, and performance optimization for your store.",
    image: "/images/22.jpg",
    imageTitle: "Online Store Management Services - Complete E-Commerce Solutions",
    imageDescription: "Professional online store management services including product catalog management, order processing, inventory control, customer service, and performance optimization.",
    href: "/services/store-management",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Meta ads, TikTok ads, and Google Ads campaigns that drive real results and engagement.",
    image: "/images/23.jpg",
    imageTitle: "Social Media Marketing Services - Meta, TikTok & Google Ads",
    imageDescription: "Expert social media marketing services including Facebook ads, Instagram ads, TikTok advertising, Google Ads management, and campaign optimization for maximum ROI.",
    href: "/services/social-media",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning Shopify stores, portfolio sites, and e-commerce platforms built to convert.",
    image: "/images/24.jpg",
    imageTitle: "Website Development Services - Custom Shopify & E-Commerce Platforms",
    imageDescription: "Professional website development services including custom Shopify stores, portfolio websites, e-commerce platforms, responsive design, and conversion optimization.",
    href: "/services/web-development",
  },
  {
    icon: Package,
    title: "3PL Services",
    description: "Complete warehousing, packaging, and delivery solutions across Europe, USA, and UK.",
    image: "/images/25.jpg",
    imageTitle: "3PL Services - Warehousing, Packaging & Delivery Solutions",
    imageDescription: "Complete third-party logistics services including warehousing, professional packaging, shipping, delivery solutions across Europe, USA, and UK with real-time tracking.",
    href: "/services/3pl",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Keyword research, technical optimization, and quality backlinks for top rankings.",
    image: "/images/26.jpg",
    imageTitle: "SEO Optimization Services - Search Engine Ranking & Organic Traffic",
    imageDescription: "Comprehensive SEO services including keyword research, technical SEO optimization, content optimization, link building, and monthly performance reporting for top search rankings.",
    href: "/services/seo",
  },
]

export default function Services() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business and dominate your market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 ease-in-out flex flex-col hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative bg-muted/20 group-hover:aspect-auto group-hover:h-auto group-hover:min-h-[600px] group-hover:flex-1 transition-all duration-700 ease-in-out cursor-pointer">
                <ImageModal
                  src={service.image || "/images/21.jpg"}
                  alt={service.title}
                  title={service.imageTitle}
                  description={service.imageDescription}
                >
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={service.image || "/images/21.jpg"}
                      alt={service.title}
                      title={service.imageTitle}
                      className="w-full h-full object-cover group-hover:object-contain group-hover:h-full group-hover:w-full group-hover:max-w-full transition-all duration-700 ease-in-out group-hover:shadow-xl"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/images/21.jpg"
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/90 backdrop-blur-sm opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300 ease-in-out">
                      <div className="text-xs font-semibold mb-1">{service.imageTitle}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">{service.imageDescription}</div>
                    </div>
                  </div>
                </ImageModal>
              </div>
              
              {/* Content */}
              <Link
                href={service.href}
                className="p-8 group-hover:opacity-100 opacity-100 transition-opacity"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 group-hover:glow-secondary transition-all">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:border-primary transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* CEO Section - Premium Design */}
        <div className="relative mt-24 mb-16 py-8">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl -z-10"></div>
          
          <div className="container mx-auto max-w-7xl px-4 md:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left Card - Text Content */}
              <div className="order-2 md:order-1 space-y-5 pl-0 pr-4">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="text-xl">🚀</span>
                  <span className="text-sm font-medium text-primary">Leading Digital Excellence</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Transform Your Business with Expert Digital Solutions
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We transform businesses through innovative digital solutions, cutting-edge technology, and strategic expertise. Our team is dedicated to delivering exceptional results that drive growth and success.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="text-xl">💼</span>
                  <span className="text-xl">🎯</span>
                  <span className="text-xl">✨</span>
                  <span className="text-xl">🌟</span>
                  <span className="text-xl">🔥</span>
                </div>
              </div>

              {/* Right Card - CEO Image with Premium Design */}
              <div className="order-1 md:order-2 flex justify-end items-center pr-0">
                <div className="relative w-full max-w-[550px] md:max-w-[580px] ml-auto">
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border/60 shadow-2xl hover:shadow-primary/10 transition-shadow duration-300">
                    {/* Image Container - Reduced Height */}
                    <div className="relative w-full aspect-[5/6] bg-gradient-to-br from-muted/20 to-muted/5 overflow-hidden">
                      <img
                        src="/home/img.png"
                        alt="Mr. Zaman"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/images/1.jpg"
                        }}
                      />
                    </div>
                    
                    {/* CEO Info - Clean Professional Design */}
                    <div className="bg-card border-t border-border/50 p-5 md:p-6">
                      <div className="text-center space-y-4">
                        {/* Name and Title on Single Line */}
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          <h4 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                            Mr. Zaman
                          </h4>
                          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">CEO</span>
                          </div>
                        </div>
                        
                        {/* Meet Button */}
                        <div className="pt-2">
                          <Button
                            onClick={() => window.open("https://calendly.com/famdispatchingllc/30min", "_blank")}
                            size="lg"
                            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Calendar className="mr-2" size={20} />
                            Meet Mr. Zaman
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
