import ServiceDetailLayout from "@/components/service-detail-layout"
import { ShoppingCart } from "lucide-react"

export default function EcommercePage() {
  return (
    <ServiceDetailLayout
      icon={ShoppingCart}
      title="E-Commerce Brand Management"
      subtitle="Build, scale, and dominate marketplaces with expert brand management"
      description="Our comprehensive e-commerce brand management service helps you establish, grow, and optimize your presence on leading platforms like Shopify, Amazon, and eBay. We handle everything from store setup and product optimization to inventory management and performance analytics, ensuring your brand stands out in the competitive marketplace."
      benefits={[
        "Professional store setup and optimization on Shopify, Amazon, and eBay",
        "Strategic brand positioning and competitive analysis",
        "Enhanced product listings with SEO-optimized content and high-quality images",
        "Comprehensive inventory and order management systems",
        "Data-driven performance tracking and actionable insights",
        "Dedicated account manager for personalized support",
        "Scalable solutions that grow with your business",
        "Multi-channel integration for seamless operations",
      ]}
      process={[
        {
          title: "Brand Discovery & Analysis",
          description:
            "We start by understanding your brand, products, target audience, and business goals. We analyze your competition and identify opportunities for growth.",
        },
        {
          title: "Store Setup & Optimization",
          description:
            "Our team creates or optimizes your store on your chosen platform, ensuring professional branding, user-friendly navigation, and conversion-focused design.",
        },
        {
          title: "Product Listing Excellence",
          description:
            "We craft compelling product descriptions, optimize images, implement SEO best practices, and set up proper categorization for maximum visibility.",
        },
        {
          title: "Launch & Management",
          description:
            "We launch your store and provide ongoing management including inventory updates, order processing, customer service, and performance monitoring.",
        },
        {
          title: "Growth & Scaling",
          description:
            "Through continuous optimization, A/B testing, and data analysis, we help you scale operations and increase revenue while maintaining quality.",
        },
      ]}
      packages={[
        {
          name: "Starter",
          price: "$499/mo",
          features: [
            "Single platform setup",
            "Up to 50 product listings",
            "Basic inventory management",
            "Monthly performance reports",
            "Email support",
          ],
        },
        {
          name: "Professional",
          price: "$999/mo",
          popular: true,
          features: [
            "Multi-platform management",
            "Up to 200 product listings",
            "Advanced inventory sync",
            "Weekly performance reports",
            "Priority support",
            "Marketing recommendations",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited platforms",
            "Unlimited product listings",
            "Full automation systems",
            "Daily analytics dashboard",
            "Dedicated account manager",
            "Custom integrations",
            "Strategic consulting",
          ],
        },
      ]}
      faqs={[
        {
          question: "Which platforms do you support?",
          answer:
            "We specialize in Shopify, Amazon, and eBay, but can also work with other platforms like Etsy, WooCommerce, and custom e-commerce solutions based on your needs.",
        },
        {
          question: "How long does it take to set up a store?",
          answer:
            "Typically, a complete store setup takes 2-4 weeks depending on complexity, number of products, and customization requirements. We'll provide a detailed timeline during consultation.",
        },
        {
          question: "Do you handle product photography?",
          answer:
            "While we can work with your existing product images and optimize them, we partner with professional photographers if you need new product photography. This can be arranged as an additional service.",
        },
        {
          question: "What kind of results can I expect?",
          answer:
            "Results vary by industry and starting point, but our clients typically see 30-50% increase in conversion rates within the first 3 months, along with improved search rankings and customer engagement.",
        },
      ]}
    />
  )
}
