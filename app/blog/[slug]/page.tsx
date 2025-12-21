import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Link from "next/link"
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would normally come from a CMS or database
export default function BlogPostPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-4">
              Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Great ideas for business managing process
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Dec 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>5 min read</span>
              </div>
              <div>By Mohsin Zaid</div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-3xl overflow-hidden mb-12">
              <img
                src="/business-management-digital.jpg"
                alt="Business Management"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-muted-foreground">Share:</span>
              <Button size="sm" variant="outline" className="glass bg-transparent">
                <Share2 size={16} />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In today's fast-paced business environment, effective management processes are crucial for success.
              Whether you're running a startup or managing an established enterprise, implementing the right strategies
              can make all the difference.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding Modern Business Management</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Modern business management goes beyond traditional hierarchical structures. It's about creating agile
              systems that can adapt to change, empowering teams to make decisions, and leveraging technology to
              streamline operations.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Key Strategies for Success</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Embrace Digital Transformation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Digital tools and automation can significantly improve efficiency. From project management software to CRM
              systems, investing in the right technology stack is essential for modern businesses.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Focus on Data-Driven Decisions</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Use analytics and metrics to guide your business decisions. Understanding your KPIs and regularly
              reviewing performance data helps identify areas for improvement and opportunities for growth.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Build Strong Team Communication</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Clear communication channels are vital for effective management. Regular team meetings, transparent goal
              setting, and open feedback loops create a culture of collaboration and accountability.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Implementation Tips</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Start with a comprehensive audit of your current processes</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Prioritize changes based on impact and feasibility</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Invest in training and development for your team</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Monitor progress and adjust strategies as needed</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Implementing effective business management processes is an ongoing journey, not a destination. By staying
              adaptable, embracing technology, and focusing on continuous improvement, you can build a resilient
              organization that thrives in any market condition.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Business Strategy?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help optimize your business processes
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
