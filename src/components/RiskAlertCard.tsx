import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ListTodo } from "lucide-react";

export function RiskAlertCard({ riskFlags, actionItems }: { riskFlags: string[]; actionItems: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="space-y-4"
    >
      {/* Risk Flags */}
      <div className="rounded-lg bg-destructive/5 border border-destructive/15 p-5">
        <h3 className="flex items-center gap-2 text-lg font-heading text-destructive mb-3">
          <AlertTriangle size={18} />
          Risk Flags
        </h3>
        <ul className="space-y-2">
          {riskFlags.map((flag, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-body leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
              {flag}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Items */}
      <div className="rounded-lg bg-card border border-border p-5">
        <h3 className="flex items-center gap-2 text-lg font-heading text-primary mb-3">
          <ListTodo size={18} />
          Action Items
        </h3>
        <ul className="space-y-2">
          {actionItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-body leading-relaxed">
              <CheckCircle size={14} className="mt-0.5 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
