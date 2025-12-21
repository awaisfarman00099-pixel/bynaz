import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Great ideas for business managing process",
    excerpt:
      "Discover proven strategies to streamline your business operations and maximize productivity with modern management techniques.",
    image: "/business-management-digital.jpg",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    href: "/blog/business-managing-process",
  },
  {
    title: "Building effective plans for marketing strategy",
    excerpt:
      "Learn how to create data-driven marketing strategies that deliver measurable results and sustainable growth for your business.",
    image: "/marketing-strategy-planning.png",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    href: "/blog/marketing-strategy",
  },
  {
    title: "Boosting social media for enhancing business",
    excerpt:
      "Master social media marketing tactics that increase engagement, build brand awareness, and drive conversions across all platforms.",
    image: "/social-media-marketing.png",
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
              </div>
            </Link>
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
