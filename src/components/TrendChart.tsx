import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface TrendChartProps {
  title: string;
  description: string;
  reflectiveText?: string;
  data: any[];
  dataKey: string;
  xAxisKey: string;
  color?: string;
  delay?: number;
  yAxisDomain?: [number | 'dataMin' | 'auto', number | 'dataMax' | 'auto'];
}

export function TrendChart({ 
  title, 
  description, 
  reflectiveText,
  data, 
  dataKey, 
  xAxisKey, 
  color = "#789b88", 
  delay = 0,
  yAxisDomain = ['auto', 'auto']
}: TrendChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="glass-card p-6 md:p-8 w-full flex flex-col"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-brand-900 tracking-tight">{title}</h3>
        <p className="text-earth-800/60 font-medium mt-1">{description}</p>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-b100)" />
            <XAxis 
              dataKey={xAxisKey} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--e800)', fontSize: 12, opacity: 0.6 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--e800)', fontSize: 12, opacity: 0.6 }} 
              domain={yAxisDomain}
              dx={-10}
            />
            <Tooltip
              contentStyle={{ 
                borderRadius: '16px', 
                border: '1px solid var(--color-b100)', 
                backgroundColor: 'var(--surface-card)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                color: 'var(--e800)'
              }}
              cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '5 5', opacity: 0.5 }}
              itemStyle={{ fontWeight: 800, color: '#2c3f35', fontSize: '18px' }}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={4}
              fillOpacity={1} 
              fill={`url(#color-${dataKey})`} 
              activeDot={{ r: 7, strokeWidth: 0, fill: color }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {reflectiveText && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 1 }}
          className="mt-8 p-5 rounded-3xl bg-brand-50/60 border border-brand-100 flex flex-col sm:flex-row items-center sm:items-start gap-4"
        >
          <div className="text-3xl hidden sm:block">🌱</div>
          <p className="text-[15px] text-[#3d3831]/80 italic leading-relaxed sm:text-left text-center">
            "{reflectiveText}"
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
