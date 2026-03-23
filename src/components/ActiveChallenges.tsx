import { motion } from 'framer-motion';
import { Sprout, Brain, Home, FlaskConical } from 'lucide-react';

const challenges = [
  {
    title: 'Salud Mental y Ansiedad',
    problem: 'El ritmo de vida ha incrementado drásticamente los casos de estrés y ansiedad, afectando especialmente a los jóvenes.',
    action: 'Creciente desestigmatización comunitaria, aumento progresivo de plazas de psicología y campañas para priorizar el cuidado preventivo.',
    icon: Brain,
  },
  {
    title: 'El Coste de Investigar',
    problem: 'La ciencia y la investigación aún representan un porcentaje tímido del presupuesto general si nos comparamos con otros gigantes globales.',
    action: 'Esfuerzos recientes aumentan las becas y la inversión en I+D. Entender este enorme coste nos da el contexto vital para exigir y apoyar la ciencia.',
    icon: FlaskConical,
  },
  {
    title: 'Acceso y Coste de Vida',
    problem: 'La emancipación tardía y el alto coste de la vivienda generan frustración vital y dificultan la creación de nuevas redes familiares.',
    action: 'Surgen cooperativas de cesión de uso y nuevas medidas comunitarias. El contexto europeo nos insta a importar colaboraciones público-privadas exitosas.',
    icon: Home,
  },
  {
    title: 'Transición Ecológica Práctica',
    problem: 'Fenómenos extremos como la sequía y el cambio de temperaturas amenazan la estabilidad de nuestro ecosistema tradicional y la agricultura.',
    action: 'La adaptación hídrica y la diversificación energética están en marcha. Nuestra resiliencia fuerza día a día un modelo social más cauteloso.',
    icon: Sprout,
  }
];

export function ActiveChallenges() {
  return (
    <section className="my-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 px-4">
        <h3 className="text-3xl md:text-5xl font-black text-brand-900 tracking-tight">Retos Vivientes</h3>
        <p className="text-earth-800/80 max-w-2xl text-lg leading-relaxed">
          El progreso no es la ausencia de problemas, sino la voluntad de afrontarlos. Estos son los retos donde aún queda mucho por hacer, pero donde ya estamos invirtiendo inmensos recursos sociales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {challenges.map((challenge, index) => {
          const Icon = challenge.icon;
          return (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-brand-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-brand-300 transition-all duration-500"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-5 border-b border-brand-100/50 pb-5">
                  <div className="p-4 rounded-[1.5rem] bg-earth-100/80 text-earth-700 shrink-0 group-hover:scale-110 group-hover:bg-brand-100 group-hover:text-brand-600 transition-all duration-500">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-900 tracking-tight">{challenge.title}</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-earth-50/50 p-5 rounded-3xl border border-earth-100/50">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-earth-500 mb-2 block">El Impacto Actual</span>
                    <p className="text-earth-800 leading-relaxed text-[15px]">{challenge.problem}</p>
                  </div>
                  <div className="bg-brand-50/50 p-5 rounded-3xl border border-brand-100/50">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-600 mb-2 block">La Acción Colectiva</span>
                    <p className="text-brand-800 font-medium leading-relaxed text-[15px]">{challenge.action}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
