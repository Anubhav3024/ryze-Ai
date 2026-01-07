import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Layers, 
  Sparkles, 
  RefreshCcw, 
  Shield,
  ArrowRight
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";

const features = [
  {
    icon: Zap,
    title: "Automated Campaign Optimization",
    description: "AI monitors and adjusts your ads in real-time, 24/7. No more manual bidding or constant monitoring.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layers,
    title: "Cross-Platform Management",
    description: "Manage Google, Meta, LinkedIn, Reddit & more from one unified dashboard.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: RefreshCcw,
    title: "Smart Budget Rebalancing",
    description: "Automatically move budget to top-performing ads and campaigns for maximum ROI.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "AI-Generated Creatives",
    description: "Get AI-powered suggestions for new ads, keywords, and copy improvements.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Deep insights into performance with actionable recommendations you can implement instantly.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Account Health Audits",
    description: "Comprehensive audits identify wasted spend, optimization opportunities, and compliance issues.",
    color: "from-red-500 to-rose-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Everything You Need to
            <span className="text-gradient"> Scale Your Ads</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop wasting time and money on manual ad management. Let Ryze's AI 
            handle the heavy lifting while you focus on strategy.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="group glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 cursor-pointer h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 4 }}
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
