"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import ImageModal from "@/components/image-modal"

const categories = ["All", "E-Commerce", "Web Design", "SEO", "Social Media"]

const projects = [
  {
    title: "Fashion E-Commerce Store",
    category: "E-Commerce",
    description: "Complete Shopify store with 300% sales increase in 3 months",
    image: "/images/8.jpg",
    imageTitle: "E-Commerce Store Development Services - Shopify Store Setup & Optimization",
    imageDescription: "Complete e-commerce store development including Shopify store design, product catalog management, payment gateway integration, SEO optimization, and conversion rate optimization services.",
    results: ["300% Sales Increase", "50K+ Monthly Visitors", "4.9 Star Rating"],
    tags: ["Shopify", "Marketing", "SEO"],
  },
  {
    title: "Tech Startup Website",
    category: "Web Design",
    description: "Modern SaaS website with conversion-focused design",
    image: "/images/9.jpg",
    imageTitle: "Web Development Services - Custom Website Design & Development",
    imageDescription: "Professional web development services including responsive website design, frontend and backend development, UI/UX design, and performance optimization for modern businesses.",
    results: ["45% Conversion Rate", "10K+ Sign-ups", "Award Winning"],
    tags: ["Next.js", "UI/UX", "Development"],
  },
  {
    title: "Restaurant Chain SEO",
    category: "SEO",
    description: "Local SEO campaign resulting in 5x organic traffic growth",
    image: "/images/10.jpg",
    imageTitle: "SEO Services - Local SEO & Search Engine Optimization",
    imageDescription: "Comprehensive SEO services including local SEO optimization, keyword research, on-page and off-page SEO, technical SEO audits, and Google Business Profile optimization to improve search rankings.",
    results: ["500% Traffic Growth", "Page 1 Rankings", "85+ Keywords"],
    tags: ["Local SEO", "Content", "Analytics"],
  },
  {
    title: "Beauty Brand Social Campaign",
    category: "Social Media",
    description: "Viral TikTok and Instagram campaign with 10M+ impressions",
    image: "/images/11.jpg",
    imageTitle: "Social Media Marketing Services - Instagram & TikTok Campaign Management",
    imageDescription: "Professional social media marketing services including content creation, influencer partnerships, paid advertising campaigns, community management, and analytics tracking across all platforms.",
    results: ["10M+ Impressions", "200K Followers", "8x ROI"],
    tags: ["TikTok", "Instagram", "Influencer"],
  },
  {
    title: "Electronics Marketplace",
    category: "E-Commerce",
    description: "Multi-vendor Amazon store management with optimized listings",
    image: "/images/12.jpg",
    imageTitle: "Amazon FBA Services - Product Listing Optimization & Store Management",
    imageDescription: "Complete Amazon FBA services including product listing optimization, keyword research, PPC campaign management, inventory management, and brand registry services for e-commerce success.",
    results: ["$500K Revenue", "1000+ Products", "Best Seller Badge"],
    tags: ["Amazon", "Listing", "Optimization"],
  },
  {
    title: "Fitness App Landing Page",
    category: "Web Design",
    description: "High-converting landing page with interactive animations",
    image: "/images/13.jpg",
    imageTitle: "Web Design Services - Landing Page Design & Conversion Optimization",
    imageDescription: "Expert web design services including custom landing page design, mobile-responsive layouts, user experience optimization, A/B testing, and conversion rate optimization to maximize results.",
    results: ["60% Conversion", "100K+ Downloads", "Featured on PH"],
    tags: ["Landing Page", "Animation", "Mobile"],
  },
  {
    title: "Luxury Jewelry E-Commerce",
    category: "E-Commerce",
    description: "Premium Shopify store with advanced product customization",
    image: "/images/27.jpg",
    imageTitle: "E-Commerce Store Development - Premium Shopify Jewelry Store",
    imageDescription: "Luxury e-commerce store development with advanced product customization, high-quality imagery, secure payment processing, and premium customer experience for jewelry retail.",
    results: ["250% Sales Growth", "Premium Brand Image", "Low Cart Abandonment"],
    tags: ["Shopify", "Premium", "Customization"],
  },
  {
    title: "Healthcare SEO Campaign",
    category: "SEO",
    description: "Medical practice SEO with HIPAA-compliant strategies",
    image: "/images/28.jpg",
    imageTitle: "Healthcare SEO Services - Medical Practice Optimization",
    imageDescription: "Specialized healthcare SEO services including HIPAA-compliant optimization, local medical SEO, patient-focused content, and healthcare-specific keyword targeting for medical practices.",
    results: ["400% Organic Traffic", "Page 1 Rankings", "50+ Appointments/Month"],
    tags: ["Healthcare SEO", "Local SEO", "HIPAA"],
  },
  {
    title: "Food Delivery App",
    category: "Web Design",
    description: "Mobile-first food ordering platform with real-time tracking",
    image: "/images/29.jpg",
    imageTitle: "Web Development Services - Food Delivery App Development",
    imageDescription: "Mobile-first food delivery application development with real-time order tracking, payment integration, restaurant management dashboard, and customer loyalty features.",
    results: ["50K+ Users", "4.8 App Rating", "$2M+ Revenue"],
    tags: ["Mobile App", "Real-time", "Food Tech"],
  },
  {
    title: "Fashion Brand Instagram",
    category: "Social Media",
    description: "Instagram influencer campaign with 5M+ reach",
    image: "/images/30.jpg",
    imageTitle: "Social Media Marketing - Instagram Influencer Campaign Management",
    imageDescription: "Comprehensive Instagram marketing services including influencer partnerships, content creation, story campaigns, shoppable posts, and Instagram Ads optimization for fashion brands.",
    results: ["5M+ Reach", "300K+ Engagement", "12x ROI"],
    tags: ["Instagram", "Influencer", "Fashion"],
  },
  {
    title: "B2B SaaS Platform",
    category: "Web Design",
    description: "Enterprise SaaS solution with subscription management",
    image: "/images/31.jpg",
    imageTitle: "Web Development Services - B2B SaaS Platform Development",
    imageDescription: "Enterprise SaaS platform development including subscription billing, user management, API integration, dashboard analytics, and scalable cloud infrastructure for B2B businesses.",
    results: ["1000+ Active Users", "95% Uptime", "Enterprise Clients"],
    tags: ["SaaS", "B2B", "Enterprise"],
  },
  {
    title: "Amazon Product Launch",
    category: "E-Commerce",
    description: "New product launch with bestseller ranking in 30 days",
    image: "/images/32.jpg",
    imageTitle: "Amazon FBA Services - Product Launch & Optimization",
    imageDescription: "Complete Amazon product launch services including listing optimization, PPC campaign setup, review generation, inventory planning, and ranking optimization to achieve bestseller status.",
    results: ["Bestseller Rank", "10K+ Units Sold", "4.9 Star Rating"],
    tags: ["Amazon", "Product Launch", "PPC"],
  },
  {
    title: "Real Estate SEO",
    category: "SEO",
    description: "Local real estate SEO with map pack dominance",
    image: "/images/33.jpg",
    imageTitle: "Real Estate SEO Services - Local Search Optimization",
    imageDescription: "Specialized real estate SEO services including local map pack optimization, property listing SEO, neighborhood keyword targeting, and Google Business Profile optimization for real estate agencies.",
    results: ["Map Pack #1", "200% Lead Increase", "Local Dominance"],
    tags: ["Real Estate", "Local SEO", "Map Pack"],
  },
  {
    title: "E-Learning Platform",
    category: "Web Design",
    description: "Online learning management system with video streaming",
    image: "/images/34.jpg",
    imageTitle: "Web Development Services - E-Learning Platform Development",
    imageDescription: "Comprehensive e-learning platform development including course management, video streaming, student progress tracking, payment integration, and certificate generation for online education.",
    results: ["50K+ Students", "1000+ Courses", "98% Satisfaction"],
    tags: ["E-Learning", "Video Streaming", "LMS"],
  },
  {
    title: "Dropshipping Store",
    category: "E-Commerce",
    description: "Automated dropshipping business with multiple suppliers",
    image: "/images/36.jpg",
    imageTitle: "Dropshipping Store Management - Multi-Supplier E-Commerce",
    imageDescription: "Complete dropshipping store setup and management including supplier integration, automated order fulfillment, inventory synchronization, and marketing automation for profitable dropshipping businesses.",
    results: ["$100K+ Revenue", "Zero Inventory", "Automated Fulfillment"],
    tags: ["Dropshipping", "Automation", "Multi-Supplier"],
  },
  {
    title: "Tech Blog SEO",
    category: "SEO",
    description: "Technical blog SEO with 10x organic traffic growth",
    image: "/images/37.jpg",
    imageTitle: "Content SEO Services - Technical Blog Optimization",
    imageDescription: "Advanced content SEO services including technical content optimization, keyword research, internal linking strategies, content cluster development, and performance tracking for tech blogs.",
    results: ["10x Traffic Growth", "Top 3 Rankings", "500+ Keywords"],
    tags: ["Content SEO", "Technical", "Blog"],
  },
  {
    title: "Wedding Photography Site",
    category: "Web Design",
    description: "Elegant portfolio website with booking system",
    image: "/images/38.jpg",
    imageTitle: "Portfolio Website Development - Photography Business Sites",
    imageDescription: "Stunning portfolio website development for photographers including gallery management, client booking system, package pricing, contact forms, and mobile-responsive design for wedding photography businesses.",
    results: ["300% Bookings", "Award-Winning Design", "Easy Management"],
    tags: ["Portfolio", "Photography", "Booking System"],
  },
  {
    title: "LinkedIn B2B Campaign",
    category: "Social Media",
    description: "B2B lead generation through LinkedIn advertising",
    image: "/images/39.jpg",
    imageTitle: "LinkedIn Marketing Services - B2B Lead Generation",
    imageDescription: "Professional LinkedIn marketing services including LinkedIn Ads campaigns, content strategy, lead generation forms, sponsored content, and LinkedIn Sales Navigator optimization for B2B businesses.",
    results: ["500+ Qualified Leads", "15% Conversion Rate", "B2B Success"],
    tags: ["LinkedIn", "B2B", "Lead Generation"],
  },
  {
    title: "Subscription Box Service",
    category: "E-Commerce",
    description: "Monthly subscription box with recurring billing",
    image: "/images/40.jpg",
    imageTitle: "Subscription E-Commerce Services - Recurring Revenue Model",
    imageDescription: "Complete subscription box e-commerce development including recurring billing setup, subscription management, customer portal, shipping automation, and retention strategies for subscription businesses.",
    results: ["5K+ Subscribers", "Low Churn Rate", "Recurring Revenue"],
    tags: ["Subscription", "Recurring Billing", "Retention"],
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Explore success stories and transformative results we've delivered for our clients
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-secondary"
                      : "glass bg-transparent hover:border-primary"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-3xl overflow-hidden transition-all duration-500 ease-in-out flex flex-col hover:shadow-2xl hover:shadow-primary/20"
              >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-muted/20 relative group-hover:aspect-auto group-hover:h-auto group-hover:min-h-[600px] group-hover:flex-1 transition-all duration-700 ease-in-out cursor-pointer">
                <ImageModal
                  src={project.image || "/images/8.jpg"}
                  alt={project.title}
                  title={project.imageTitle}
                  description={project.imageDescription}
                >
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={project.image || "/images/8.jpg"}
                      alt={project.title}
                      title={project.imageTitle}
                      className="w-full h-full object-cover group-hover:object-contain group-hover:h-full group-hover:w-full group-hover:max-w-full transition-all duration-700 ease-in-out group-hover:shadow-xl"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/images/8.jpg"
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/90 backdrop-blur-sm opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300 ease-in-out">
                      <div className="text-xs font-semibold mb-1">{project.imageTitle}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">{project.imageDescription}</div>
                    </div>
                  </div>
                </ImageModal>
              </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-3">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-balance">{project.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-balance">{project.description}</p>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, rIndex) => (
                      <div key={rIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to be our next success story?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create amazing results together
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
            >
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
