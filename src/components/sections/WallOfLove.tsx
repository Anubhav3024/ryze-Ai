import { motion } from "framer-motion";
import { Star, Heart, MessageCircle, Repeat2, ExternalLink } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";

const testimonials = [
  {
    id: 1,
    type: "featured",
    name: "Roger Dunn",
    role: "Global Performance Lead",
    company: "Rivert",
    platform: "G2",
    platformColor: "bg-orange-500",
    avatar: "RD",
    quote: "We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.",
    rating: 5,
  },
  {
    id: 2,
    type: "twitter",
    name: "Gabriela K.",
    handle: "@gabri_isleia",
    time: "3h",
    platform: "X",
    platformColor: "bg-foreground",
    avatar: "GK",
    quote: "Our agency does audits for potential clients 5x faster now. Used to take days, now it's like an hour. Way easier to win new business.",
    likes: 102,
    retweets: 2,
    replies: 2,
  },
  {
    id: 3,
    type: "quote",
    name: "Mathilde Biggs",
    role: "CEO",
    company: "MotifDigital Agence",
    quote: "Ryze's AI-driven ads outperform human optimization by a huge margin.",
    stat: "+63%",
    statLabel: "better ROAS after switching to AI agents",
  },
  {
    id: 4,
    type: "linkedin",
    name: "Daniel Amezquita",
    role: "Global Ads Strategy",
    company: "Glava",
    platform: "LinkedIn",
    platformColor: "bg-blue-600",
    avatar: "DA",
    quote: "Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.",
    likes: 245,
    comments: 42,
  },
  {
    id: 5,
    type: "trustpilot",
    name: "Daniel Roser",
    location: "GB • 7 reviews",
    platform: "Trustpilot",
    platformColor: "bg-green-500",
    avatar: "DR",
    quote: "Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget. ROAS up 45%.",
    rating: 5,
  },
  {
    id: 6,
    type: "clutch",
    name: "Elena M.",
    role: "CMO",
    company: "TechFlow",
    platform: "Clutch",
    platformColor: "bg-red-500",
    avatar: "EM",
    quote: "Caught that our conversion tracking was double-counting. We had no idea for like 3 months. Fixed it and everything made way more sense.",
    rating: 5,
  },
  {
    id: 7,
    type: "simple",
    company: "Speedy",
    quote: "Got the whole team up and running in a day. Super easy to pick up.",
    companyLogo: true,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  if (testimonial.type === "quote") {
    return (
      <motion.div
        className="glass rounded-2xl p-6 md:p-8 col-span-1 md:col-span-2 flex flex-col justify-center"
        whileHover={{ scale: 1.01 }}
      >
        <blockquote className="text-xl md:text-2xl font-medium font-display mb-4">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-muted-foreground">
            {testimonial.name}, {testimonial.role} {testimonial.company}
          </p>
          <div className="glass px-4 py-2 rounded-xl text-center">
            <p className="text-2xl font-bold text-gradient">{testimonial.stat}</p>
            <p className="text-xs text-muted-foreground">{testimonial.statLabel}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (testimonial.type === "simple") {
    return (
      <motion.div
        className="glass rounded-2xl p-6 flex flex-col justify-between"
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-xs font-bold">
            S
          </div>
          <span className="font-medium text-sm">{testimonial.company}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="glass rounded-2xl p-6 flex flex-col"
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            {testimonial.type === "twitter" ? (
              <p className="text-xs text-muted-foreground">
                {testimonial.handle} · {testimonial.time}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                {testimonial.role} {testimonial.company && `@ ${testimonial.company}`}
                {testimonial.location}
              </p>
            )}
          </div>
        </div>
        {testimonial.platform && (
          <div className={`w-6 h-6 rounded ${testimonial.platformColor} flex items-center justify-center`}>
            <span className="text-[10px] font-bold text-white">
              {testimonial.platform === "X" ? "𝕏" : testimonial.platform.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Quote */}
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
        {testimonial.quote}
      </p>

      {/* Rating or Engagement */}
      {testimonial.rating && <StarRating count={testimonial.rating} />}
      
      {testimonial.type === "twitter" && (
        <div className="flex items-center gap-6 text-muted-foreground text-xs">
          <span className="flex items-center gap-1 hover:text-primary cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            {testimonial.replies}
          </span>
          <span className="flex items-center gap-1 hover:text-success cursor-pointer">
            <Repeat2 className="w-4 h-4" />
            {testimonial.retweets}
          </span>
          <span className="flex items-center gap-1 hover:text-destructive cursor-pointer">
            <Heart className="w-4 h-4" />
            {testimonial.likes}
          </span>
        </div>
      )}

      {testimonial.type === "linkedin" && (
        <div className="flex items-center gap-4 text-muted-foreground text-xs">
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4 fill-blue-500 text-blue-500" />
            {testimonial.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            {testimonial.comments} comments
          </span>
        </div>
      )}
    </motion.div>
  );
}

export function WallOfLove() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Wall of Love
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real marketers. See why teams love Ryze.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <StaggerItem 
              key={testimonial.id}
              className={testimonial.type === "quote" ? "md:col-span-2" : ""}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 py-6 border-y border-border overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-muted-foreground">
                <span className="font-bold">2000+ CLIENTS</span>
                <span>•</span>
                <span className="font-bold">700+ AGENCIES</span>
                <span>•</span>
                <span className="font-bold">23+ COUNTRIES</span>
                <span>•</span>
                <span className="font-bold text-primary">$500M+ AD SPEND MANAGED</span>
                <span>•</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
