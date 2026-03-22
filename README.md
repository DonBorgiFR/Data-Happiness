# España Viva - Data & Happiness Dashboard

Visor interactivo de datos positivos de España construido con React, Vite, Tailwind CSS, Recharts, React Simple Maps y Framer Motion. 
El objetivo del proyecto es visibilizar métricas de progreso humano y bienestar.

## Estado Actual del Proyecto (Marzo 2026)
Hemos finalizado el MVP inicial y comenzado la **Fase 2**. Se han completado los siguientes hitos de la arquitectura:
- **Core Dashboard**: Tarjetas estáticas y modulares para presentar KPIs cruciales (Salud, Trasplantes, Empleo, Infraestructura...).
- **Historical Trend Charts**: Integración de gráficos de área (`recharts`) mostrando tendencias históricas (Ej: Esperanza de Vida, Tasa de Abandono Escolar).
- **Mapa Autonómico Interactivo**: Implementación de un mapa interactivo (Coropletas) usando geometrías TopoJSON de las Comunidades Autónomas de España (`react-simple-maps`), con tooltips responsivos.
- **Arquitectura de APIs Dínámicas**: Creación de la capa de servicios (`src/services/api.ts`) con estados de carga simulados (Skeletons) nativos en React, preparando el terreno para las conexiones a fuentes públicas en tiempo real.
- **UI/UX Premium**: Diseño visual *"Glassmorphism"*, escalas de color unificadas para el mapa e iconos de `lucide-react`.

## Próximos Pasos para la Siguiente Sesión (Hoja de Ruta)
El punto de partida para la próxima interacción consiste en retomar los siguientes elementos:
1. **Conexión real de APIs de Datos**: Cambiar la simulación de `fetchLiveMetrics()` por *endpoints* JSON reales del **INE** o de **datos.gob.es**.
2. **Automated Good News Feed**: Implementar un carrusel o listado dinámico de noticias recientes vinculadas al progreso socioeconómico.
3. **User Gamification**: Incluir alertas, seguimientos y pequeñas recompensas de UI para el usuario al explorar ciertos datos históricos.

## Scripts Disponibles
- `npm install`: Instala las dependencias (nota: usa `--legacy-peer-deps` si actualizas dependencias del mapa debido a discrepancias con React 19).
- `npm run dev`: Levantar el entorno de desarrollo Vite.
- `npm run build`: Empaquetado estricto TS + Vite para producción.
