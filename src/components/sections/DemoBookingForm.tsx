import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  company: string;
  role: string;
  // Step 2
  adSpend: string;
  platforms: string[];
  goals: string;
}

const roles = [
  "Founder/CEO",
  "Marketing Manager",
  "Agency Owner",
  "Growth Lead",
  "Other",
];
const adSpendOptions = [
  "Less than $5k/month",
  "$5k - $25k/month",
  "$25k - $100k/month",
  "$100k+/month",
];
const platformOptions = [
  "Google Ads",
  "Meta (Facebook/Instagram)",
  "LinkedIn",
  "TikTok",
  "Pinterest",
  "Reddit",
];

export function DemoBookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    adSpend: "",
    platforms: [],
    goals: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("demoFormData");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved form data");
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("demoFormData", JSON.stringify(formData));
  }, [formData]);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePlatform = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const isStep1Valid = () => {
    return (
      formData.fullName && formData.email && formData.company && formData.role
    );
  };

  const isStep2Valid = () => {
    return formData.adSpend && formData.platforms.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Clear localStorage
    localStorage.removeItem("demoFormData");

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        role: "",
        adSpend: "",
        platforms: [],
        goals: "",
      });
      setStep(1);
    }, 3000);
  };

  return (
    <section id="booking-form" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Book Your Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Let's Get <span className="text-gradient">Started</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll schedule a personalized demo at a
            time that works for you.
          </p>
        </AnimatedSection>

        <motion.div
          className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Step {step} of 2</span>
              <span className="text-sm text-muted-foreground">
                {step === 1 ? "Basic Information" : "Business Context"}
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary"
                initial={{ width: "0%" }}
                animate={{ width: step === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Work Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Acme Inc."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Role <span className="text-destructive">*</span>
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => updateField("role", e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary transition-all"
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid()}
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Monthly Ad Spend */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Monthly Ad Spend{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <select
                      value={formData.adSpend}
                      onChange={(e) => updateField("adSpend", e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary transition-all"
                    >
                      <option value="">Select your ad spend</option>
                      {adSpendOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Platforms Used */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Platforms You Use{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {platformOptions.map((platform) => (
                        <motion.button
                          key={platform}
                          type="button"
                          onClick={() => togglePlatform(platform)}
                          className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            formData.platforms.includes(platform)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground hover:border-primary/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {formData.platforms.includes(platform) && (
                            <Check className="w-4 h-4 inline mr-2" />
                          )}
                          {platform}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Goals (Optional) */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What are you looking to improve? (Optional)
                    </label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => updateField("goals", e.target.value)}
                      placeholder="E.g., Reduce CPA, scale campaigns, improve ROAS..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={() => setStep(1)}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={!isStep2Valid() || isSubmitting || isSuccess}
                      variant="hero"
                      size="lg"
                      className="flex-1"
                    >
                      {isSuccess ? (
                        <>
                          <Check className="mr-2 w-5 h-5" />
                          Booked!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        "Book My Demo"
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Trust Indicators */}
          <motion.div
            className="mt-8 pt-8 border-t border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground">
              🔒 Your information is secure • No credit card required • Cancel
              anytime
            </p>
          </motion.div>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="glass rounded-2xl p-8 max-w-md w-full text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Check className="w-10 h-10 text-success" />
                </motion.div>
                <h3 className="text-2xl font-bold font-display mb-3">
                  Demo Booked Successfully!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Check your email for confirmation and next steps. We're
                  excited to show you how Ryze can transform your advertising!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
