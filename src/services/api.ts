import { mainMetrics, historicalLifeExpectancy, schoolDropoutRate } from '../data/mockData';
import type { Metric } from '../data/mockData';
import { regionalData } from '../data/regionalData';

const INE_API_BASE = 'https://servicios.ine.es/wstempus/js/ES';

interface INETableResponse {
 COD: string;
 Nombre: string;
 Data: Array<{Fecha: string; Anyo: number; Valor: number}>;
}

async function fetchINEData(tableId: string, tip: string = 'A'): Promise<number | null> {
  try {
    const response = await fetch(`${INE_API_BASE}/DATOS_TABLA/${tableId}?tip=${tip}`, {
      signal: AbortSignal.timeout(8000)
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    const tableData = data as INETableResponse[];
    
    if (tableData && tableData[0]?.Data?.length > 0) {
      const latest = tableData[0].Data[tableData[0].Data.length - 1];
      return latest.Valor;
    }
    
    return null;
  } catch (error) {
    console.warn(`Error fetching INE table ${tableId}:`, error);
    return null;
  }
}

async function fetchEmploymentData(): Promise<{ employed: number; unemployed: number } | null> {
  try {
    const response = await fetch(`${INE_API_BASE}/DATOS_TABLA/65349?nult=2&tip=A`, {
      signal: AbortSignal.timeout(8000)
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const tableData = data as INETableResponse[];
    
    if (tableData && tableData.length > 0) {
      for (const table of tableData) {
        if (table.Nombre?.includes('Ocupados') && table.Data?.length > 0) {
          const employed = table.Data[table.Data.length - 1].Valor;
          
          for (const t of tableData) {
            if (t.Nombre?.includes('Parados') && t.Data?.length > 0) {
              const unemployed = t.Data[t.Data.length - 1].Valor;
              return { employed, unemployed };
            }
          }
        }
      }
    }
    return null;
  } catch {
    return null;
  }
}

export async function fetchLiveMetrics(): Promise<Metric[]> {
  try {
    const [employment, renewableEnergy] = await Promise.all([
      fetchEmploymentData(),
      fetchINEData('67411'),
    ]);

    const metrics: Metric[] = [...mainMetrics];
    
    if (employment) {
      const empIndex = metrics.findIndex(m => m.id === 'employment');
      if (empIndex !== -1) {
        const employedMillions = (employment.employed / 1000).toFixed(1);
        metrics[empIndex] = {
          ...metrics[empIndex],
          value: employedMillions,
          suffix: 'M',
          trend: `EPA ${new Date().toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}`,
          source: 'INE'
        };
      }
    }
    
    if (renewableEnergy !== null) {
      const renIndex = metrics.findIndex(m => m.id === 'energy');
      if (renIndex !== -1) {
        metrics[renIndex] = {
          ...metrics[renIndex],
          value: renewableEnergy.toFixed(1),
          suffix: '%',
          source: 'INE'
        };
      }
    }

    const enriched = metrics.map(m => ({
      ...m,
      source: (m as any).source || 'Datos INE 2024'
    }));

    await new Promise(resolve => setTimeout(resolve, 800));
    return enriched;
  } catch (error) {
    console.warn("Falló la conexión con las APIs de datos, sirviendo caché local de respaldo.", error);
    return mainMetrics;
  }
}

export async function fetchTrendData(type: 'lifeExpectancy' | 'dropout') {
  if (type === 'lifeExpectancy') {
    try {
      const response = await fetch(`${INE_API_BASE}/DATOS_TABLA/1414?tip=A`, {
        signal: AbortSignal.timeout(8000)
      });
      
      if (response.ok) {
        const data = await response.json();
        const tableData = data as INETableResponse[];
        
        if (tableData && tableData[0]?.Data?.length > 0) {
          const formatted: Array<{year: number; men: number; women: number; avg: number}> = [];
          
          for (const table of tableData) {
            if (table.Nombre?.includes('Total')) {
              for (const entry of table.Data) {
                if (entry.Anyo >= 1975 && entry.Anyo <= 2025) {
                  formatted.push({
                    year: entry.Anyo,
                    men: 0,
                    women: 0,
                    avg: entry.Valor
                  });
                }
              }
              break;
            }
          }
          
          if (formatted.length > 0) {
            formatted.sort((a, b) => a.year - b.year);
            return formatted;
          }
        }
      }
    } catch (e) {
      console.warn('Error fetching life expectancy:', e);
    }
    return historicalLifeExpectancy;
  }
  
  if (type === 'dropout') {
    try {
      const response = await fetch(`${INE_API_BASE}/DATOS_TABLA/41403?tip=A`, {
        signal: AbortSignal.timeout(8000)
      });
      
      if (response.ok) {
        const data = await response.json();
        const tableData = data as INETableResponse[];
        
        if (tableData && tableData[0]?.Data?.length > 0) {
          const formatted: Array<{year: number; value: number}> = [];
          
          for (const table of tableData) {
            if (table.Nombre?.includes('Total')) {
              for (const entry of table.Data) {
                if (entry.Anyo >= 2004) {
                  formatted.push({
                    year: entry.Anyo,
                    value: entry.Valor
                  });
                }
              }
              break;
            }
          }
          
          if (formatted.length > 0) {
            formatted.sort((a, b) => a.year - b.year);
            return formatted;
          }
        }
      }
    } catch (e) {
      console.warn('Error fetching dropout rate:', e);
    }
  }
  
  await new Promise(resolve => setTimeout(resolve, 600));
  
  if (type === 'dropout') {
    return schoolDropoutRate;
  }
  return historicalLifeExpectancy;
}

export async function fetchRegionalData() {
  await new Promise(resolve => setTimeout(resolve, 800));
  return regionalData;
}
