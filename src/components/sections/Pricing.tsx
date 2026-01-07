import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI ads",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      "1 ad platform integration",
      "Up to $10k monthly ad spend",
      "Basic AI optimization",
      "Weekly performance reports",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams scaling their advertising",
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      "All platforms included",
      "Up to $50k monthly ad spend",
      "Advanced AI optimization",
      "Real-time budget reallocation",
      "AI creative suggestions",
      "Daily performance reports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Agency",
    description: "For agencies managing multiple client accounts",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      "Unlimited platforms",
      "Unlimited ad spend",
      "White-label dashboard",
      "Multi-account management",
      "Custom AI training",
      "API access",
      "Dedicated success manager",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <motion.div 
            className="inline-flex items-center gap-4 glass rounded-full p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative glass rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular ? "border-2 border-primary shadow-glow" : ""
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold font-display mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <motion.div 
                    className="flex items-baseline gap-1"
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-bold font-display">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </motion.div>
                  {isYearly && (
                    <motion.p 
                      className="text-sm text-success mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </motion.p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enterprise CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <motion.a 
              href="#" 
              className="text-primary font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Contact our sales team
            </motion.a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
