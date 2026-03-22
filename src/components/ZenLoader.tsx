import { motion } from 'framer-motion';

export function ZenLoader() {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-4 h-[22rem] flex flex-col items-center justify-center gap-8 glass-card">
      <div className="relative flex items-center justify-center mt-4">
        {/* Breathing Aura */}
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.05, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-28 bg-brand-500 rounded-full blur-2xl"
        />
        
        {/* Core Bubble */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-20 h-20 bg-surface-card backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(120,155,136,0.2)] border border-brand-100 flex items-center justify-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 rounded-full border border-dashed border-brand-500/50"
          />
        </motion.div>
      </div>
      
      <div className="flex flex-col items-center text-center mt-4 mb-4">
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-brand-900 font-bold tracking-[0.3em] text-[11px] uppercase"
        >
          Respira profundo
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-earth-800/60 text-sm mt-3 font-medium italic"
        >
          Conectando con el pulso humano...
        </motion.p>
      </div>
    </div>
  );
}
