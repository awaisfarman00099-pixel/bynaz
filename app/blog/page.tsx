"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { Clock, Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = ["All", "Marketing", "SEO", "E-Commerce", "Social Media", "Web Development"]

const blogPosts = [
  {
    title: "Great ideas for business managing process",
    excerpt:
      "Discover proven strategies to streamline your business operations and maximize productivity with modern management techniques that actually work.",
    image: "/business-management-digital.jpg",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Marketing",
    author: "Mohsin Zaid",
    href: "/blog/business-managing-process",
  },
  {
    title: "Building effective plans for marketing strategy",
    excerpt:
      "Learn how to create data-driven marketing strategies that deliver measurable results and sustainable growth for your business in today's competitive landscape.",
    image: "/marketing-strategy-planning.png",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Marketing",
    author: "Mohsin Zaid",
    href: "/blog/marketing-strategy",
  },
  {
    title: "Boosting social media for enhancing business",
    excerpt:
      "Master social media marketing tactics that increase engagement, build brand awareness, and drive conversions across all major platforms.",
    image: "/social-media-marketing.png",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Social Media",
    author: "Mohsin Zaid",
    href: "/blog/social-media-business",
  },
  {
    title: "E-Commerce optimization strategies for 2025",
    excerpt:
      "Stay ahead of the competition with cutting-edge e-commerce optimization techniques that boost conversions and increase average order value.",
    image: "/ecommerce-optimization-strategies.jpg",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    category: "E-Commerce",
    author: "Mohsin Zaid",
    href: "/blog/ecommerce-optimization",
  },
  {
    title: "SEO best practices that actually work",
    excerpt:
      "Cut through the noise and learn the SEO tactics that deliver real results, from technical optimization to content strategy and link building.",
    image: "/seo-best-practices.png",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    category: "SEO",
    author: "Mohsin Zaid",
    href: "/blog/seo-best-practices",
  },
  {
    title: "Modern web design trends for businesses",
    excerpt:
      "Explore the latest web design trends that combine aesthetics with functionality to create websites that convert visitors into customers.",
    image: "/web-design-trends.jpg",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    category: "Web Development",
    author: "Mohsin Zaid",
    href: "/blog/web-design-trends",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Expert insights, tips, and strategies to grow your digital presence
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 glass bg-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
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

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <Link
              href={filteredPosts[0].href}
              className="block mb-16 glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={filteredPosts[0].image || "/placeholder.svg"}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-4 w-fit">
                    Featured
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{filteredPosts[0].title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-balance">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-4 text-balance">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and tips
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1 glass bg-transparent" />
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
