import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedSection";

const faqs = [
  {
    question: "How long is the demo?",
    answer:
      "The demo is 30 minutes. We'll spend the first 15 minutes understanding your business and showing you how Ryze works, then the remaining 15 minutes diving into your specific use case with a live walkthrough.",
  },
  {
    question: "Is it sales-heavy?",
    answer:
      "Not at all. Our demos are educational and consultative. We focus on showing you how Ryze can solve your specific challenges. There's no pressure — we'll only discuss pricing if you ask.",
  },
  {
    question: "Do I need to connect my ad account?",
    answer:
      "No, you don't need to connect anything before the demo. We'll show you how Ryze works using sample data. If you want a personalized audit during the call, you can optionally share your screen.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're SOC 2 Type II certified and fully GDPR compliant. Your data is encrypted in transit and at rest. We never share your information with third parties, and you maintain full control over your data.",
  },
  {
    question: "Can my team join?",
    answer:
      "Yes! We encourage you to bring anyone who would benefit from seeing the demo — your marketing team, agency partners, or decision-makers. Just let us know in the booking form so we can tailor the demo accordingly.",
  },
];

export function DemoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about booking a demo with Ryze AI.
          </p>
        </AnimatedSection>

        <StaggerContainer className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Help */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our team
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
