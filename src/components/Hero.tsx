import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full rounded-3xl overflow-hidden glass-card p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-brand-50 to-orange-50/50"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100/50 text-brand-900 border border-brand-200/50 shadow-sm text-sm font-semibold">
          <Sun className="h-4 w-4 text-brand-500" />
          Hito Histórico 2025
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          El 53.3% de la electricidad es <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">renovable</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-xl">
          El 16 de abril de 2025, la red eléctrica nacional funcionó durante nueve horas consecutivas con energía 100% limpia. Un ejemplo mundial de transición energética.
        </p>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-brand-400 to-accent-400 flex items-center justify-center p-1 shadow-2xl shadow-brand-500/20"
      >
        <div className="w-full h-full rounded-full glass flex flex-col items-center justify-center">
          <span className="text-5xl md:text-6xl font-black text-brand-900">9h</span>
          <span className="text-sm font-medium text-brand-700 tracking-wider">100% LIMPIA</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
