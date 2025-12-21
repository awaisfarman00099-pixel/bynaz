import ServiceDetailLayout from "@/components/service-detail-layout"
import { Search } from "lucide-react"

export default function SEOPage() {
  return (
    <ServiceDetailLayout
      icon={Search}
      title="SEO Optimization"
      subtitle="Strategic SEO services that boost rankings and drive organic traffic"
      description="Dominate search results and attract qualified traffic with our comprehensive SEO services. We combine technical expertise, content optimization, and strategic link building to improve your search rankings and increase organic visibility. Our proven methodologies help businesses achieve sustainable growth through better search engine performance."
      benefits={[
        "Comprehensive keyword research and competitive analysis",
        "Technical SEO optimization for better crawling and indexing",
        "On-page optimization including content and meta tags",
        "High-quality backlink acquisition from authoritative sources",
        "Local SEO optimization for geo-targeted traffic",
        "Regular performance monitoring and detailed reporting",
        "Continuous strategy refinement based on results",
        "Long-term sustainable growth in organic traffic",
      ]}
      process={[
        {
          title: "SEO Audit & Analysis",
          description:
            "We conduct a thorough audit of your website, analyze competitors, and identify opportunities for improvement in rankings and traffic.",
        },
        {
          title: "Keyword Research & Strategy",
          description:
            "In-depth keyword research identifies the best opportunities for your business. We develop a strategic roadmap prioritizing high-value keywords.",
        },
        {
          title: "Technical Optimization",
          description:
            "We fix technical issues, improve site speed, optimize structure, and ensure search engines can efficiently crawl and index your site.",
        },
        {
          title: "Content & On-Page SEO",
          description:
            "We optimize existing content and create new SEO-focused content that targets your keywords while providing value to users.",
        },
        {
          title: "Link Building & Monitoring",
          description:
            "Strategic acquisition of high-quality backlinks from relevant, authoritative websites. Continuous monitoring ensures sustained improvement.",
        },
      ]}
      packages={[
        {
          name: "Local",
          price: "$699/mo",
          features: [
            "Local SEO focus",
            "Up to 20 keywords",
            "Basic technical SEO",
            "Google Business optimization",
            "Monthly reports",
          ],
        },
        {
          name: "National",
          price: "$1,499/mo",
          popular: true,
          features: [
            "National SEO coverage",
            "Up to 50 keywords",
            "Advanced technical SEO",
            "Content optimization",
            "Link building",
            "Bi-weekly reports",
          ],
        },
        {
          name: "Enterprise",
          price: "$2,999/mo",
          features: [
            "International SEO",
            "Unlimited keywords",
            "Complete technical overhaul",
            "Content creation",
            "Aggressive link building",
            "Weekly reporting",
            "Dedicated SEO specialist",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does it take to see SEO results?",
          answer:
            "SEO is a long-term strategy. You'll typically start seeing improvements in 3-6 months, with significant results after 6-12 months. Timeline varies based on competition, current site status, and chosen keywords.",
        },
        {
          question: "What makes your link building strategy effective?",
          answer:
            "We focus on quality over quantity, acquiring links from relevant, high-authority websites through content marketing, digital PR, and relationship building. We never use black-hat techniques that could harm your site.",
        },
        {
          question: "Do you guarantee first page rankings?",
          answer:
            "While we can't guarantee specific rankings (no ethical SEO provider can), we do guarantee improved rankings, increased organic traffic, and better visibility based on our proven track record.",
        },
        {
          question: "What reporting do you provide?",
          answer:
            "You receive detailed reports covering keyword rankings, organic traffic, backlink profile, technical issues resolved, and ROI analysis. Reports frequency depends on your package level.",
        },
      ]}
    />
  )
}
