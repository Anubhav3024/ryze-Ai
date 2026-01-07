import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsla(192, 100%, 50%, 0.1) 0%, hsla(280, 100%, 65%, 0.1) 50%, hsla(192, 100%, 50%, 0.1) 100%)",
            "linear-gradient(135deg, hsla(280, 100%, 65%, 0.1) 0%, hsla(192, 100%, 50%, 0.1) 50%, hsla(280, 100%, 65%, 0.1) 100%)",
            "linear-gradient(135deg, hsla(192, 100%, 50%, 0.1) 0%, hsla(280, 100%, 65%, 0.1) 50%, hsla(192, 100%, 50%, 0.1) 100%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div 
            className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ 
              boxShadow: [
                "0 0 60px -15px hsla(192, 100%, 50%, 0.4)",
                "0 0 80px -15px hsla(192, 100%, 50%, 0.6)",
                "0 0 60px -15px hsla(192, 100%, 50%, 0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your
            <br />
            <span className="text-gradient">Advertising Performance?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join 500+ agencies and brands already using Ryze AI to automate 
            their ad management and boost ROI. Start your free trial today.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="xl">
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              "14-day free trial",
              "No credit card required",
              "Cancel anytime"
            ].map((badge, index) => (
              <motion.div 
                key={badge}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-2 h-2 bg-success rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
