import { Activity, Sparkles, Moon, Sun } from 'lucide-react';
import { Hero } from './components/Hero';
import { StatCard } from './components/StatCard';
import { TrendChart } from './components/TrendChart';
import { SpainMap } from './components/SpainMap';
import { ZenLoader } from './components/ZenLoader';
import { HiddenGems } from './components/HiddenGems';
import { MythsVsFacts } from './components/MythsVsFacts';
import { GlobalRadar } from './components/GlobalRadar';
import { AuthorProfile } from './components/AuthorProfile';
import { mainMetrics as initialMetrics, historicalLifeExpectancy, schoolDropoutRate } from './data/mockData';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchLiveMetrics } from './services/api';

function App() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
      <header className="glass-header px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-brand-900">
          <div className="bg-brand-50 p-2.5 rounded-2xl shadow-sm border border-brand-100">
            <Activity className="h-5 w-5 text-brand-600" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">España Viva</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-xs font-bold tracking-[0.2em] text-brand-600/50 uppercase hidden sm:block">
            El Pulso del Progreso Humano
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-2xl bg-brand-50 hover:bg-brand-100 text-brand-600 transition-colors border border-brand-100"
            title="Modo Noche Zen"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>
      
      <main className="flex-1 p-6 md:p-10 lg:p-12 max-w-[85rem] mx-auto w-full space-y-24">
        <section className="text-center space-y-6 pt-12 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-5xl md:text-7xl font-black text-brand-900 tracking-tighter"
          >
            Bienestar <span className="font-light text-brand-600/80 italic">&</span> Datos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="text-lg md:text-xl text-earth-800/70 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            Explora las métricas de progreso social que demuestran que, día a día, logramos hitos de empatía, salud y sostenibilidad verdaderamente extraordinarios.
          </motion.p>
        </section>

        <Hero />

        <section id="hitos" className="scroll-mt-32">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-brand-400" />
              <h3 className="text-3xl font-bold text-brand-900 tracking-tight">Fichas de Bienestar</h3>
            </div>
            <span className="text-xs tracking-widest font-semibold text-brand-600/50 uppercase">Data Viva 2025</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <ZenLoader />
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

        <HiddenGems />

        <GlobalRadar />

        <MythsVsFacts />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrendChart 
            title="Esperanza de Vida"
            description="Progreso histórico desde 1975 hasta hoy."
            reflectiveText="El salto histórico en nuestra esperanza de vida es una victoria comunitaria. Demuestra la resiliencia de nuestro tejido social y la universalidad de nuestro cuidado sanitario."
            data={historicalLifeExpectancy}
            dataKey="avg"
            xAxisKey="year"
            color="#789b88"
            delay={0.4}
            yAxisDomain={[70, 85]}
          />
          <TrendChart 
            title="Tasa de Abandono Escolar (%)"
            description="El mínimo histórico alcanzado en las últimas dos décadas."
            reflectiveText="La reducción del abandono es nuestro mayor acto de fe con el mañana. Hoy, miles de jóvenes han dejado de quedarse atrás y permanecen en las aulas."
            data={schoolDropoutRate}
            dataKey="value"
            xAxisKey="year"
            color="#c9b183"
            delay={0.6}
            yAxisDomain={[0, 40]}
          />
        </section>

        <section>
          <SpainMap />
        </section>

        <AuthorProfile />
      </main>

      <footer className="mt-12 py-8 text-center text-earth-800/40 text-sm border-t border-brand-50">
        <p>Construido con ❤️ combinando datos del Banco Mundial, OCDE e INE.</p>
        <p className="mt-2 text-[11px] font-bold tracking-widest uppercase">© 2026 Borja Félix Rojas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
