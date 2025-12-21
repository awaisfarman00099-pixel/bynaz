import ServiceDetailLayout from "@/components/service-detail-layout"
import { Share2 } from "lucide-react"

export default function SocialMediaPage() {
  return (
    <ServiceDetailLayout
      icon={Share2}
      title="Social Media Marketing"
      subtitle="Data-driven campaigns that drive engagement and conversions"
      description="Amplify your brand presence and reach your target audience with strategic social media marketing campaigns. We specialize in Meta (Facebook & Instagram), TikTok, and Google Ads, creating compelling content and optimizing campaigns for maximum ROI. Our data-driven approach ensures every dollar spent contributes to your business goals."
      benefits={[
        "Expert campaign management across Meta, TikTok, and Google platforms",
        "Targeted audience research and segmentation for precise reach",
        "Creative ad content that captures attention and drives action",
        "Continuous A/B testing and optimization for better performance",
        "Detailed analytics and ROI tracking for complete transparency",
        "Strategic budget allocation to maximize returns",
        "Trend monitoring and quick adaptation to platform changes",
        "Comprehensive reporting with actionable insights",
      ]}
      process={[
        {
          title: "Strategy Development",
          description:
            "We analyze your business goals, target audience, and competition to create a customized social media marketing strategy aligned with your objectives.",
        },
        {
          title: "Campaign Creation",
          description:
            "Our creative team develops compelling ad content, copy, and visuals that resonate with your audience and drive engagement.",
        },
        {
          title: "Launch & Monitoring",
          description:
            "We launch campaigns across selected platforms and monitor performance in real-time, making quick adjustments as needed.",
        },
        {
          title: "Optimization",
          description:
            "Through continuous testing and data analysis, we optimize campaigns for better targeting, lower costs, and higher conversions.",
        },
        {
          title: "Reporting & Scaling",
          description:
            "Regular performance reports keep you informed, and we scale successful campaigns to maximize your return on investment.",
        },
      ]}
      packages={[
        {
          name: "Starter",
          price: "$599/mo",
          features: [
            "Single platform management",
            "$1,000 - $3,000 ad spend",
            "Basic audience targeting",
            "Monthly reporting",
            "Email support",
          ],
        },
        {
          name: "Professional",
          price: "$1,299/mo",
          popular: true,
          features: [
            "Multi-platform campaigns",
            "$3,000 - $10,000 ad spend",
            "Advanced targeting & retargeting",
            "Bi-weekly reporting",
            "A/B testing",
            "Priority support",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Full-service management",
            "$10,000+ ad spend",
            "Custom audience creation",
            "Weekly strategy calls",
            "Advanced analytics",
            "Dedicated strategist",
            "24/7 support",
          ],
        },
      ]}
      faqs={[
        {
          question: "Which social media platforms do you advertise on?",
          answer:
            "We specialize in Meta platforms (Facebook & Instagram), TikTok, and Google Ads (including YouTube). We can also manage campaigns on LinkedIn, Twitter, and Pinterest based on your needs.",
        },
        {
          question: "What kind of ROI can I expect?",
          answer:
            "While ROI varies by industry and audience, our clients typically see 3-5x return on ad spend within the first 3 months. We focus on continuous optimization to improve results over time.",
        },
        {
          question: "Do you create the ad content?",
          answer:
            "Yes, our creative team designs ad visuals, writes compelling copy, and can even produce video content. We can also work with your existing assets if preferred.",
        },
        {
          question: "How do you measure success?",
          answer:
            "We track key metrics including reach, engagement, click-through rates, conversions, cost per acquisition, and overall ROI. Reports are customized to focus on metrics that matter most to your business.",
        },
      ]}
    />
  )
}
