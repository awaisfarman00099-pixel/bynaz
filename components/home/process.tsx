import { Lightbulb, Target, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery",
    description: "We analyze your business goals, target audience, and market opportunities.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy",
    description: "Create a customized roadmap with clear objectives and measurable KPIs.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    description: "Implement solutions with precision, creativity, and technical excellence.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization",
    description: "Continuously monitor, analyze, and improve for maximum results.",
  },
]

export default function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures success at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <step.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
