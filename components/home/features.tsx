import { Target, TrendingUp, Lightbulb, Users } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Customized Solutions",
    description: "Tailored strategies designed specifically for your business goals and target audience.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Driven Approach",
    description: "Data-driven campaigns focused on maximizing your return on investment and growth.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solution",
    description: "Innovative thinking combined with proven methodologies for outstanding results.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with 10+ years of experience in digital services.",
  },
]

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">BymzTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer animated-border"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:glow-primary transition-all">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
