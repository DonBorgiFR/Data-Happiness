import { motion } from 'framer-motion';
import { householdBudget, stateFinanceSummary } from '../data/mockData';
import type { LucideIcon } from 'lucide-react';
import { Heart, Activity, BookOpen, Umbrella, FlaskConical, Shield, Home, ArrowUpRight, ArrowDownRight, TrendingDown, TrendingUp, AlertCircle, Minus } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Heart, Activity, BookOpen, Umbrella, FlaskConical, Shield, Home };

export function StateAsHousehold() {
  const sortedBudget = [...householdBudget].sort((a, b) => b.amount - a.amount);

  return (
    <section className="my-32 relative">
      {/* Visual Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-50/20 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="flex flex-col items-center text-center space-y-6 mb-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-100/50 px-6 py-2 rounded-full border border-brand-100 backdrop-blur-sm"
        >
          <span className="text-sm font-black text-brand-600 uppercase tracking-widest">Educación Financiera Social</span>
        </motion.div>
        
        <h3 className="text-5xl md:text-7xl font-black text-brand-900 tracking-tighter max-w-[15ch]">
          Las Cuentas de <span className="text-brand-600 italic">Casa</span>
        </h3>
        
        <p className="text-earth-800/80 max-w-3xl text-lg md:text-xl leading-relaxed text-balance">
          Traducimos los billones del Estado a un presupuesto familiar de <strong>100€</strong> mensuales. Entiende hacia dónde va cada céntimo que aportamos entre todos.
        </p>
      </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-white/95 dark:bg-[var(--household-card)] backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-16 border border-brand-100 shadow-[0_40px_100px_-20px_rgba(30,50,40,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative">
          
          {/* Header Section: Collected vs Spent Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b-[4px] border-dashed border-brand-100/50 pb-16">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-600">
                <ArrowUpRight className="w-4 h-4" />
                <p className="text-[10px] font-black uppercase tracking-widest text-earth-800/60">Total Recaudado</p>
              </div>
              <p className="text-4xl md:text-5xl font-black text-brand-900 tracking-tight">
                {stateFinanceSummary.collected.toFixed(2).replace('.', ',')} <span className="text-brand-400 text-3xl">€</span>
              </p>
              <p className="text-[11px] text-earth-800/60 font-medium pt-1">Impuestos y fondos europeos.</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-brand-600">
                <ArrowDownRight className="w-4 h-4" />
                <p className="text-[10px] font-black uppercase tracking-widest text-earth-800/60">Total Gastado</p>
              </div>
              <p className="text-4xl md:text-5xl font-black text-brand-900 tracking-tight">
                {stateFinanceSummary.spent.toFixed(2).replace('.', ',')} <span className="text-brand-400 text-3xl">€</span>
              </p>
              <p className="text-[11px] text-earth-800/60 font-medium pt-1">Servicios e inversiones de vida.</p>
            </div>

            <div className="bg-brand-50/50 p-6 rounded-[2rem] border border-brand-100 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-rose-500 mb-2">
                <TrendingDown className="w-4 h-4" />
                <p className="text-[10px] font-black uppercase tracking-widest">Diferencia (Déficit)</p>
              </div>
              <p className="text-3xl font-black text-rose-600 tracking-tight">
                {stateFinanceSummary.balance.toFixed(2).replace('.', ',')} <span className="text-rose-400 text-2xl">€</span>
              </p>
              <p className="text-[10px] text-brand-800/50 font-bold uppercase mt-1">Financiado mediante deuda</p>
            </div>
          </div>

          {/* List Section Title */}
          <div className="flex items-center justify-between mb-12">
            <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">Desglose del Monedero</h4>
            <div className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
              <span className="text-[10px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-widest leading-none">Orden: Mayor Inversión</span>
            </div>
          </div>

          {/* Data List */}
          <div className="space-y-10">
            {sortedBudget.map((item, index) => {
              const Icon = iconMap[item.icon] || Home;

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6 md:w-1/2">
                      <div className={`p-4 rounded-2xl ${item.color} text-white shadow-lg shadow-${item.color.split('-')[1]}/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-0.5">
                          <p className="font-black text-lg text-zinc-900 dark:text-zinc-100 leading-tight">{item.category}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium hidden sm:block">Asignación por cada 100€ gastados</p>
                        </div>
                        {item.trendDir && item.trendText && (
                          <div className="flex items-start gap-1.5 opacity-90 pt-1">
                            {item.trendDir === 'up' && <TrendingUp className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />}
                            {item.trendDir === 'down' && <TrendingDown className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />}
                            {item.trendDir === 'alert' && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                            {item.trendDir === 'stable' && <Minus className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />}
                            <span className="text-xs leading-snug font-medium text-zinc-600 dark:text-zinc-400 max-w-[32ch] xl:max-w-[40ch]">
                              {item.trendText}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8 md:w-1/2 justify-between md:justify-end">
                      {/* Stylized Progress Bar */}
                      <div className="flex-1 max-w-[180px] h-4 bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden p-1 shadow-inner relative hidden sm:block">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.amount}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + index * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
                          className={`h-full ${item.color} rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                        </motion.div>
                      </div>
                      
                      <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-black text-zinc-900 dark:text-zinc-100 tabular-nums text-right min-w-[3.5ch]">
                          {item.amount.toFixed(2).replace('.', ',')}
                        </p>
                        <span className="text-xl font-black text-zinc-400 dark:text-zinc-500 italic">€</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle divider */}
                  {index < sortedBudget.length - 1 && (
                    <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/50 mt-10 md:mt-8" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Verification Stamps */}
          <div className="mt-20 pt-10 border-t-4 border-double border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 text-zinc-400 dark:text-zinc-500 uppercase text-[10px] font-black tracking-[0.3em]">
               <div className="w-12 h-12 rounded-full border-4 border-zinc-100 dark:border-zinc-800 flex items-center justify-center font-bold rotate-[-15deg]">PGE</div>
               <div>Verificación Transparente 2026</div>
            </div>
            <p className="text-[11px] font-bold text-zinc-500 dark:text-zinc-500 leading-relaxed text-center md:text-right max-w-xs">
              * Datos calculados proporcionalmente sobre la Obligación Reconocida real del Estado Español.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
