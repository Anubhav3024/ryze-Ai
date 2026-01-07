import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Play, 
  Pause,
  BarChart3,
  Target,
  DollarSign,
  MousePointerClick,
  Eye,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";

// Mock campaign data
const campaigns = [
  { 
    id: 1, 
    name: "Summer Sale - Google", 
    platform: "Google",
    status: "active",
    spend: 2450,
    impressions: 145000,
    clicks: 4350,
    conversions: 187,
    roas: 4.2,
    trend: "up",
    change: 12.5
  },
  { 
    id: 2, 
    name: "Brand Awareness - Meta", 
    platform: "Meta",
    status: "active",
    spend: 1890,
    impressions: 289000,
    clicks: 8670,
    conversions: 234,
    roas: 3.8,
    trend: "up",
    change: 8.3
  },
  { 
    id: 3, 
    name: "B2B Leads - LinkedIn", 
    platform: "LinkedIn",
    status: "optimizing",
    spend: 980,
    impressions: 45000,
    clicks: 1350,
    conversions: 67,
    roas: 5.1,
    trend: "up",
    change: 23.7
  },
  { 
    id: 4, 
    name: "Retargeting - Reddit", 
    platform: "Reddit",
    status: "warning",
    spend: 560,
    impressions: 78000,
    clicks: 2340,
    conversions: 45,
    roas: 2.1,
    trend: "down",
    change: -5.2
  },
];

const aiActions = [
  { action: "Paused underperforming ad set", campaign: "Reddit Retargeting", time: "2 min ago", type: "pause" },
  { action: "Increased budget by 15%", campaign: "LinkedIn B2B", time: "8 min ago", type: "budget" },
  { action: "New keyword added", campaign: "Google Summer Sale", time: "15 min ago", type: "keyword" },
  { action: "Creative A/B test started", campaign: "Meta Brand", time: "32 min ago", type: "creative" },
];

const metrics = [
  { label: "Total Spend", value: "$5,880", icon: DollarSign, change: "+12%", positive: true },
  { label: "Impressions", value: "557K", icon: Eye, change: "+28%", positive: true },
  { label: "Clicks", value: "16.7K", icon: MousePointerClick, change: "+15%", positive: true },
  { label: "Conversions", value: "533", icon: ShoppingCart, change: "+34%", positive: true },
];

export function DashboardDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAction, setActiveAction] = useState(0);
  const [optimizingCampaign, setOptimizingCampaign] = useState<number | null>(null);

  // Simulate AI actions cycling
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveAction((prev) => (prev + 1) % aiActions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Simulate optimization animation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setOptimizingCampaign(Math.floor(Math.random() * campaigns.length));
      setTimeout(() => setOptimizingCampaign(null), 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Google": return "bg-blue-500";
      case "Meta": return "bg-indigo-500";
      case "LinkedIn": return "bg-sky-500";
      case "Reddit": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return <span className="px-2 py-1 text-xs rounded-full bg-success/20 text-success">Active</span>;
      case "optimizing": return <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary flex items-center gap-1"><RefreshCcw className="w-3 h-3 animate-spin" />Optimizing</span>;
      case "warning": return <span className="px-2 py-1 text-xs rounded-full bg-warning/20 text-warning flex items-center gap-1"><AlertCircle className="w-3 h-3" />Review</span>;
      default: return null;
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Live Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            See Ryze AI <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Watch how Ryze continuously monitors and optimizes your campaigns in real-time. 
            This is a live simulation of what your dashboard looks like.
          </p>
          <Button
            variant={isPlaying ? "outline" : "hero"}
            onClick={() => setIsPlaying(!isPlaying)}
            className="gap-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Pause Demo" : "Resume Demo"}
          </Button>
        </AnimatedSection>

        {/* Dashboard Container */}
        <AnimatedSection delay={0.2}>
          <div className="glass rounded-3xl p-6 md:p-8 max-w-6xl mx-auto shadow-glow">
            {/* Top Metrics Row */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric) => (
                <StaggerItem key={metric.label}>
                  <motion.div 
                    className="glass rounded-xl p-4 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className="w-5 h-5 text-muted-foreground" />
                      <span className={`text-xs font-medium flex items-center gap-1 ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                        {metric.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold font-display">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Campaign Table */}
              <div className="lg:col-span-2 glass rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Active Campaigns
                  </h3>
                  <span className="text-xs text-muted-foreground">Last updated: Just now</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-xs text-muted-foreground">
                        <th className="text-left p-4">Campaign</th>
                        <th className="text-left p-4 hidden md:table-cell">Status</th>
                        <th className="text-right p-4">Spend</th>
                        <th className="text-right p-4 hidden sm:table-cell">Conv.</th>
                        <th className="text-right p-4">ROAS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign, index) => (
                        <motion.tr
                          key={campaign.id}
                          className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${
                            optimizingCampaign === index ? "bg-primary/10" : ""
                          }`}
                          animate={optimizingCampaign === index ? { 
                            backgroundColor: ["hsla(192, 100%, 50%, 0)", "hsla(192, 100%, 50%, 0.1)", "hsla(192, 100%, 50%, 0)"]
                          } : {}}
                          transition={{ duration: 1.5 }}
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${getPlatformColor(campaign.platform)}`} />
                              <div>
                                <p className="font-medium text-sm">{campaign.name}</p>
                                <p className="text-xs text-muted-foreground">{campaign.platform}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 hidden md:table-cell">
                            {getStatusBadge(campaign.status)}
                          </td>
                          <td className="p-4 text-right text-sm">${campaign.spend.toLocaleString()}</td>
                          <td className="p-4 text-right text-sm hidden sm:table-cell">{campaign.conversions}</td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <span className="font-semibold text-sm">{campaign.roas}x</span>
                              <span className={`text-xs flex items-center ${campaign.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                                {campaign.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {Math.abs(campaign.change)}%
                              </span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AI Actions Feed */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    AI Actions
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <AnimatePresence mode="popLayout">
                    {aiActions.map((action, index) => (
                      <motion.div
                        key={action.action}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          scale: activeAction === index ? 1.02 : 1,
                          borderColor: activeAction === index ? "hsl(192, 100%, 50%)" : "transparent"
                        }}
                        exit={{ opacity: 0, x: -20 }}
                        className={`p-3 rounded-lg border transition-all ${
                          activeAction === index 
                            ? "bg-primary/10 border-primary/50" 
                            : "bg-secondary/30 border-transparent"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            activeAction === index ? "bg-primary text-primary-foreground" : "bg-secondary"
                          }`}>
                            {action.type === "pause" && <Pause className="w-4 h-4" />}
                            {action.type === "budget" && <DollarSign className="w-4 h-4" />}
                            {action.type === "keyword" && <Target className="w-4 h-4" />}
                            {action.type === "creative" && <BarChart3 className="w-4 h-4" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{action.action}</p>
                            <p className="text-xs text-muted-foreground truncate">{action.campaign}</p>
                          </div>
                          <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                            <Clock className="w-3 h-3" />
                            {action.time}
                          </span>
                        </div>
                        {activeAction === index && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3 }}
                            className="h-0.5 bg-primary/50 rounded-full mt-3"
                          />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                {/* Summary */}
                <div className="p-4 border-t border-border bg-secondary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-sm text-muted-foreground">24 actions today</span>
                    </div>
                    <span className="text-xs text-primary font-medium">View all →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div 
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div>
                <p className="text-2xl font-bold font-display text-gradient">$142K</p>
                <p className="text-xs text-muted-foreground">Revenue This Month</p>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div>
                <p className="text-2xl font-bold font-display text-gradient">3.8x</p>
                <p className="text-xs text-muted-foreground">Blended ROAS</p>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div>
                <p className="text-2xl font-bold font-display text-gradient">-62%</p>
                <p className="text-xs text-muted-foreground">Cost Per Acquisition</p>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div>
                <p className="text-2xl font-bold font-display text-gradient">98.7%</p>
                <p className="text-xs text-muted-foreground">AI Uptime</p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
