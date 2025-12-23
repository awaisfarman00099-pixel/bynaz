"use client"

import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageModal from "@/components/image-modal"

const blogPosts = [
  {
    title: "Great ideas for business managing process",
    excerpt:
      "Discover proven strategies to streamline your business operations and maximize productivity with modern management techniques.",
    image: "/images/5.jpg",
    imageTitle: "E-Commerce Business Management Services - Shopify & Amazon Optimization",
    imageDescription: "Comprehensive e-commerce business management services including Shopify store management, Amazon FBA optimization, inventory management, and order fulfillment solutions to streamline operations.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    href: "/blog/business-managing-process",
  },
  {
    title: "Building effective plans for marketing strategy",
    excerpt:
      "Learn how to create data-driven marketing strategies that deliver measurable results and sustainable growth for your business.",
    image: "/images/6.jpg",
    imageTitle: "Digital Marketing Strategy Services - SEO & Content Marketing",
    imageDescription: "Expert digital marketing strategy services including SEO optimization, content marketing, email campaigns, and performance analytics to drive sustainable business growth and ROI.",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    href: "/blog/marketing-strategy",
  },
  {
    title: "Boosting social media for enhancing business",
    excerpt:
      "Master social media marketing tactics that increase engagement, build brand awareness, and drive conversions across all platforms.",
    image: "/images/7.jpg",
    imageTitle: "Social Media Marketing Services - Brand Building & Engagement",
    imageDescription: "Professional social media marketing services for Facebook, Instagram, TikTok, and LinkedIn including content creation, community management, influencer partnerships, and campaign optimization.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    href: "/blog/social-media-business",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips and strategies to grow your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 ease-in-out flex flex-col hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative bg-muted/20 group-hover:aspect-auto group-hover:h-auto group-hover:min-h-[600px] group-hover:flex-1 transition-all duration-700 ease-in-out cursor-pointer">
                <ImageModal
                  src={post.image || "/images/5.jpg"}
                  alt={post.title}
                  title={post.imageTitle}
                  description={post.imageDescription}
                >
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={post.image || "/images/5.jpg"}
                      alt={post.title}
                      title={post.imageTitle}
                      className="w-full h-full object-cover group-hover:object-contain group-hover:h-full group-hover:w-full group-hover:max-w-full transition-all duration-700 ease-in-out group-hover:shadow-xl"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/images/5.jpg"
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
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-4 text-balance">{post.excerpt}</p>

                {/* Read More */}
                <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="glass bg-transparent">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
