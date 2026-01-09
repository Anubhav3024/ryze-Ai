import { motion } from "framer-motion";
import { Calendar, Clock, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { useState } from "react";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export function CalendarPreview() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const currentDate = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pick Your Time
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Choose a <span className="text-gradient">Convenient Slot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select a time that works best for you. All times are shown in your
            local timezone.
          </p>
        </AnimatedSection>

        <motion.div
          className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Timezone Info */}
          <div className="flex items-center justify-center gap-6 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Timezone:</span>
              <span className="font-medium">{timezone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">30 minutes</span>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Date Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Select Date
              </h3>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-muted-foreground py-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNum = i - 2; // Start from day 1
                  const isCurrentMonth = dayNum >= 1 && dayNum <= 31;
                  const isToday = dayNum === currentDate.getDate();
                  const isAvailable =
                    dayNum > currentDate.getDate() &&
                    dayNum <= currentDate.getDate() + 14;

                  return (
                    <motion.button
                      key={i}
                      disabled={!isAvailable}
                      className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                        isToday
                          ? "bg-primary/20 text-primary border-2 border-primary"
                          : isAvailable
                          ? "bg-background hover:bg-primary/10 hover:border-primary border-2 border-border"
                          : "bg-transparent text-muted-foreground/30 cursor-not-allowed"
                      }`}
                      whileHover={isAvailable ? { scale: 1.05 } : {}}
                      whileTap={isAvailable ? { scale: 0.95 } : {}}
                    >
                      {isCurrentMonth ? dayNum : ""}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Available Times
              </h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {timeSlots.map((slot, index) => (
                  <motion.button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSlot === slot
                        ? "bg-primary text-primary-foreground"
                        : "bg-background hover:bg-primary/10 border-2 border-border hover:border-primary"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Earliest Available Highlight */}
          <motion.div
            className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">
                ⚡ Earliest available:
              </span>{" "}
              Tomorrow at 9:00 AM
            </p>
          </motion.div>

          {/* Reschedule Note */}
          <motion.p
            className="text-center text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            📅 Need to reschedule? No problem — you can change your booking
            anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
