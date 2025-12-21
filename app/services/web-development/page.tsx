import ServiceDetailLayout from "@/components/service-detail-layout"
import { Globe } from "lucide-react"

export default function WebDevelopmentPage() {
  return (
    <ServiceDetailLayout
      icon={Globe}
      title="Website Development"
      subtitle="Stunning, high-performance websites built to convert"
      description="Your website is your digital storefront, and first impressions matter. We create beautiful, fast, and conversion-optimized websites that captivate visitors and turn them into customers. Whether you need a Shopify e-commerce store, professional portfolio, or custom business website, we deliver solutions that exceed expectations and drive results."
      benefits={[
        "Custom design tailored to your brand and industry",
        "Fully responsive and mobile-optimized layouts",
        "Lightning-fast loading speeds for better user experience",
        "SEO-optimized structure for higher search rankings",
        "Secure, reliable hosting and maintenance options",
        "Easy-to-use content management systems",
        "Integration with essential tools and services",
        "Ongoing support and updates",
      ]}
      process={[
        {
          title: "Discovery & Planning",
          description:
            "We discuss your vision, goals, target audience, and technical requirements. We create a detailed project plan with timelines and milestones.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Our designers create mockups and prototypes for your approval, ensuring the visual design aligns with your brand and objectives.",
        },
        {
          title: "Development",
          description:
            "Our developers bring the design to life with clean, efficient code, implementing all features and functionalities as planned.",
        },
        {
          title: "Testing & Refinement",
          description:
            "Rigorous testing across devices and browsers ensures everything works perfectly. We make any necessary adjustments based on feedback.",
        },
        {
          title: "Launch & Support",
          description:
            "We launch your website and provide training on how to manage it. Ongoing support ensures your site stays secure and up-to-date.",
        },
      ]}
      packages={[
        {
          name: "Basic",
          price: "$1,499",
          features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "30 days support"],
        },
        {
          name: "Professional",
          price: "$3,999",
          popular: true,
          features: [
            "Up to 15 pages",
            "Custom design",
            "Advanced SEO",
            "E-commerce integration",
            "CMS integration",
            "90 days support",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited pages",
            "Fully custom development",
            "Advanced features",
            "API integrations",
            "Custom admin panel",
            "1 year support",
            "Priority maintenance",
          ],
        },
      ]}
      faqs={[
        {
          question: "What platforms do you build websites on?",
          answer:
            "We specialize in Shopify for e-commerce, but also work with WordPress, Next.js, and custom solutions depending on your needs. We recommend the best platform based on your requirements.",
        },
        {
          question: "How long does it take to build a website?",
          answer:
            "A basic website typically takes 2-4 weeks, while more complex sites with custom features can take 6-12 weeks. We provide a detailed timeline after discussing your requirements.",
        },
        {
          question: "Will I be able to update the website myself?",
          answer:
            "We build websites with user-friendly content management systems and provide training so you can easily update content, add pages, and manage your site.",
        },
        {
          question: "Do you provide hosting?",
          answer:
            "Yes, we offer managed hosting services or can work with your preferred hosting provider. We recommend reliable, high-performance hosting that ensures your site runs smoothly.",
        },
      ]}
    />
  )
}
