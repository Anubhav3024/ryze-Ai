import { motion } from "framer-motion";
import { Link2, Brain, Rocket, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Platforms",
    description: "Link your Google, Meta, LinkedIn, Reddit & more in minutes. Secure OAuth connection with read-only access.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analyzes",
    description: "Our AI scans your accounts 24/7, identifying optimization opportunities, wasted spend, and growth potential.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Optimize Automatically",
    description: "Watch as Ryze makes real-time adjustments to bids, budgets, and targeting to maximize your ROAS.",
    color: "from-orange-500 to-yellow-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Get Started in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From setup to optimization in under 5 minutes. No complex integrations, 
            no learning curve—just results.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-warning rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Steps Grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Mobile Connecting Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden absolute left-1/2 -bottom-4 w-1 h-8 -translate-x-1/2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      style={{ transformOrigin: "top" }}
                    >
                      <div className="h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                    </motion.div>
                  )}

                  {/* Card */}
                  <motion.div
                    className="glass rounded-2xl p-8 text-center relative z-10 h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-primary bg-background border border-primary/30 px-3 py-1 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.2, type: "spring" }}
                    >
                      STEP {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          "0 10px 40px -10px rgba(0,0,0,0.3)",
                          "0 20px 60px -15px rgba(0,0,0,0.4)",
                          "0 10px 40px -10px rgba(0,0,0,0.3)",
                        ],
                      }}
                      transition={{
                        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background border border-border items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2, type: "spring" }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-2">
            Average setup time: <span className="text-primary font-semibold">4 minutes</span>
          </p>
          <p className="text-sm text-muted-foreground/70">
            No credit card required • Free 14-day trial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
