import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";

const metrics = [
  {
    label: "Return on Ad Spend",
    before: "2.1x",
    after: "3.4x",
    change: "+63%",
    positive: true,
  },
  {
    label: "Cost Per Click",
    before: "$4.20",
    after: "$1.68",
    change: "-60%",
    positive: true,
  },
  {
    label: "Time on Ads Weekly",
    before: "20 hrs",
    after: "2 hrs",
    change: "-90%",
    positive: true,
  },
  {
    label: "Conversion Rate",
    before: "2.3%",
    after: "4.1%",
    change: "+78%",
    positive: true,
  },
];

const platformPerformance = [
  { platform: "Google Ads", multiplier: "4.8x", budget: "$12,500", color: "bg-blue-500" },
  { platform: "Meta Ads", multiplier: "3.2x", budget: "$8,200", color: "bg-indigo-500" },
  { platform: "LinkedIn", multiplier: "2.9x", budget: "$5,400", color: "bg-sky-500" },
  { platform: "Reddit", multiplier: "3.6x", budget: "$3,800", color: "bg-orange-500" },
];

export function Analytics() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            See the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real performance data from Ryze-optimized campaigns. 
            Your ads work harder, smarter, and more efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before/After Comparison */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <TrendingUp className="text-primary" />
              Performance Comparison
            </h3>
            
            <div className="space-y-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className={`text-sm font-bold flex items-center gap-1 ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                      {metric.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {metric.change}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Before</span>
                        <span className="font-medium">{metric.before}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/30 rounded-full w-[40%]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-primary">After</span>
                        <span className="font-bold text-primary">{metric.after}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-[85%] group-hover:animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Reallocation Visualization */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
              <TrendingDown className="text-primary rotate-180" />
              Smart Budget Allocation
            </h3>
            
            <div className="space-y-5">
              {platformPerformance.map((platform, index) => (
                <div key={platform.platform} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                      <span className="font-medium">{platform.platform}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{platform.budget}</span>
                      <span className="text-primary font-bold">{platform.multiplier}</span>
                    </div>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${platform.color} rounded-full transition-all duration-1000 group-hover:opacity-80`}
                      style={{ width: `${70 + index * 7}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Monthly Ad Spend</p>
                  <p className="text-2xl font-bold font-display">$29,900</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Blended ROAS</p>
                  <p className="text-2xl font-bold font-display text-gradient">3.8x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
