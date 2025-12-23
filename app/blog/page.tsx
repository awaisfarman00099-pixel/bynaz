"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { Clock, Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ImageModal from "@/components/image-modal"

const categories = ["All", "Marketing", "SEO", "E-Commerce", "Social Media", "Web Development"]

const blogPosts = [
  {
    title: "Great ideas for business managing process",
    excerpt:
      "Discover proven strategies to streamline your business operations and maximize productivity with modern management techniques that actually work.",
    image: "/images/14.jpg",
    imageTitle: "E-Commerce Management Services - Shopify & Amazon Store Optimization",
    imageDescription: "Professional e-commerce management services including Shopify store management, Amazon FBA optimization, inventory control, order processing, and customer service solutions for online businesses.",
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
    image: "/images/15.jpg",
    imageTitle: "Digital Marketing Strategy Services - SEO, PPC & Content Marketing",
    imageDescription: "Comprehensive digital marketing strategy services including SEO optimization, pay-per-click advertising, content marketing, email campaigns, and analytics to drive business growth and maximize ROI.",
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
    image: "/images/16.jpg",
    imageTitle: "Social Media Marketing Services - Facebook, Instagram & TikTok Management",
    imageDescription: "Expert social media marketing services including content creation, community management, influencer marketing, paid advertising, and performance analytics across Facebook, Instagram, TikTok, and LinkedIn.",
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
    image: "/images/17.jpg",
    imageTitle: "E-Commerce Optimization Services - Conversion Rate & Store Performance",
    imageDescription: "Advanced e-commerce optimization services including conversion rate optimization, checkout process improvement, product page optimization, cart abandonment recovery, and A/B testing for maximum sales.",
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
    image: "/images/18.jpg",
    imageTitle: "SEO Services - Search Engine Optimization & Organic Traffic Growth",
    imageDescription: "Professional SEO services including keyword research, on-page SEO, technical SEO, link building, local SEO, and content optimization to improve search rankings and drive organic traffic to your website.",
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
    image: "/images/19.jpg",
    imageTitle: "Web Design & Development Services - Modern Website Solutions",
    imageDescription: "Cutting-edge web design and development services including responsive design, UI/UX optimization, custom website development, mobile-first design, and performance optimization for modern businesses.",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    category: "Web Development",
    author: "Mohsin Zaid",
    href: "/blog/web-design-trends",
  },
  {
    title: "Amazon FBA product optimization guide",
    excerpt:
      "Learn the proven strategies for optimizing Amazon product listings to maximize visibility, conversions, and sales.",
    image: "/images/41.jpg",
    imageTitle: "Amazon FBA Services - Product Listing Optimization Guide",
    imageDescription: "Complete guide to Amazon FBA product optimization including keyword research, listing optimization, image optimization, A+ content creation, and review management strategies.",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    category: "E-Commerce",
    author: "Mohsin Zaid",
    href: "/blog/amazon-fba-optimization",
  },
  {
    title: "Shopify store conversion optimization",
    excerpt:
      "Discover techniques to improve your Shopify store's conversion rate and turn more visitors into paying customers.",
    image: "/images/42.jpg",
    imageTitle: "Shopify Store Optimization Services - Conversion Rate Improvement",
    imageDescription: "Expert Shopify store conversion optimization techniques including checkout optimization, product page improvements, trust signals, mobile optimization, and A/B testing strategies.",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    category: "E-Commerce",
    author: "Mohsin Zaid",
    href: "/blog/shopify-conversion",
  },
  {
    title: "Local SEO strategies for small businesses",
    excerpt:
      "Master local SEO tactics that help small businesses dominate local search results and attract nearby customers.",
    image: "/images/43.jpg",
    imageTitle: "Local SEO Services - Small Business Search Optimization",
    imageDescription: "Comprehensive local SEO strategies for small businesses including Google Business Profile optimization, local citations, review management, and local content marketing to dominate local search.",
    date: "Nov 10, 2024",
    readTime: "7 min read",
    category: "SEO",
    author: "Mohsin Zaid",
    href: "/blog/local-seo-small-business",
  },
  {
    title: "Social media content calendar planning",
    excerpt:
      "Create an effective social media content calendar that keeps your audience engaged and drives consistent results.",
    image: "/images/44.jpg",
    imageTitle: "Social Media Marketing Services - Content Calendar Strategy",
    imageDescription: "Professional social media content calendar planning including content strategy, posting schedules, content mix, engagement tactics, and analytics tracking for consistent social media success.",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    category: "Social Media",
    author: "Mohsin Zaid",
    href: "/blog/social-media-calendar",
  },
  {
    title: "E-commerce email marketing campaigns",
    excerpt:
      "Build high-converting email marketing campaigns that recover abandoned carts and drive repeat purchases.",
    image: "/images/45.jpg",
    imageTitle: "E-Commerce Email Marketing Services - Campaign Strategy",
    imageDescription: "Advanced e-commerce email marketing strategies including abandoned cart recovery, welcome series, product recommendations, segmentation, and automation workflows to maximize email ROI.",
    date: "Nov 1, 2024",
    readTime: "9 min read",
    category: "Marketing",
    author: "Mohsin Zaid",
    href: "/blog/email-marketing-ecommerce",
  },
  {
    title: "Technical SEO audit checklist",
    excerpt:
      "Complete technical SEO audit checklist to identify and fix issues that may be hurting your search rankings.",
    image: "/images/46.jpg",
    imageTitle: "Technical SEO Services - Comprehensive Audit Checklist",
    imageDescription: "Detailed technical SEO audit checklist including site speed optimization, mobile responsiveness, crawlability, indexation, structured data, and security checks for improved search performance.",
    date: "Oct 28, 2024",
    readTime: "12 min read",
    category: "SEO",
    author: "Mohsin Zaid",
    href: "/blog/technical-seo-audit",
  },
  {
    title: "Responsive web design best practices",
    excerpt:
      "Learn the essential responsive web design principles that ensure your site works perfectly on all devices.",
    image: "/images/47.jpg",
    imageTitle: "Web Design Services - Responsive Design Best Practices",
    imageDescription: "Essential responsive web design best practices including mobile-first approach, flexible layouts, media queries, touch-friendly interfaces, and performance optimization for all devices.",
    date: "Oct 25, 2024",
    readTime: "7 min read",
    category: "Web Development",
    author: "Mohsin Zaid",
    href: "/blog/responsive-web-design",
  },
  {
    title: "PPC campaign optimization strategies",
    excerpt:
      "Optimize your PPC campaigns to reduce costs while increasing conversions and return on ad spend.",
    image: "/images/48.jpg",
    imageTitle: "PPC Marketing Services - Campaign Optimization Strategies",
    imageDescription: "Advanced PPC campaign optimization strategies including keyword research, bid management, ad copy testing, landing page optimization, and conversion tracking to maximize ROI on Google Ads and Facebook Ads.",
    date: "Oct 20, 2024",
    readTime: "8 min read",
    category: "Marketing",
    author: "Mohsin Zaid",
    href: "/blog/ppc-optimization",
  },
  {
    title: "Content marketing for e-commerce",
    excerpt:
      "Develop a content marketing strategy that drives organic traffic and builds authority in your niche.",
    image: "/images/49.jpg",
    imageTitle: "Content Marketing Services - E-Commerce Content Strategy",
    imageDescription: "Comprehensive content marketing strategies for e-commerce including blog content, product descriptions, video content, user-generated content, and content distribution to drive organic traffic and sales.",
    date: "Oct 15, 2024",
    readTime: "9 min read",
    category: "Marketing",
    author: "Mohsin Zaid",
    href: "/blog/content-marketing-ecommerce",
  },
  {
    title: "Shopify apps to boost sales",
    excerpt:
      "Discover the essential Shopify apps that can help you increase conversions and automate your store operations.",
    image: "/images/50.jpg",
    imageTitle: "Shopify Store Optimization - Essential Apps for Sales Growth",
    imageDescription: "Top Shopify apps for boosting sales including conversion optimization apps, email marketing tools, review apps, upselling plugins, and automation tools to maximize store performance.",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    category: "E-Commerce",
    author: "Mohsin Zaid",
    href: "/blog/shopify-apps-sales",
  },
  {
    title: "Link building strategies for SEO",
    excerpt:
      "Build high-quality backlinks using ethical link building strategies that improve your search rankings.",
    image: "/images/51.jpg",
    imageTitle: "SEO Services - Link Building Strategies & Techniques",
    imageDescription: "Professional link building strategies including guest posting, broken link building, resource page outreach, HARO, and relationship building to acquire high-quality backlinks for improved SEO rankings.",
    date: "Oct 5, 2024",
    readTime: "11 min read",
    category: "SEO",
    author: "Mohsin Zaid",
    href: "/blog/link-building-seo",
  },
  {
    title: "E-commerce inventory management",
    excerpt:
      "Streamline your inventory management processes to reduce costs and prevent stockouts or overstocking.",
    image: "/images/52.jpg",
    imageTitle: "E-Commerce Management Services - Inventory Control Solutions",
    imageDescription: "Complete e-commerce inventory management solutions including stock tracking, automated reordering, multi-warehouse management, demand forecasting, and inventory optimization for efficient operations.",
    date: "Oct 1, 2024",
    readTime: "8 min read",
    category: "E-Commerce",
    author: "Mohsin Zaid",
    href: "/blog/inventory-management",
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
                <div className="aspect-video md:aspect-auto overflow-hidden relative group/image bg-muted/20">
                  <img
                    src={filteredPosts[0].image || "/images/14.jpg"}
                    alt={filteredPosts[0].title}
                    title={filteredPosts[0].imageTitle}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/images/14.jpg"
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity">
                    <div className="text-sm font-semibold mb-1">{filteredPosts[0].imageTitle}</div>
                    <div className="text-xs text-muted-foreground">{filteredPosts[0].imageDescription}</div>
                  </div>
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
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden transition-all duration-500 ease-in-out flex flex-col hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative bg-muted/20 group-hover:aspect-auto group-hover:h-auto group-hover:min-h-[600px] group-hover:flex-1 transition-all duration-700 ease-in-out cursor-pointer">
                  <ImageModal
                    src={post.image || "/images/14.jpg"}
                    alt={post.title}
                    title={post.imageTitle}
                    description={post.imageDescription}
                  >
                    <div className="w-full h-full flex items-center justify-center p-2">
                      <img
                        src={post.image || "/images/14.jpg"}
                        alt={post.title}
                        title={post.imageTitle}
                        className="w-full h-full object-cover group-hover:object-contain group-hover:h-full group-hover:w-full group-hover:max-w-full transition-all duration-700 ease-in-out group-hover:shadow-xl"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/images/14.jpg"
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/90 backdrop-blur-sm opacity-100 group-hover:opacity-0 group-hover:pointer-events-none transition-opacity duration-300 ease-in-out">
                        <div className="text-xs font-semibold mb-1">{post.imageTitle}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{post.imageDescription}</div>
                      </div>
                    </div>
                  </ImageModal>
                </div>

                {/* Content */}
                <Link href={post.href} className="p-6">
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
                </Link>
              </div>
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
