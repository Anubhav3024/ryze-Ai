import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DemoBookingForm } from "@/components/sections/DemoBookingForm";
import { DemoPreview } from "@/components/sections/DemoPreview";
import { QualificationSection } from "@/components/sections/QualificationSection";
import { DemoFAQ } from "@/components/sections/DemoFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageLoader } from "@/components/animations/PageLoader";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ScrollToTop } from "@/components/animations/ScrollToTop";
import { motion } from "framer-motion";
import { Clock, Shield, Users, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";

const trustIndicators = [
  { icon: Clock, text: "30-minute live demo" },
  { icon: Shield, text: "No credit card required" },
  { icon: Users, text: "Tailored for your business" },
];

const BookDemo = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <ScrollProgress />
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* SECTION 1: HERO / INTRO - Split Layout */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-pulse" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left: Text Content */}
              <AnimatedSection className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    See Ryze AI in Action
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Book a Personalized{" "}
                  <span className="text-gradient">Ryze AI Demo</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  See how Ryze automatically optimizes your ads across platforms
                  and increases ROI — live, with your use case.
                </motion.p>

                {/* Trust Indicators */}
                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {trustIndicators.map((indicator, index) => (
                    <motion.div
                      key={indicator.text}
                      className="flex items-center gap-3 justify-center lg:justify-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <indicator.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">
                        {indicator.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={scrollToForm}
                    className="px-8 py-6 text-lg"
                  >
                    Book My Demo Now
                  </Button>
                </motion.div>
              </AnimatedSection>

              {/* Right: Illustration / Dashboard Preview */}
              <AnimatedSection delay={0.4}>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Dashboard Mockup */}
                  <div className="glass rounded-2xl p-8 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

                    <div className="relative space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-primary" />
                          <div>
                            <div className="h-3 w-24 bg-foreground/20 rounded mb-2" />
                            <div className="h-2 w-16 bg-foreground/10 rounded" />
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-success animate-pulse" />
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 py-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="glass rounded-xl p-4">
                            <div className="h-2 w-12 bg-foreground/10 rounded mb-3" />
                            <div className="h-6 w-20 bg-gradient-primary rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Chart */}
                      <div className="glass rounded-xl p-4">
                        <div className="h-32 flex items-end gap-2">
                          {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 bg-gradient-primary rounded-t"
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-2xl">📈</div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 glass rounded-xl p-3 shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <div className="text-2xl">🎯</div>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 2: Demo Booking Form */}
        <DemoBookingForm />

        {/* SECTION 3: What You'll See in Demo */}
        <DemoPreview />

        {/* SECTION 5: Who This Demo Is For */}
        <QualificationSection />

        {/* SECTION 6: Social Proof */}
        <section className="py-16 relative overflow-hidden bg-secondary/10">
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto">
              {/* Testimonial */}
              <motion.div
                className="glass rounded-2xl p-8 md:p-12 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  "Ryze helped us cut manual work by 90% while improving ROAS in
                  the first month. The demo showed us exactly how it would work
                  for our business."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary" />
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">
                      Head of Growth, TechStart Inc.
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Logo Strip */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-muted-foreground mb-6">
                  Trusted by leading companies worldwide
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
                  {["Company A", "Company B", "Company C", "Company D"].map(
                    (company) => (
                      <div key={company} className="text-lg font-bold">
                        {company}
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <DemoFAQ />

        {/* SECTION 8: Final CTA */}
        <FinalCTA />
      </motion.main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BookDemo;
