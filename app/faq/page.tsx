"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Search, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What kind of digital services do you provide?",
        answer:
          "We offer comprehensive digital services including E-Commerce Brand Management, Online Store Management, Social Media Marketing, Website Development, 3PL Services, and SEO Optimization. Each service is tailored to meet your specific business needs and goals.",
      },
      {
        question: "What is your process for working with clients?",
        answer:
          "Our process starts with discovery and analysis, followed by strategy development, implementation, testing, and ongoing optimization. We maintain close communication throughout and provide regular updates on progress and results.",
      },
      {
        question: "Which industries do you work with?",
        answer:
          "We work with businesses across all industries including e-commerce, retail, healthcare, technology, finance, hospitality, and more. Our strategies are customized to fit the unique needs of each industry and business.",
      },
      {
        question: "Do you work with startups or only established businesses?",
        answer:
          "We work with businesses at all stages - from startups looking to establish their digital presence to established enterprises seeking to scale and optimize their operations. Our packages are flexible to accommodate different business sizes and budgets.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    questions: [
      {
        question: "What is your timeline for completing a project?",
        answer:
          "Project timelines vary depending on scope and complexity. A basic website takes 2-4 weeks, while comprehensive e-commerce setups can take 4-8 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the process.",
      },
      {
        question: "Do you offer monthly payment plans?",
        answer:
          "Yes, most of our services are offered on monthly subscription plans. We also offer project-based pricing for website development and one-time setups. Custom packages can be arranged based on your needs and budget.",
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer:
          "Client satisfaction is our top priority. We offer revision rounds during projects and maintain open communication to ensure expectations are met. If you're not satisfied, we'll work with you to make it right. We also offer money-back guarantees on certain services within specified timeframes.",
      },
      {
        question: "Can I cancel my service anytime?",
        answer:
          "We offer flexible month-to-month contracts for most services. You can cancel with 30 days notice. For project-based work, we have milestone-based agreements with clear terms outlined in our contracts.",
      },
    ],
  },
  {
    category: "Services & Support",
    questions: [
      {
        question: "Do you provide ongoing support after project completion?",
        answer:
          "Yes, we provide ongoing support and maintenance for all our projects. The level of support depends on your chosen package, ranging from email support to dedicated account managers with 24/7 availability.",
      },
      {
        question: "Can you work with my existing website or store?",
        answer:
          "We can audit, optimize, and manage your existing website or online store. We're experienced with all major platforms and can seamlessly integrate with your current systems.",
      },
      {
        question: "How do you measure success and ROI?",
        answer:
          "We track relevant KPIs based on your goals - including traffic, conversions, revenue, engagement rates, search rankings, and more. You'll receive regular reports with clear metrics and actionable insights.",
      },
      {
        question: "Do you provide training on how to manage my website or store?",
        answer:
          "Yes, we provide comprehensive training and documentation for all our projects. We ensure you and your team are comfortable managing day-to-day tasks while we handle the technical aspects.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "Which platforms and technologies do you work with?",
        answer:
          "We specialize in Shopify, WordPress, Next.js, Amazon, eBay, and custom solutions. For marketing, we work with Meta, Google Ads, TikTok, and all major platforms. We stay current with the latest technologies to provide the best solutions.",
      },
      {
        question: "Do you provide hosting and domain services?",
        answer:
          "Yes, we can arrange reliable hosting and domain registration as part of our services. We also work with your existing hosting provider if you prefer. We recommend hosting solutions based on your specific needs.",
      },
      {
        question: "How do you ensure website security?",
        answer:
          "We implement industry-standard security measures including SSL certificates, regular security updates, secure hosting, backup systems, and monitoring. For e-commerce sites, we ensure PCI compliance and secure payment processing.",
      },
      {
        question: "Can you integrate third-party tools and services?",
        answer:
          "Yes, we can integrate various third-party tools including CRMs, email marketing platforms, payment gateways, analytics tools, inventory systems, and more. We ensure seamless integration with your existing tech stack.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFAQs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }))

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 glow-primary">
              <HelpCircle size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about our services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 glass bg-transparent"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredFAQs.map((category, catIndex) =>
              category.questions.length > 0 ? (
                <div key={catIndex}>
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="gradient-text">{category.category}</span>
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, qIndex) => {
                      const faqId = `${catIndex}-${qIndex}`
                      const isOpen = openIndex === faqId

                      return (
                        <div
                          key={qIndex}
                          className={`glass rounded-2xl transition-all ${isOpen ? "ring-2 ring-primary" : ""}`}
                        >
                          <button
                            onClick={() => toggleFAQ(faqId)}
                            className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors rounded-2xl"
                          >
                            <span className="font-semibold text-lg pr-4">{faq.question}</span>
                            <span
                              className={`text-primary text-2xl transition-transform flex-shrink-0 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : null,
            )}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-20 max-w-4xl mx-auto glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass bg-transparent">
                <a href="mailto:bymztech@gmail.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
