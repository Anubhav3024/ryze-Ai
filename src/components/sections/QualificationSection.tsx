import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedSection";

const goodFitItems = [
  "Businesses spending $5k+/month on paid ads",
  "Growth teams scaling campaigns across platforms",
  "Agencies managing multiple client accounts",
  "Marketing teams looking to reduce manual work",
  "Companies wanting to improve ROAS",
];

const notIdealItems = [
  "Zero current ad spend",
  "Personal projects or hobbies",
  "One-time campaign needs",
  "Businesses not ready to scale",
];

export function QualificationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Is This Demo Right For You?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Who Should <span className="text-gradient">Book This Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We want to make sure this demo is valuable for you. Here's who gets
            the most out of Ryze AI.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit Column */}
          <StaggerItem>
            <motion.div
              className="glass rounded-2xl p-8 h-full border-2 border-success/30"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold font-display text-success">
                  Great Fit
                </h3>
              </div>

              <ul className="space-y-4">
                {goodFitItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>

          {/* Not Ideal Column */}
          <StaggerItem>
            <motion.div
              className="glass rounded-2xl p-8 h-full border-2 border-muted"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-display text-muted-foreground">
                  Not Ideal For
                </h3>
              </div>

              <ul className="space-y-4">
                {notIdealItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Note */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Not sure if you're a good fit? Book anyway — our team will help you
            determine if Ryze is right for your business during the demo.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
