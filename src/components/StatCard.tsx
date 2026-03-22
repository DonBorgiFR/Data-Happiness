import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  suffix?: string;
  trend: string;
  description: string;
  educationalContext?: string;
  backTitle?: string;
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
  educationalContext,
  backTitle,
  icon: Icon, 
  color, 
  bg,
  delay = 0
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="relative h-[22rem] perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-[800ms] ease-out-expo"
        animate={{ rotateY: isHovered ? 180 : 0 }}
      >
        {/* Front (Data) */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 md:p-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className={`p-4 rounded-[1.25rem] ${bg} ${color}`}>
              <Icon className="h-7 w-7" />
            </div>
            <span className="text-xs font-semibold text-brand-600 bg-brand-50/80 backdrop-blur-md border border-brand-100 px-3.5 py-1.5 rounded-full tracking-wide">
              {trend}
            </span>
          </div>
          
          <div className="mt-4">
            <h3 className="text-brand-900/50 font-semibold text-sm tracking-widest uppercase mb-1.5">{title}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-brand-900 tracking-tighter">{value}</span>
              {suffix && <span className="text-xl font-bold text-brand-900/40 ml-1">{suffix}</span>}
            </div>
          </div>
          
          <p className="text-[15px] text-earth-800/70 leading-relaxed mt-auto border-t border-brand-50 pt-5">
            {description}
          </p>
        </div>

        {/* Back (Educational Context) */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 md:p-8 flex flex-col justify-center items-center text-center rotate-y-180 bg-brand-50/50">
          <Icon className="h-10 w-10 text-brand-500/20 mb-6" />
          <h4 className="text-brand-900 font-bold mb-3 tracking-wide">{backTitle || "Reflexión"}</h4>
          <p className="text-[15px] text-earth-800/80 leading-relaxed">
            {educationalContext || "Cada dato cuenta la historia de un logro humano extraordinario."}
          </p>
          <span className="text-[11px] text-brand-600/50 mt-8 uppercase tracking-[0.2em] font-bold">
            Ficha Educativa
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
