import ServiceDetailLayout from "@/components/service-detail-layout"
import { Store } from "lucide-react"

export default function StoreManagementPage() {
  return (
    <ServiceDetailLayout
      icon={Store}
      title="Online Store Management"
      subtitle="Complete end-to-end management of your online store"
      description="Focus on growing your business while we handle the day-to-day operations of your online store. Our comprehensive store management service covers everything from product uploads and inventory management to order processing and customer service, ensuring smooth operations and satisfied customers."
      benefits={[
        "Professional product uploads with optimized descriptions and images",
        "Real-time inventory tracking and management",
        "Efficient order processing and fulfillment coordination",
        "Responsive customer service and inquiry handling",
        "Regular performance monitoring and optimization",
        "Streamlined operations for maximum efficiency",
        "Reduced operational costs and increased productivity",
        "More time for you to focus on strategic growth",
      ]}
      process={[
        {
          title: "Store Audit & Setup",
          description:
            "We analyze your current store operations, identify bottlenecks, and set up our management systems for seamless integration.",
        },
        {
          title: "Product Management",
          description:
            "Our team handles all product-related tasks including uploads, updates, categorization, and ensuring accurate inventory levels.",
        },
        {
          title: "Order Processing",
          description:
            "We manage the entire order lifecycle from confirmation to fulfillment coordination, ensuring timely and accurate delivery.",
        },
        {
          title: "Customer Support",
          description:
            "Professional handling of customer inquiries, returns, and issues to maintain high satisfaction rates and positive reviews.",
        },
        {
          title: "Reporting & Optimization",
          description:
            "Regular performance reports with actionable insights and continuous optimization to improve efficiency and sales.",
        },
      ]}
      packages={[
        {
          name: "Basic",
          price: "$399/mo",
          features: [
            "Up to 100 products managed",
            "Order processing support",
            "Basic customer service",
            "Weekly reports",
            "Email support",
          ],
        },
        {
          name: "Growth",
          price: "$799/mo",
          popular: true,
          features: [
            "Up to 500 products managed",
            "Full order management",
            "Priority customer service",
            "Daily performance tracking",
            "Phone & email support",
            "Inventory optimization",
          ],
        },
        {
          name: "Premium",
          price: "$1,499/mo",
          features: [
            "Unlimited products",
            "Complete store operations",
            "24/7 customer service",
            "Real-time analytics",
            "Dedicated manager",
            "Custom workflows",
            "Strategic consulting",
          ],
        },
      ]}
      faqs={[
        {
          question: "What platforms do you manage?",
          answer:
            "We manage stores across all major platforms including Shopify, WooCommerce, Amazon, eBay, and custom e-commerce solutions.",
        },
        {
          question: "How do you handle customer service?",
          answer:
            "We provide professional customer service through your preferred channels (email, chat, phone) following your brand guidelines and policies. Response times vary by package level.",
        },
        {
          question: "Can you integrate with my existing systems?",
          answer:
            "Yes, we can integrate with most inventory management systems, CRMs, shipping providers, and accounting software to ensure seamless operations.",
        },
        {
          question: "What happens if I want to cancel?",
          answer:
            "We offer flexible month-to-month contracts with 30-day notice for cancellation. We'll provide a smooth transition and handover of all documentation.",
        },
      ]}
    />
  )
}
