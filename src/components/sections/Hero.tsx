import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, TrendingUp, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const platforms = [
  { name: "Google Ads", icon: "🔍" },
  { name: "Meta", icon: "📘" },
  { name: "LinkedIn", icon: "💼" },
  { name: "Reddit", icon: "🔴" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "Perplexity", icon: "✨" },
];

const stats = [
  { label: "Average ROAS Increase", value: 63, suffix: "%", prefix: "+", icon: TrendingUp },
  { label: "Time Saved on Ads", value: 90, suffix: "%", prefix: "-", icon: Clock },
  { label: "Faster Optimization", value: 24, suffix: "/7", prefix: "", icon: Zap },
];

function AnimatedCounter({ value, suffix = "", prefix = "+" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-gradient">
      {prefix}{count}{suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by 500+ agencies worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 animate-slide-up">
            AI That Runs & Optimizes
            <br />
            <span className="text-gradient">Your Paid Ads</span>
            <br />
            Automatically
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Increase ROI and save hours every day with automated cross-platform 
            ad management powered by advanced AI optimization.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Book a Demo
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2" size={18} />
              See It in Action
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">Works with:</span>
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="glass px-4 py-2 rounded-lg flex items-center gap-2 hover:border-primary/50 transition-colors duration-300"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <span className="text-xl">{platform.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{platform.name}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold font-display mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || "+"} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
