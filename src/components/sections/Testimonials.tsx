import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const testimonials = [
  {
    quote: "Ryze cut our ad management time by 85% while improving ROAS by 40%. It's like having a senior media buyer working 24/7.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechScale Inc.",
    avatar: "SC",
    result: "+40% ROAS",
  },
  {
    quote: "We manage 50+ client accounts. Ryze's automation lets us scale without adding headcount. Game-changer for our agency.",
    author: "Marcus Williams",
    role: "Founder & CEO",
    company: "GrowthPilot Agency",
    avatar: "MW",
    result: "50+ accounts",
  },
  {
    quote: "The AI-powered creative suggestions alone paid for the subscription in the first week. Our CTR increased by 65%.",
    author: "Emily Rodriguez",
    role: "Performance Manager",
    company: "Luxe Brands",
    avatar: "ER",
    result: "+65% CTR",
  },
  {
    quote: "Finally, a tool that understands B2B advertising. LinkedIn ad performance improved dramatically after just 2 weeks.",
    author: "David Park",
    role: "VP of Growth",
    company: "SaaS Dynamics",
    avatar: "DP",
    result: "2x leads",
  },
];

const logos = [
  "TechScale", "GrowthPilot", "Luxe", "SaaS Dynamics", 
  "Venture Labs", "Scale.io", "Adtech Pro", "MediaBurst"
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of agencies and brands that have transformed their 
            advertising performance with Ryze AI.
          </p>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-16">
          <motion.div 
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            {/* Active Testimonial */}
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-warning text-warning" />
                  </motion.div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-8"
                >
                  "{testimonials[activeIndex].quote}"
                </motion.blockquote>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between flex-wrap gap-4"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonials[activeIndex].avatar}
                    </motion.div>
                    <div>
                      <p className="font-semibold">{testimonials[activeIndex].author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                  <motion.div 
                    className="glass px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary font-bold">{testimonials[activeIndex].result}</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full glass flex items-center justify-center pointer-events-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full glass flex items-center justify-center pointer-events-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted w-3 hover:bg-muted-foreground"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Logo Cloud */}
        <AnimatedSection delay={0.3}>
          <div className="border-t border-border pt-12">
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, color: "hsl(var(--foreground))" }}
                  className="text-xl font-bold text-muted-foreground/50 cursor-pointer transition-colors duration-300"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
