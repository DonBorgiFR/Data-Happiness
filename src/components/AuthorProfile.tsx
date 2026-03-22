import { Github, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function AuthorProfile() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-12 mb-8 relative"
    >
      <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative z-10 border-brand-100/30">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white font-black text-2xl shadow-[0_4px_20px_rgba(120,155,136,0.3)] shrink-0">
              BR
            </div>
            <div>
              <h4 className="font-bold text-brand-900 text-xl md:text-2xl tracking-tight">Borja Félix Rojas</h4>
              <p className="text-brand-600/80 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mt-1.5">
                Data Analytics & Control de Gestión
              </p>
            </div>
          </div>
          <p className="text-earth-800/80 text-[15px] sm:text-[16px] max-w-3xl leading-relaxed italic border-l-2 border-brand-400/50 pl-4 py-1 mx-auto md:mx-0 text-left">
            "No soy solo un analista que mira números desde fuera; soy un Ingeniero de Gestión habituado a bajar al terreno. Mi perfil combina la visión estratégica para planificar con el carácter operativo para asegurar que esa planificación se cumpla día a día."
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-3">
            {['Python', 'Power BI', 'Excel Avanzado (VBA)', 'Ingeniero Civil Industrial'].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-brand-50 text-brand-600 text-[11px] sm:text-xs rounded-full font-bold uppercase tracking-wider border border-brand-100/50">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-row md:flex-col gap-3 shrink-0 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/borjafelixrojas/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-surface hover:bg-brand-50 text-brand-600 transition-all duration-300 border border-brand-100 hover:shadow-md hover:-translate-y-1" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://borjafelixrojas.odoo.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-surface hover:bg-brand-50 text-brand-600 transition-all duration-300 border border-brand-100 hover:shadow-md hover:-translate-y-1" title="Web Personal">
            <Globe className="w-5 h-5" />
          </a>
          <a href="https://github.com/DonBorgiFR" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-surface hover:bg-brand-50 text-brand-600 transition-all duration-300 border border-brand-100 hover:shadow-md hover:-translate-y-1" title="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
