import { motion } from 'framer-motion';
import { modernRemedies } from '../data/mockData';
import type { LucideIcon } from 'lucide-react';
import { Activity, Users, Wind, Utensils, BookOpen, Moon, BrainCircuit, Smile, Compass, Heart } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Users,
  Wind,
  Utensils,
  BookOpen,
  Moon,
  BrainCircuit,
  Smile,
  Compass,
  Heart
};

export function ModernRemedies() {
  return (
    <section className="my-24">
      <div className="flex flex-col items-center text-center space-y-5 mb-16 px-4">
        <div className="flex items-center gap-3 justify-center mb-2">
          <Heart className="h-6 w-6 text-brand-500" />
          <h3 className="text-3xl md:text-5xl font-black text-brand-900 tracking-tight">Antídotos Biológicos</h3>
        </div>
        <p className="text-earth-800/80 max-w-3xl text-lg leading-relaxed">
          Nuestra biología no ha cambiado, pero el entorno sí. Estos no son consejos, son <strong>imperativos vitales</strong> respaldados por la ciencia para recuperar la soberanía sobre tu cuerpo y tu mente en un mundo que intenta fragmentarlos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {modernRemedies.map((item, index) => {
          const Icon = iconMap[item.iconName] || Heart;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.15, duration: 0.5, ease: "easeOut" }}
              className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-[2rem] p-7 border border-brand-100 hover:shadow-xl hover:border-brand-300 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-brand-50">
                <div className="p-3.5 rounded-[1.2rem] bg-brand-50 text-brand-600 shrink-0 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-[1.15rem] font-bold text-brand-900 leading-tight tracking-tight">{item.remedy}</h4>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-earth-400 block mb-2">La Disfunción Social</span>
                  <p className="text-earth-700 text-[14.5px] leading-relaxed border-l-2 border-earth-200 pl-4 py-1">
                    <strong className="font-bold text-earth-900">{item.evil}:</strong> {item.evilDescription}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-500 block mb-2">{item.remedyLabel}</span>
                  <p className="text-brand-800 text-[14.5px] font-medium leading-relaxed bg-brand-50/60 p-4 rounded-2xl border border-brand-100/50 shadow-sm">
                    {item.remedyDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
