import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DashboardDemo } from "@/components/sections/DashboardDemo";
import { Analytics } from "@/components/sections/Analytics";
import { WallOfLove } from "@/components/sections/WallOfLove";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/animations/PageLoader";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { ScrollToTop } from "@/components/animations/ScrollToTop";
import { motion } from "framer-motion";

const Index = () => {
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
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardDemo />
        <Analytics />
        <WallOfLove />
        <Testimonials />
        <Pricing />
        <CTA />
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
