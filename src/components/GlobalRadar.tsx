import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Esperanza Vida',
    España: 84,
    'Media OCDE/UE': 81.7,
    fullMark: 90,
  },
  {
    subject: 'Red de Fibra',
    España: 88,
    'Media OCDE/UE': 70,
    fullMark: 100,
  },
  {
    subject: 'Seguridad Nocturna',
    España: 80,
    'Media OCDE/UE': 74,
    fullMark: 100,
  },
  {
    subject: 'Ancianos Acompañados',
    España: 77,
    'Media OCDE/UE': 68,
    fullMark: 100,
  },
  {
    subject: 'Atracción Talento',
    España: 99.6,
    'Media OCDE/UE': 80,
    fullMark: 100,
  },
];

export function GlobalRadar() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="my-16 glass-card p-8 md:p-12 w-full flex flex-col lg:flex-row items-center gap-12 bg-white/40 dark:bg-[var(--radar-bg)]"
    >
      <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-brand-900 tracking-tight">Radar del Bienestar</h3>
        <p className="text-earth-800/70 leading-relaxed text-[15px]">
          Más allá de nuestras fronteras, los datos revelan fortalezas indiscutibles frente a la media oficial europea y de la OCDE. Desde la penetración digital, pasando por la salud clínica, hasta la potente red emocional invisible que une al país.
        </p>
      </div>
      <div className="w-full lg:w-2/3 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#a0bcae" strokeOpacity={0.3} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-b500)', fontSize: 13, fontWeight: 700 }} />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                backgroundColor: 'var(--surface-card)',
                backdropFilter: 'blur(12px)',
                color: 'var(--e800)',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
              }}
              itemStyle={{ fontWeight: 800, color: 'var(--e800)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Radar name="España" dataKey="España" stroke="#789b88" fill="#789b88" fillOpacity={0.4} strokeWidth={3} />
            <Radar name="Media OCDE/UE" dataKey="Media OCDE/UE" stroke="#c9b183" fill="#c9b183" fillOpacity={0.2} strokeDasharray="5 5" strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
