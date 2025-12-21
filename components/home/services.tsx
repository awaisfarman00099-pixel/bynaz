import Link from "next/link"
import { ShoppingCart, Store, Share2, Globe, Package, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Brand Management",
    description: "Build, scale, and manage your brands on Shopify, Amazon, and eBay with expert strategies.",
    href: "/services/ecommerce",
  },
  {
    icon: Store,
    title: "Online Store Management",
    description: "Complete product uploads, order processing, and performance optimization for your store.",
    href: "/services/store-management",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Meta ads, TikTok ads, and Google Ads campaigns that drive real results and engagement.",
    href: "/services/social-media",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning Shopify stores, portfolio sites, and e-commerce platforms built to convert.",
    href: "/services/web-development",
  },
  {
    icon: Package,
    title: "3PL Services",
    description: "Complete warehousing, packaging, and delivery solutions across Europe, USA, and UK.",
    href: "/services/3pl",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Keyword research, technical optimization, and quality backlinks for top rankings.",
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
              className="group glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 group-hover:glow-secondary transition-all">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:border-primary transition-colors bg-transparent"
              >
                <Link href={service.href}>Learn More</Link>
              </Button>
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
