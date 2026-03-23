import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { motion, AnimatePresence } from 'framer-motion';
import { regionalData, getRegionalValue } from '../data/regionalData';

const geoUrl = '/spain-ccaa.json';

interface GeographyProperties {
  NAME_1: string;
  [key: string]: unknown;
}

interface GeographyObject {
  rsmKey: string;
  properties: GeographyProperties;
}

const colorScale = scaleQuantize<string>()
  .domain([81, 87]) 
  .range([
    '#e1e9e3',
    '#b4c9bc',
    '#789b88',
    '#5b7b69',
    '#2c3f35',
  ]);

export function SpainMap() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipSub, setTooltipSub] = useState('');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 md:p-8 relative flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-brand-900 mb-2 tracking-tight">El Mapa Social de España</h3>
        <p className="text-earth-800/70 mb-8 leading-relaxed">
          Nuestra nación vista a través de la lente del bienestar mutuo. Las regiones en tono dorado lideran el Índice Multidimensional de Calidad de Vida absoluto.
        </p>
        
        <div className="min-h-[160px] flex items-center justify-center p-6 bg-brand-50/50 rounded-3xl border border-brand-100 shadow-inner">
          <AnimatePresence mode="wait">
            {tooltipContent ? (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center w-full"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h4 className="text-xl font-bold text-brand-600 tracking-wide">{tooltipContent}</h4>
                  {['Comunidad Foral de Navarra', 'La Rioja', 'País Vasco'].includes(tooltipContent) && (
                    <span className="text-xl" title="Medalla de Oro en IMCV">🥇</span>
                  )}
                </div>
                <p className="text-sm font-medium text-earth-800 leading-relaxed italic border-l-2 border-brand-400 pl-4 text-left">
                  "{tooltipSub}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-brand-900/30 text-sm font-semibold tracking-widest uppercase"
              >
                Explora las regiones
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
            center: [-3.5, 39.5] 
          }}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: GeographyObject[] }) =>
              geographies.map((geo: GeographyObject) => {
                const name = geo.properties.NAME_1;
                const value = getRegionalValue(name);
                const regionInfo = regionalData.find(d => d.name === name);
                const isGolden = ['Comunidad Foral de Navarra', 'La Rioja', 'País Vasco'].includes(name);
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isGolden ? '#eab308' : (colorScale(value) || '#e1e9e3')}
                    stroke="var(--surface-color, #ffffff)"
                    strokeWidth={0.8}
                    style={{
                      default: { outline: 'none', transition: 'all 250ms' },
                      hover: { fill: isGolden ? '#fef08a' : '#c9b183', outline: 'none', cursor: 'pointer', transform: 'translateY(-3px)', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))' },
                      pressed: { fill: '#a89063', outline: 'none' },
                    }}
                    onMouseEnter={() => {
                      setTooltipContent(name);
                      setTooltipSub(regionInfo?.description || '');
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
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
