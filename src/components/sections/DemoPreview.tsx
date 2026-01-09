import { motion } from "framer-motion";
import { Search, Settings, BarChart3, DollarSign } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedSection";

const demoFeatures = [
  {
    icon: Search,
    title: "Live Ad Account Audit",
    description:
      "We'll analyze your current campaigns and identify optimization opportunities in real-time.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Real-Time AI Optimization",
    description:
      "See how our AI automatically adjusts bids, budgets, and targeting to maximize performance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Cross-Platform Dashboard",
    description:
      "Experience our unified dashboard managing Google, Meta, LinkedIn, and more from one place.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: DollarSign,
    title: "Budget Rebalancing in Action",
    description:
      "Watch as Ryze intelligently shifts budget from underperforming to high-ROI campaigns.",
    color: "from-green-500 to-emerald-500",
  },
];

export function DemoPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What's Included
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            What You'll See in <span className="text-gradient">the Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A personalized 30-minute session tailored to your business needs and
            advertising goals.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {demoFeatures.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="glass rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold font-display mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Note */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              💡 <strong className="text-foreground">Pro Tip:</strong> Come
              prepared with questions about your specific advertising
              challenges. We'll customize the demo to address them.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
