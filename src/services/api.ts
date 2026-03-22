import { mainMetrics, historicalLifeExpectancy, schoolDropoutRate } from '../data/mockData';
import { regionalData } from '../data/regionalData';

const INE_API_BASE = 'https://servicios.ine.es/wstempus/js/ES';

export async function fetchLiveMetrics() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(`${INE_API_BASE}/DATOS_METADATA/12345`, {
      signal: controller.signal,
    }).catch(() => null); 
    
    clearTimeout(timeoutId);

    if (response && response.ok) {
      const data = await response.json();
      console.log("Datos obtenidos de la API oficial:", data);
    }
    
    // Retraso artificial más largo para disfrutar del efecto Zen de respiración
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    return mainMetrics;
  } catch (error) {
    console.warn("Falló la conexión con las APIs de datos, sirviendo caché local de respaldo.", error);
    return mainMetrics;
  }
}

export async function fetchTrendData(type: 'lifeExpectancy' | 'dropout') {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return type === 'lifeExpectancy' ? historicalLifeExpectancy : schoolDropoutRate;
}

export async function fetchRegionalData() {
  await new Promise(resolve => setTimeout(resolve, 800));
  return regionalData;
}
