import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { motion, AnimatePresence } from 'framer-motion';
import { regionalData, getRegionalValue } from '../data/regionalData';

const geoUrl = '/spain-ccaa.json';

const colorScale = scaleQuantize<string>()
  .domain([81, 85]) // Rango aproximado de esperanza de vida regional
  .range([
    '#fef08a', // yellow-200
    '#67e8f9', // cyan-300
    '#38bdf8', // light-blue-400
    '#3b82f6', // blue-500
    '#4f46e5', // indigo-600
  ]);

export function SpainMap() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipSub, setTooltipSub] = useState('');
  const [tooltipVal, setTooltipVal] = useState<number | null>(null);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 md:p-8 relative flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">España por Comunidades</h3>
        <p className="text-slate-600 mb-6">Explora el índice de bienestar general (simulado mediante esperanza de vida y otros factores) por Comunidad Autónoma. Pasa el cursor sobre el mapa para descubrir los detalles.</p>
        
        <div className="min-h-[150px] flex items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <AnimatePresence mode="wait">
            {tooltipContent ? (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center"
              >
                <h4 className="text-xl font-bold text-brand-600">{tooltipContent}</h4>
                <div className="text-3xl font-extrabold text-slate-900 my-2">
                  {tooltipVal} <span className="text-sm font-medium text-slate-500">puntos</span>
                </div>
                <p className="text-sm text-slate-600">{tooltipSub}</p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-400 text-sm font-medium"
              >
                Pasa el cursor sobre una región
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[400px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 2200,
            center: [-3.5, 39.5] // Centro de la península ibérica
          }}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const name = geo.properties.NAME_1;
                const value = getRegionalValue(name);
                const regionInfo = regionalData.find(d => d.name === name);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(value) || '#e2e8f0'}
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none', transition: 'all 250ms' },
                      hover: { fill: '#ec4899', outline: 'none', cursor: 'pointer', transform: 'translateY(-2px)' },
                      pressed: { fill: '#be185d', outline: 'none' },
                    }}
                    onMouseEnter={() => {
                      setTooltipContent(name);
                      setTooltipVal(value);
                      setTooltipSub(regionInfo?.description || '');
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                      setTooltipVal(null);
                      setTooltipSub('');
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </motion.div>
  );
}
