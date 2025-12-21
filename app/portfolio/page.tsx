"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"

const categories = ["All", "E-Commerce", "Web Design", "SEO", "Social Media"]

const projects = [
  {
    title: "Fashion E-Commerce Store",
    category: "E-Commerce",
    description: "Complete Shopify store with 300% sales increase in 3 months",
    image: "/portfolio-fashion-ecommerce.jpg",
    results: ["300% Sales Increase", "50K+ Monthly Visitors", "4.9 Star Rating"],
    tags: ["Shopify", "Marketing", "SEO"],
  },
  {
    title: "Tech Startup Website",
    category: "Web Design",
    description: "Modern SaaS website with conversion-focused design",
    image: "/portfolio-saas-website.png",
    results: ["45% Conversion Rate", "10K+ Sign-ups", "Award Winning"],
    tags: ["Next.js", "UI/UX", "Development"],
  },
  {
    title: "Restaurant Chain SEO",
    category: "SEO",
    description: "Local SEO campaign resulting in 5x organic traffic growth",
    image: "/portfolio-restaurant-seo.jpg",
    results: ["500% Traffic Growth", "Page 1 Rankings", "85+ Keywords"],
    tags: ["Local SEO", "Content", "Analytics"],
  },
  {
    title: "Beauty Brand Social Campaign",
    category: "Social Media",
    description: "Viral TikTok and Instagram campaign with 10M+ impressions",
    image: "/portfolio-beauty-social.png",
    results: ["10M+ Impressions", "200K Followers", "8x ROI"],
    tags: ["TikTok", "Instagram", "Influencer"],
  },
  {
    title: "Electronics Marketplace",
    category: "E-Commerce",
    description: "Multi-vendor Amazon store management with optimized listings",
    image: "/portfolio-electronics-amazon.jpg",
    results: ["$500K Revenue", "1000+ Products", "Best Seller Badge"],
    tags: ["Amazon", "Listing", "Optimization"],
  },
  {
    title: "Fitness App Landing Page",
    category: "Web Design",
    description: "High-converting landing page with interactive animations",
    image: "/portfolio-fitness-landing.png",
    results: ["60% Conversion", "100K+ Downloads", "Featured on PH"],
    tags: ["Landing Page", "Animation", "Mobile"],
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
                className="group glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-muted/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
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
