import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, ChevronLeft, ChevronRight, TrendingUp, Users, Heart, Sun, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: 'employment' | 'economy' | 'demography' | 'social' | 'environment';
  metric?: string;
  icon: LucideIcon;
  color: string;
}

const positiveNews: NewsItem[] = [
  {
    id: '1',
    title: 'Récord Histórico de Empleo',
    summary: 'España alcanza los 22,46 millones de personas empleadas, el nivel más alto de la historia.',
    date: 'Ene 2026',
    category: 'employment',
    metric: '22.46M',
    icon: TrendingUp,
    color: 'text-emerald-600',
  },
  {
    id: '2',
    title: 'Crecimiento Superior al Previsto',
    summary: 'El PIB crece un 2,8% en 2025, superando las proyecciones iniciales con demanda interna robusta.',
    date: 'Ene 2026',
    category: 'economy',
    metric: '+2.8%',
    icon: Award,
    color: 'text-amber-600',
  },
  {
    id: '3',
    title: 'Población Migrante Récord',
    summary: 'España supera los 10 millones de habitantes nacidos en el extranjero por primera vez.',
    date: 'Ene 2026',
    category: 'demography',
    metric: '10M+',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    id: '4',
    title: 'Esperanza de Vida en Máximo',
    summary: 'La esperanza de vida aumenta casi siete décimas, alcanzando los 83,77 años en 2023.',
    date: 'Dic 2025',
    category: 'social',
    metric: '83.77 años',
    icon: Heart,
    color: 'text-rose-600',
  },
  {
    id: '5',
    title: 'Energías Renovables Líderes',
    summary: 'Las renovables alcanzan el 56,6% del consumo final bruto de energía, máximo histórico.',
    date: 'Dic 2025',
    category: 'environment',
    metric: '56.6%',
    icon: Sun,
    color: 'text-brand-600',
  },
  {
    id: '6',
    title: 'Tasa de Paro en Mínimo',
    summary: 'El desempleo cae al nivel más bajo de la última década, con fuerte creación de empleo.',
    date: 'Dic 2025',
    category: 'employment',
    metric: '11.4%',
    icon: TrendingUp,
    color: 'text-emerald-600',
  },
  {
    id: '7',
    title: 'Reducción del Abandono Escolar',
    summary: 'El abandono educativo temprano baja al 12,8%, mejorando markedly la formación de los jóvenes.',
    date: 'Nov 2025',
    category: 'social',
    metric: '12.8%',
    icon: Award,
    color: 'text-indigo-600',
  },
  {
    id: '8',
    title: 'Incremento de Natalidad',
    summary: 'La tasa de natalidad muestra signos de recuperación con 320.656 nacimientos en 2023.',
    date: 'Nov 2025',
    category: 'demography',
    metric: '320K',
    icon: Heart,
    color: 'text-rose-600',
  },
];

const categoryLabels: Record<NewsItem['category'], string> = {
  employment: 'Empleo',
  economy: 'Economía',
  demography: 'Demografía',
  social: 'Social',
  environment: 'Medio Ambiente',
};

export function GoodNewsFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % positiveNews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + positiveNews.length) % positiveNews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % positiveNews.length);
  };

  const currentNews = positiveNews[currentIndex];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-100/30 dark:from-[var(--news-bg)] dark:via-[var(--news-card)] border border-brand-100/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent" />
      
      <div className="relative p-8 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-100/60 rounded-xl">
              <Newspaper className="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-900 tracking-tight">Noticias del Progreso</h3>
              <p className="text-sm text-brand-600/60">Datos positivos recientes del INE</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={goToPrev}
              className="p-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 transition-colors"
              aria-label="Noticia anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-brand-600/50 px-2">
              {currentIndex + 1} / {positiveNews.length}
            </span>
            <button
              onClick={goToNext}
              className="p-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-600 transition-colors"
              aria-label="Siguiente noticia"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className="relative min-h-[180px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNews.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-brand-100/60 text-brand-600 rounded-full">
                    {categoryLabels[currentNews.category]}
                  </span>
                  <span className="text-sm text-brand-600/50">{currentNews.date}</span>
                </div>
                <h4 className="text-xl font-bold text-brand-900 leading-tight">
                  {currentNews.title}
                </h4>
                <p className="text-brand-900/70 leading-relaxed">
                  {currentNews.summary}
                </p>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-white/60 border border-brand-100/50 min-w-[140px]">
                <currentNews.icon className={`h-10 w-10 ${currentNews.color} mb-2 dark:brightness-110`} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                <span className="text-2xl font-black text-brand-900">{currentNews.metric}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {positiveNews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-brand-600 w-6'
                  : 'bg-brand-200'
              }`}
              aria-label={`Ir a noticia ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
