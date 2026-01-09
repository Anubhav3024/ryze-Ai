import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  ShopifyIcon,
  GoogleAnalyticsIcon,
  MetaIcon,
  LinkedInIcon,
  TikTokIcon,
  PinterestIcon,
} from "@/components/icons/PlatformIcons";

const platforms = [
  {
    name: "Shopify",
    icon: ShopifyIcon,
    connected: true,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Google Analytics",
    icon: GoogleAnalyticsIcon,
    connected: false,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Meta Ads",
    icon: MetaIcon,
    connected: false,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    connected: false,
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    connected: false,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Pinterest",
    icon: PinterestIcon,
    connected: false,
    color: "from-red-500 to-pink-500",
  },
];

export function AccountManagement() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Platform Integrations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Manages all your <span className="text-gradient">accounts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect all your advertising platforms in one place. Seamlessly
            manage campaigns across multiple channels from a unified dashboard.
          </p>
        </AnimatedSection>

        {/* Platform Cards Container */}
        <AnimatedSection className="max-w-5xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <StaggerItem key={platform.name}>
                  <motion.div
                    className="relative bg-background rounded-2xl p-6 border-2 border-border hover:border-primary transition-all duration-300 group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Platform Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 mx-auto`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <platform.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Platform Name */}
                    <h3 className="text-lg font-bold font-display text-center mb-4">
                      {platform.name}
                    </h3>

                    {/* Connection Status */}
                    {platform.connected ? (
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-success hover:bg-success/90 text-white"
                          disabled
                        >
                          <motion.span
                            className="flex items-center gap-2"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Connected
                          </motion.span>
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                          Connect
                        </Button>
                      </motion.div>
                    )}

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${
                          platform.color.includes("green")
                            ? "rgba(16, 185, 129, 0.1)"
                            : platform.color.includes("orange")
                            ? "rgba(251, 146, 60, 0.1)"
                            : platform.color.includes("blue-600")
                            ? "rgba(37, 99, 235, 0.1)"
                            : platform.color.includes("pink")
                            ? "rgba(236, 72, 153, 0.1)"
                            : platform.color.includes("red")
                            ? "rgba(239, 68, 68, 0.1)"
                            : "rgba(59, 130, 246, 0.1)"
                        }, transparent)`,
                      }}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Additional Info */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-muted-foreground">
                More platforms coming soon • Secure OAuth integration • Data
                synced in real-time
              </p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
