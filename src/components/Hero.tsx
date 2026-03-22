import { motion } from 'framer-motion';
import { Sun, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full rounded-[2.5rem] overflow-hidden glass-card p-10 md:p-16 mb-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/40 border border-brand-50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent pointer-events-none" />
      <div className="flex-1 space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md text-brand-900 border border-white/40 shadow-sm text-xs font-bold tracking-widest uppercase"
        >
          <Sun className="h-4 w-4 text-brand-500" />
          Hito Sostenible
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-brand-900 leading-[1.15] tracking-tight">
          El 53.3% de la electricidad es <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-accent-400">renovable</span>
        </h2>
        <p className="text-lg text-earth-800/80 max-w-xl leading-relaxed text-balance">
          El 16 de abril de 2025, la red eléctrica nacional funcionó durante nueve horas consecutivas con energía 100% limpia. Un hito que demuestra que vivir en armonía con el entorno es posible.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-2"
        >
          <a 
            href="#hitos"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(120,155,136,0.4)]"
          >
            Descubrir más hitos
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-brand-100 to-white flex items-center justify-center p-1.5 shadow-[0_20px_60px_-15px_rgba(120,155,136,0.3)] z-10 shrink-0"
      >
        <div className="w-full h-full rounded-full bg-white/60 backdrop-blur-xl border border-white flex flex-col items-center justify-center gap-2">
          <span className="text-6xl md:text-7xl font-black text-brand-900 tracking-tighter">9h</span>
          <span className="text-xs font-bold text-brand-600/70 tracking-[0.2em] px-4 text-center">ENERGÍA<br/>LIMPIA</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
