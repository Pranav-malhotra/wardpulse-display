import { motion } from "framer-motion";
import { Pill, FlaskConical, Activity, ArrowRightLeft, StickyNote, Clock } from "lucide-react";
import type { TimelineEvent } from "@/data/mockPatient";

const typeConfig: Record<string, { icon: React.ElementType; color: string }> = {
  medication: { icon: Pill, color: "bg-success/15 text-success" },
  test: { icon: FlaskConical, color: "bg-primary/15 text-primary" },
  vitals: { icon: Activity, color: "bg-warning/15 text-warning" },
  handoff: { icon: ArrowRightLeft, color: "bg-accent/20 text-accent" },
  note: { icon: StickyNote, color: "bg-muted text-muted-foreground" },
};

export function TreatmentTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-lg bg-card border border-border p-8"
    >
      <h3 className="flex items-center gap-2 text-xl font-heading text-foreground mb-8">
        <Clock size={20} className="text-primary" />
        Treatment Timeline
      </h3>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max">
          {events.map((event, i) => {
            const config = typeConfig[event.type] || typeConfig.note;
            const Icon = config.icon;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                className="flex flex-col items-center gap-3 min-w-[160px] max-w-[180px]"
              >
                <div className={`rounded-full p-3 ${config.color}`}>
                  <Icon size={18} />
                </div>
                <span className="text-xs font-body font-medium text-muted-foreground">{event.time}</span>
                <span className="text-xs font-body text-center text-foreground/80 leading-snug font-medium">
                  {event.label}
                </span>
                {event.detail && (
                  <span className="text-[11px] font-body text-center text-muted-foreground leading-snug">
                    {event.detail}
                  </span>
                )}
                {i < events.length - 1 && (
                  <div className="absolute" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Connecting line */}
        <div className="relative mt-[-80px] mx-[85px] h-px bg-border" style={{ width: `calc(${events.length} * 168px - 168px)` }} />
      </div>
    </motion.div>
  );
}
