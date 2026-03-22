import { Activity } from 'lucide-react';
import { Hero } from './components/Hero';
import { StatCard } from './components/StatCard';
import { TrendChart } from './components/TrendChart';
import { SpainMap } from './components/SpainMap';
import { mainMetrics as initialMetrics, historicalLifeExpectancy, schoolDropoutRate } from './data/mockData';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchLiveMetrics } from './services/api';

function App() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await fetchLiveMetrics();
      setMetrics(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="flex flex-col">
      <header className="glass-header px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-900">
          <Activity className="h-6 w-6 text-brand-500" />
          <h1 className="text-xl font-bold tracking-tight">España Viva</h1>
        </div>
        <div className="text-sm font-medium text-slate-500 hidden sm:block">
          El Pulso del Progreso Humano
        </div>
      </header>
      
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full space-y-12">
        <section className="text-center space-y-4 py-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Data and <span className="text-brand-500">Happiness</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explora las métricas de bienestar social, salud y progreso que demuestran que, día a día, logramos cosas únicas y extraordinarias.
          </motion.p>
        </section>

        <Hero />

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Indicadores de Bienestar</h3>
            <span className="text-sm text-slate-500 font-medium">Actualizado 2025</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              // Loading Skeletons
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="glass-card p-6 h-48 animate-pulse flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="w-12 h-12 bg-slate-200 rounded-2xl" />
                    <div className="w-16 h-6 bg-slate-100 rounded-full" />
                  </div>
                  <div>
                    <div className="w-24 h-4 bg-slate-200 rounded mb-2" />
                    <div className="w-16 h-8 bg-slate-200 rounded" />
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded mt-4" />
                </div>
              ))
            ) : (
              metrics.map((metric, index) => (
                <StatCard 
                  key={metric.id}
                  {...metric}
                  delay={0.1 * index}
                />
              ))
            )}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrendChart 
            title="Esperanza de Vida"
            description="Progreso histórico desde 1975 hasta hoy."
            data={historicalLifeExpectancy}
            dataKey="avg"
            xAxisKey="year"
            color="#0ea5e9"
            delay={0.4}
            yAxisDomain={[70, 85]}
          />
          <TrendChart 
            title="Tasa de Abandono Escolar (%)"
            description="El mínimo histórico alcanzado en las últimas dos décadas."
            data={schoolDropoutRate}
            dataKey="value"
            xAxisKey="year"
            color="#8b5cf6"
            delay={0.6}
            yAxisDomain={[0, 40]}
          />
        </section>

        <section>
          <SpainMap />
        </section>
      </main>

      <footer className="mt-12 py-8 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>Construido con ❤️ usando Vite, React, Tailwind CSS y datos públicos.</p>
      </footer>
    </div>
  );
}

export default App;
