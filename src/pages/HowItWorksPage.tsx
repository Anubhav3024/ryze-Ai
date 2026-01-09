import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DashboardDemo } from "@/components/sections/DashboardDemo";
import { Analytics } from "@/components/sections/Analytics";
import { PageLoader } from "@/components/animations/PageLoader";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ScrollToTop } from "@/components/animations/ScrollToTop";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HowItWorksPage() {
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
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
                How <span className="text-gradient">Ryzen AI</span> Works
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Discover how our AI-powered platform transforms your advertising
                campaigns with intelligent automation and real-time
                optimization.
              </p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/book-demo">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="hero"
                      size="lg"
                      className="px-8 py-6 text-lg"
                    >
                      Book a Demo
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/login">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-6 text-lg border-2"
                    >
                      Login
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Get Started in 3 Simple Steps */}
        <HowItWorks />

        {/* Section 2: Live Demo - See Ryze AI In Action */}
        <DashboardDemo />

        {/* Section 3: Real Results */}
        <Analytics />
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
