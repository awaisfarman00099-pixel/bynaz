"use client"

import Link from "next/link"
import { ShoppingCart, Store, Share2, Globe, Package, Search } from "lucide-react"
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
