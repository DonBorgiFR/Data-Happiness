import { Github, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function AuthorProfile() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="mt-20 mb-4 max-w-2xl mx-auto"
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img 
            src="/logo.jpeg" 
            alt="BFR Logo" 
            className="relative w-16 h-16 rounded-full shadow-[0_4px_20px_rgba(120,155,136,0.15)] object-cover border border-brand-100/50" 
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute inset-0 bg-brand-50 rounded-full items-center justify-center text-brand-600 font-bold text-xl border border-brand-100">
            BFR
          </div>
        </div>
        
        <div className="space-y-1.5">
          <h4 className="font-bold text-brand-900 text-[17px] tracking-tight">Borja Félix Rojas</h4>
          <p className="text-brand-600/70 text-[11px] font-bold tracking-[0.25em] uppercase">
            Ingeniero de Gestión & Data Analytics
          </p>
        </div>

        <p className="text-earth-800/60 text-[14.5px] leading-relaxed italic font-medium">
          "Traduciendo sistemas complejos y datos puros en resiliencia y humanidad. Porque toda optimización sirve a un único fin: construir un entorno organizativo que inspire un futuro mejor."
        </p>

        <div className="flex gap-5 pt-3">
          <a href="https://www.linkedin.com/in/borjafelixrojas/" target="_blank" rel="noopener noreferrer" className="text-earth-800/30 hover:text-brand-500 hover:-translate-y-0.5 transition-all duration-300" title="LinkedIn">
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
          <a href="https://borjafelixrojas.odoo.com/" target="_blank" rel="noopener noreferrer" className="text-earth-800/30 hover:text-brand-500 hover:-translate-y-0.5 transition-all duration-300" title="Web Personal">
            <Globe className="w-[18px] h-[18px]" />
          </a>
          <a href="https://github.com/DonBorgiFR" target="_blank" rel="noopener noreferrer" className="text-earth-800/30 hover:text-brand-500 hover:-translate-y-0.5 transition-all duration-300" title="GitHub">
            <Github className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
