import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";

const metrics = [
  {
    label: "Return on Ad Spend",
    before: "2.1x",
    after: "3.4x",
    change: "+63%",
    positive: true,
    beforeWidth: 40,
    afterWidth: 85,
  },
  {
    label: "Cost Per Click",
    before: "$4.20",
    after: "$1.68",
    change: "-60%",
    positive: true,
    beforeWidth: 70,
    afterWidth: 28,
  },
  {
    label: "Time on Ads Weekly",
    before: "20 hrs",
    after: "2 hrs",
    change: "-90%",
    positive: true,
    beforeWidth: 80,
    afterWidth: 8,
  },
  {
    label: "Conversion Rate",
    before: "2.3%",
    after: "4.1%",
    change: "+78%",
    positive: true,
    beforeWidth: 35,
    afterWidth: 62,
  },
];

const platformPerformance = [
  { platform: "Google Ads", multiplier: "4.8x", budget: "$12,500", color: "bg-blue-500", width: 95 },
  { platform: "Meta Ads", multiplier: "3.2x", budget: "$8,200", color: "bg-indigo-500", width: 75 },
  { platform: "LinkedIn", multiplier: "2.9x", budget: "$5,400", color: "bg-sky-500", width: 65 },
  { platform: "Reddit", multiplier: "3.6x", budget: "$3,800", color: "bg-orange-500", width: 80 },
];

export function Analytics() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            See the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real performance data from Ryze-optimized campaigns. 
            Your ads work harder, smarter, and more efficiently.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before/After Comparison */}
          <AnimatedSection delay={0.1}>
            <motion.div 
              className="glass rounded-2xl p-8 h-full"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                <TrendingUp className="text-primary" />
                Performance Comparison
              </h3>
              
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <motion.div 
                    key={metric.label} 
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">{metric.label}</span>
                      <span className={`text-sm font-bold flex items-center gap-1 ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                        {metric.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {metric.change}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Before</span>
                          <span className="font-medium">{metric.before}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-muted-foreground/30 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.beforeWidth}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-primary">After</span>
                          <span className="font-bold text-primary">{metric.after}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.afterWidth}%` }}
                            transition={{ duration: 1.2, delay: 0.4 + index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Budget Reallocation Visualization */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="glass rounded-2xl p-8 h-full"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                <TrendingDown className="text-primary rotate-180" />
                Smart Budget Allocation
              </h3>
              
              <div className="space-y-5">
                {platformPerformance.map((platform, index) => (
                  <motion.div 
                    key={platform.platform} 
                    className="group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{platform.budget}</span>
                        <span className="text-primary font-bold">{platform.multiplier}</span>
                      </div>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${platform.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${platform.width}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <motion.div 
                className="mt-8 pt-6 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Monthly Ad Spend</p>
                    <p className="text-2xl font-bold font-display">$29,900</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Blended ROAS</p>
                    <p className="text-2xl font-bold font-display text-gradient">3.8x</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
