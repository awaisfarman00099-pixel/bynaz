import ServiceDetailLayout from "@/components/service-detail-layout"
import { Package } from "lucide-react"

export default function ThreePLPage() {
  return (
    <ServiceDetailLayout
      icon={Package}
      title="3PL Services"
      subtitle="Complete logistics solutions for seamless order fulfillment"
      description="Scale your e-commerce business without the headache of managing warehouses, packaging, and shipping. Our comprehensive 3PL (Third-Party Logistics) services cover everything from warehousing and inventory management to professional packaging and delivery across Europe, USA, and UK. Focus on growing your business while we handle the logistics."
      benefits={[
        "Strategic warehouse locations across Europe, USA, and UK",
        "Professional warehousing with climate-controlled options",
        "Efficient inventory management and real-time tracking",
        "Custom packaging solutions with branded materials",
        "Fast and reliable shipping with multiple carrier options",
        "Reduced shipping costs through bulk carrier agreements",
        "Scalable solutions that grow with your business",
        "Complete visibility with advanced tracking systems",
      ]}
      process={[
        {
          title: "Consultation & Planning",
          description:
            "We assess your logistics needs, product types, shipping volumes, and target markets to create a customized fulfillment strategy.",
        },
        {
          title: "Inventory Receiving",
          description:
            "Your products are received at our warehouse facilities, inspected for quality, and entered into our inventory management system.",
        },
        {
          title: "Storage & Management",
          description:
            "Products are stored in optimal conditions with organized systems for quick retrieval. Real-time inventory tracking keeps you informed.",
        },
        {
          title: "Order Processing & Packaging",
          description:
            "When orders come in, we pick, pack, and prepare them for shipment using your branded materials and following your specifications.",
        },
        {
          title: "Shipping & Delivery",
          description:
            "Orders are shipped via the most efficient carrier route with full tracking. We handle returns and exchanges seamlessly.",
        },
      ]}
      packages={[
        {
          name: "Starter",
          price: "$299/mo",
          features: [
            "Single warehouse location",
            "Up to 100 orders/month",
            "Basic packaging",
            "Standard shipping",
            "Email support",
          ],
        },
        {
          name: "Growth",
          price: "$799/mo",
          popular: true,
          features: [
            "Multiple locations",
            "Up to 500 orders/month",
            "Custom packaging",
            "Expedited shipping options",
            "Priority support",
            "Returns management",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Global warehouse network",
            "Unlimited orders",
            "Premium packaging",
            "Same-day shipping",
            "Dedicated manager",
            "Custom integrations",
            "24/7 support",
          ],
        },
      ]}
      faqs={[
        {
          question: "Which regions do you serve?",
          answer:
            "We have warehouse facilities and shipping partnerships covering Europe (UK, Germany, France, Netherlands, etc.), USA (East and West Coast), and expanding to other regions based on demand.",
        },
        {
          question: "How do you integrate with my store?",
          answer:
            "We integrate seamlessly with major e-commerce platforms including Shopify, WooCommerce, Amazon, and eBay. Orders are automatically synced and processed without manual intervention.",
        },
        {
          question: "What about returns and exchanges?",
          answer:
            "We handle returns and exchanges as part of our service. Returned items are inspected, restocked, or processed according to your policies, with detailed reporting on all return activity.",
        },
        {
          question: "How quickly can you start fulfilling orders?",
          answer:
            "Once your products arrive at our warehouse and are processed (typically 2-3 days), we can begin fulfilling orders immediately. Onboarding usually takes 1-2 weeks from initial consultation.",
        },
      ]}
    />
  )
}
