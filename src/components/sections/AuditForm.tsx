import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export function AuditForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
    }, 3000);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold font-display">
                Audit your ad account{" "}
                <span className="text-gradient">instantly</span>
              </h2>
            </motion.div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a comprehensive analysis of your advertising accounts in
              seconds. Discover optimization opportunities and start your 3-day
              free trial.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Email Input */}
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={!isValidEmail(email) || isSubmitting || isSuccess}
                  className="w-full md:w-auto px-8 py-4 h-auto text-base font-semibold"
                >
                  {isSuccess ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        ✓
                      </motion.span>
                      Success!
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block"
                      >
                        ⟳
                      </motion.span>
                      Processing...
                    </span>
                  ) : (
                    "Start 3-Day Free Trial"
                  )}
                </Button>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground">
                No credit card required • Cancel anytime • Full access to all
                features
              </p>
            </motion.div>
          </motion.form>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: "10k+", label: "Active Users" },
              { value: "$50M+", label: "Ad Spend Managed" },
              { value: "4.9/5", label: "User Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
