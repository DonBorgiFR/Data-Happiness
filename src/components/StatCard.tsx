import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  suffix?: string;
  trend: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  delay?: number;
}

export function StatCard({ 
  title, 
  value, 
  suffix, 
  trend, 
  description, 
  icon: Icon, 
  color, 
  bg,
  delay = 0
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-2xl ${bg} ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
          {trend}
        </span>
      </div>
      
      <div>
        <h3 className="text-slate-500 font-medium">{title}</h3>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{value}</span>
          {suffix && <span className="text-xl font-semibold text-slate-500">{suffix}</span>}
        </div>
      </div>
      
      <p className="text-sm text-slate-600 leading-relaxed mt-auto border-t border-slate-100 pt-4">
        {description}
      </p>
    </motion.div>
  );
}
