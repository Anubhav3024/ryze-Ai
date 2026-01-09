import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export function FinalCTA() {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-12 md:p-16 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-6xl">🚀</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold font-display mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Still Not Sure?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Book the demo — there's no obligation, no pressure, and no credit
              card required. Just 30 minutes to see if Ryze is the right fit for
              your business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  onClick={scrollToForm}
                  className="px-8 py-6 text-lg"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                or contact our team
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                30-minute demo
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Personalized for you
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
