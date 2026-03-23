import { motion } from 'framer-motion';
import { Sparkle, HeartHandshake, ShieldCheck, Smile } from 'lucide-react';

const gems = [
  {
    title: 'Solidaridad hasta el final',
    text: 'El 14% de las personas que fallecen por eutanasia deciden ser donantes de órganos, logrando salvar y dar una segunda oportunidad a 643 pacientes solo en 2025. Una empatía que nos mantiene como líderes mundiales tras 34 años.',
    icon: HeartHandshake,
  },
  {
    title: 'El escudo contra la soledad',
    text: 'A diferencia de Europa (con un 32% de ancianos solos), en España solo el 23% de nuestros mayores de 65 años vive en soledad. El 93% de los ciudadanos confía plenamente en tener a alguien a quien recurrir en caso de necesidad.',
    icon: Sparkle,
  },
  {
    title: 'Tranquilidad ciudadana y paz',
    text: 'A pesar del ruido mediático o el alarmismo habitual, el 80% de la población se siente totalmente segura al caminar a solas por la noche, consolidando nuestros espacios públicos como unos de los más apacibles del continente.',
    icon: ShieldCheck,
  },
  {
    title: 'El mayor incremento de felicidad',
    text: 'España ha registrado el mayor aumento de felicidad en el mundo desde 2011, alcanzando a un 72% de la población que se declara abiertamente feliz con su estilo de vida, sus lazos y su longevidad sin igual.',
    icon: Smile,
  }
];

export function HiddenGems() {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h3 className="text-3xl md:text-4xl font-black text-brand-900 tracking-tight">Lo que el ruido oculta</h3>
        <p className="text-earth-800/70 max-w-2xl leading-relaxed">
          Cuatro verdades silenciosas sobre nuestra sociedad que suelen pasar desapercibidas, extraídas de los últimos balances nacionales. Datos que abrazan el alma.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gems.map((gem, index) => {
          const Icon = gem.icon;
          return (
            <motion.div
              key={gem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-surface-card backdrop-blur-lg rounded-[2rem] p-8 md:p-10 border border-brand-50 hover:shadow-[0_10px_30px_rgba(120,155,136,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 ease-out"
            >
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-[1.5rem] bg-brand-100/50 text-brand-600 shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-brand-900 tracking-tight">{gem.title}</h4>
                  <p className="text-earth-800/80 leading-relaxed text-[15px]">
                    {gem.text}
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
