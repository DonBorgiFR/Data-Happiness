# España Viva - Data & Happiness Dashboard

Visor interactivo de datos positivos de España construido con React, Vite, Tailwind CSS, Recharts, React Simple Maps y Framer Motion. 
El objetivo del proyecto es visibilizar métricas de progreso humano y bienestar.

## Estado Actual del Proyecto (Marzo 2026)

El proyecto ha completado la **Fase 2** exitosamente. Todos los hitos planificados han sido implementados:

### Funcionalidades Implementadas

- **Core Dashboard**: Tarjetas estáticas y modulares para presentar KPIs cruciales (Salud, Empleo, Energía Renovable, Infraestructura...)
- **Historical Trend Charts**: Gráficos de tendencias históricas (Esperanza de Vida, Tasa de Abandono Escolar) con `recharts`
- **Mapa Autonómico Interactivo**: Mapa de coropletas con TopoJSON de las CCAA de España (`react-simple-maps`)
- **Conexión Real con APIs del INE**: Datos vivos de empleo, energías renovables, esperanza de vida y abandono escolar
- **Automated Good News Feed**: Carrusel de noticias positivas basadas en datos del INE
- **User Gamification**: Sistema de logros y recompensas con persistencia en localStorage
- **UI/UX Premium**: Diseño "Glassmorphism", animaciones con Framer Motion, iconos de `lucide-react`

### Stack Tecnológico

- **Frontend**: React 19 + Vite 8
- **Estilos**: Tailwind CSS 4 + clsx + tailwind-merge
- **Visualización**: Recharts, React Simple Maps, D3-Scale
- **Animaciones**: Framer Motion 12
- **Datos**: API JSON del INE (INEbase)
- **Icons**: Lucide React

### APIs del INE Integradas

| Tabla | Descripción |
|-------|-------------|
| 65349 | EPA - Empleo y Paro por provincia |
| 67411 | Energías Renovables (% consumo final) |
| 1414 | Esperanza de Vida al nacimiento |
| 41403 | Abandono Educativo Temprano |

### Sistema de Logros

| Logro | Requisito |
|-------|-----------|
| 🏆 Bienvenido | Primera visita |
| 👁 Explorador Curioso | Ver todas las secciones |
| ❤️ Amante de los Datos | Explorar 5+ métricas |
| 📚 Lector Aplicado | 2+ minutos en la app |
| 🎯 Seguidor de Tendencias | Ver gráficos históricos |
| ⚡ Explorador del Mapa | Interactuar con el mapa |

## Scripts Disponibles

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo (localhost:5173)
npm run build      # Build de producción
npm run preview    # Previsualizar build
npm run lint       # Verificar código
```

## Estructura del Proyecto

```
data-happiness/
├── src/
│   ├── components/       # Componentes React
│   │   ├── GoodNewsFeed.tsx
│   │   ├── AchievementNotification.tsx
│   │   └── ProgressPanel.tsx
│   ├── hooks/            # Custom hooks
│   │   └── useGamification.ts
│   ├── services/         # API calls
│   │   └── api.ts
│   ├── data/             # Datos mock y tipos
│   │   └── mockData.ts
│   └── App.tsx           # Componente principal
├── public/               # Assets estáticos
│   └── spain-ccaa.json   # GeoJSON Comunidades Autónomas
└── package.json
```

## Licencia

© 2026 Borja Félix Rojas. Todos los derechos reservados.

---

## Próxima Sesión: Revisión de Paneles

Antes de continuar con nuevas funcionalidades, revisar conjuntamente:

1. **Estilo Visual**: ¿Los paneles siguen la identidad "Glassmorphism" y paleta de colores consistente?
2. **Calidad de Datos**: ¿La información mostrada es precisa y está actualizada?
3. **Asertividad**: ¿Los mensajes y métricas comunican efectivamente el progreso positivo?
4. **UX/UI**: ¿Las animaciones y transiciones mejoran la experiencia?
5. **Gamification**: ¿Los logros se unlockean correctamente?

**Componentes a revisar:**
- StatCard (fichas de bienestar)
- GoodNewsFeed (carrusel de noticias)
- TrendChart (gráficos históricos)
- SpainMap (mapa interactivo)
- AchievementNotification / ProgressPanel (gamification)
