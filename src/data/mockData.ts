import {
  Heart,
  Sun,
  Users,
  Briefcase,
  Waves,
  Train,
  Ticket,
  HeartHandshake
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Metric {
  id: string;
  title: string;
  value: string;
  suffix: string;
  trend: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  description: string;
  backTitle: string;
  educationalContext: string;
  source?: string;
}

export const mainMetrics: Metric[] = [
  {
    id: 'health',
    title: 'Esperanza de Vida',
    value: '84.01',
    suffix: ' años',
    trend: 'Líder en occidente',
    icon: Heart,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: '1ª en la Unión Europea con 84,01 años de media. El 74% de ciudadanos reporta muy buena salud.',
    backTitle: 'Nuestra Longevidad',
    educationalContext: 'Cuidar de los demás nos alarga la vida. Un sistema sanitario de excelencia, sumado a nuestras fuertes cohesiones locales.',
  },
  {
    id: 'employment',
    title: 'Récord de Empleo',
    value: '21.3',
    suffix: ' M',
    trend: 'Récord histórico (Dic 2024)',
    icon: Briefcase,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: 'Superamos los 21,3 millones de personas trabajando impulsando activamente la economía.',
    backTitle: 'El Esfuerzo Común',
    educationalContext: 'El trabajo colaborativo fomenta el crecimiento y la dignidad. Esta cifra histórica demuestra la resiliencia infinita de nuestro tejido.',
  },
  {
    id: 'energy',
    title: 'Energía Renovable',
    value: '56.6',
    suffix: '%',
    trend: 'Máximo histórico anual',
    icon: Sun,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: 'La producción limpia alcanzó una cuota del 55,5% nacional (56,6% incluyendo autoconsumo).',
    backTitle: 'Armonía Ambiental',
    educationalContext: 'Vivir en armonía con nuestro planeta. Transitar radicalmente hacia lo limpio muestra un profundo respeto por la Tierra que heredaremos.',
  },
  {
    id: 'diversity',
    title: 'Diversidad y Paz',
    value: '4º',
    suffix: ' UE',
    trend: 'Nº1 mundial destino LGBTQ+',
    icon: HeartHandshake,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: 'Mujeres: 44% de escaños legislativos. El 86% de la población apoya plenos derechos igualitarios.',
    backTitle: 'Tolerancia y Vida',
    educationalContext: 'La tolerancia y la protección innegociable de todos los derechos civiles construyen un entorno donde todos prosperamos de forma brillante.',
  },
  {
    id: 'mobility',
    title: 'Trenes y Conexiones',
    value: '43.7',
    suffix: ' M',
    trend: 'Récord de Viajeros',
    icon: Train,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: 'Poseemos la red más extensa de Europa, vertebrando la geografía con pasajes hasta un 42% más baratos.',
    backTitle: 'Democratizar Tramos',
    educationalContext: 'Conectar personas veloz y ecológicamente no es un lujo. Es vertebrar el territorio asegurando igualdad de oportunidades a todos nivel nacional.',
  },
  {
    id: 'youth',
    title: 'Impulso Joven',
    value: '68.5',
    suffix: '%',
    trend: 'Bono Cultural',
    icon: Ticket,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: 'Más de 366.000 jóvenes disponen de inversión directa para disfrutar desde bibliotecas hasta museos.',
    backTitle: 'Sembrar Criterio',
    educationalContext: 'Fomentar el hábito cultural en las presentes generaciones no es un gasto; es sembrar el irreemplazable pensamiento analítico y creador de nuestro mañana.',
  },
  {
    id: 'nature',
    title: 'Patrimonio Natural',
    value: '642',
    suffix: '',
    trend: 'Lidres Mundiales (15% del total)',
    icon: Waves,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: '15% de Banderas Azules globales. Además, el 93% de nuestras aguas ostentan calificación Excelente.',
    backTitle: 'Proteger Nuestros Oasis',
    educationalContext: 'Mimar estos ecosistemas salvajes es un escudo proactivo contra los drásticos cambios climáticos y una oda a la geografía costera intachable.',
  },
  {
    id: 'cohesion',
    title: 'Red Comunitaria',
    value: '93',
    suffix: '%',
    trend: 'Superior a OCDE',
    icon: Users,
    color: 'text-brand-600',
    bg: 'bg-brand-100/50',
    description: 'Inmenso porcentaje de españoles confiados y acompañados frente a una crisis o tragedia repentina.',
    backTitle: 'La Red Social Orgánica',
    educationalContext: 'Saber a ciencia cierta que "alguien responderá la llamada" enciende una cálida lumbre existencial y solidifica nuestra mentalidad optimista global.',
  },
];

export const historicalLifeExpectancy = [
  { year: 1975, men: 70.5, women: 76.3, avg: 73.4 },
  { year: 1985, men: 73.3, women: 79.6, avg: 76.4 },
  { year: 1995, men: 74.3, women: 81.5, avg: 77.9 },
  { year: 2005, men: 77.0, women: 83.6, avg: 80.3 },
  { year: 2015, men: 80.1, women: 85.8, avg: 82.9 },
  { year: 2025, men: 81.4, women: 86.5, avg: 84.01 },
];

export const schoolDropoutRate = [
  { year: 2004, value: 32.2 },
  { year: 2010, value: 28.2 },
  { year: 2015, value: 20.0 },
  { year: 2020, value: 16.0 },
  { year: 2024, value: 13.6 },
  { year: 2025, value: 12.8 },
];

export const modernRemedies = [
  {
    id: 1,
    evil: 'Parálisis Biológica',
    evilDescription: 'El sedentarismo moderno no es solo falta de ejercicio, es una desconexión de nuestra naturaleza motriz.',
    remedy: 'Movilidad Imperativa',
    remedyLabel: 'Prescripción Física',
    remedyDescription: 'Mueve tus articulaciones cada hora. El cuerpo estático es un cuerpo que enferma. Camina como acto de rebeldía.',
    iconName: 'Activity'
  },
  {
    id: 2,
    evil: 'Desierto Social',
    evilDescription: 'La hiperconectividad es una ilusión; el aislamiento real debilita el sistema inmune y la salud emocional.',
    remedy: 'Contacto Real',
    remedyLabel: 'Vínculo Orgánico',
    remedyDescription: 'Sustituye el scroll por miradas. Participa en lo común. La tribu no es una opción, es una necesidad evolutiva.',
    iconName: 'Users'
  },
  {
    id: 3,
    evil: 'Sobrecarga de Alerta',
    evilDescription: 'La ansiedad es el ruido de vivir en modo supervivencia constante bajo exigencias artificiales.',
    remedy: 'Calma Radical',
    remedyLabel: 'Pausa Biológica',
    remedyDescription: 'Respira con intención. El descanso no se gana, se respeta. La quietud es la base de toda acción inteligente.',
    iconName: 'Wind'
  },
  {
    id: 4,
    evil: 'Comestibles Vacíos',
    evilDescription: 'Los ultraprocesados son señales químicas confusas para tus células. No alimentan, solo ocupan espacio.',
    remedy: 'Soberanía Alimentaria',
    remedyLabel: 'Nutrición Ancestral',
    remedyDescription: 'Cocina tú mismo. Come alimentos de un solo ingrediente. Tu energía depende de la calidad de tu combustible.',
    iconName: 'Utensils'
  },
  {
    id: 5,
    evil: 'Atención Fragmentada',
    evilDescription: 'El déficit de atención es producto de un diseño digital agresivo que secuestra tu foco para transaccionar contigo.',
    remedy: 'Concentración Profunda',
    remedyLabel: 'Enfoque Soberano',
    remedyDescription: 'Lee libros, no hilos. Estudia sin notificaciones. Recuperar tu atención es recuperar tu vida.',
    iconName: 'BookOpen'
  },
  {
    id: 6,
    evil: 'Ruina del Sueño',
    evilDescription: 'La luz artificial nocturna es un veneno cronobiológico que bloquea la regeneración neuronal.',
    remedy: 'Oscuridad Sagrada',
    remedyLabel: 'Ritmo Circadiano',
    remedyDescription: 'Apaga las pantallas al atardecer. Respeta los ciclos del sol. Dormir es el mayor acto de autocuración posible.',
    iconName: 'Moon'
  },
  {
    id: 7,
    evil: 'Infoxicación Masiva',
    evilDescription: 'El bombardeo de estímulos digitales vacíos genera fatiga cognitiva y parálisis mental.',
    remedy: 'Ayuno Digital',
    remedyLabel: 'Higiene de Datos',
    remedyDescription: 'Cura tu entorno de información con rigor. Menos ruido, más sabiduría real. Elige el silencio.',
    iconName: 'BrainCircuit'
  },
  {
    id: 8,
    evil: 'Soma Alienado',
    evilDescription: 'Vivir solo en la cabeza genera una desconexión total con las señales vitales del organismo.',
    remedy: 'Enraizamiento',
    remedyLabel: 'Conciencia Vital',
    remedyDescription: 'Habita tus sensaciones. Estira, respira, siente el peso de tus pies. Tu cuerpo es el mapa de tu realidad.',
    iconName: 'Smile'
  },
  {
    id: 9,
    evil: 'Inercia de Deriva',
    evilDescription: 'Vivir al día sin estructura es vivir en permanente inestabilidad y estrés existencial.',
    remedy: 'Arquitectura de Hábito',
    remedyLabel: 'Disciplina de Ancla',
    remedyDescription: 'Construye rutinas sólidas que no dependan de tu estado de ánimo. La disciplina es el suelo sobre el que pisas.',
    iconName: 'Compass'
  },
  {
    id: 10,
    evil: 'Vacío de Sentido',
    evilDescription: 'La falta de propósito es la causa silenciosa de la apatía social y el desinterés por el mañana.',
    remedy: 'Propósito en Acción',
    remedyLabel: 'Servicio Comunitario',
    remedyDescription: 'Crea algo. Ayuda a alguien. El sentido de la vida no se busca, se construye contribuyendo.',
    iconName: 'Heart'
  }
];

export const householdBudget = [
  { id: 'pensiones', category: 'Cuidado de Mayores (Pensiones)', amount: 28.8, color: 'bg-amber-400', icon: 'Heart', trendDir: 'up', trendText: 'Subiendo por reto demográfico. Garantiza la dignidad vital tras años de esfuerzo.' },
  { id: 'sanidad', category: 'Salud Familiar (Sanidad)', amount: 15.1, color: 'bg-emerald-400', icon: 'Activity', trendDir: 'stable', trendText: 'Crecimiento sostenido. Existe una clara oportunidad de mejora en salud mental preventiva.' },
  { id: 'educacion', category: 'Formación de los Hijos (Educación)', amount: 11.2, color: 'bg-blue-400', icon: 'BookOpen', trendDir: 'up', trendText: 'Aumento progresivo. Inversión crítica e indispensable para competir en innovación global.' },
  { id: 'desempleo', category: 'Fondo de Emergencia (Paro)', amount: 3.5, color: 'bg-violet-400', icon: 'Umbrella', trendDir: 'down', trendText: 'Gasto a la baja gracias al récord sostenido de empleo. Demuestra un fuerte músculo social.' },
  { id: 'ciencia', category: 'Inversión Futuro (I+D+i)', amount: 3.5, color: 'bg-cyan-400', icon: 'FlaskConical', trendDir: 'alert', trendText: 'Falta inversión agresiva. Necesitamos un pacto urgente para retener el talento investigador.' },
  { id: 'defensa', category: 'Seguridad (Defensa)', amount: 2.3, color: 'bg-slate-400', icon: 'Shield', trendDir: 'up', trendText: 'Subiendo gradualmente según los compromisos de estabilidad europeos y globales.' },
  { id: 'resto', category: 'Mantenimiento (Infra., Adm., Intereses)', amount: 35.6, color: 'bg-stone-300', icon: 'Home', trendDir: 'alert', trendText: 'Alta inercia por intereses de la deuda histórica. Es el punto de mayor fuga estructural hoy.' },
];

export const stateFinanceSummary = {
  collected: 97.2, // Lo recaudado (impuestos, fondos UE)
  spent: 100.0,    // Lo gastado (el desglose anterior)
  balance: -2.8,   // Déficit (lo que se financia)
  incomeSources: [
    { id: 'irpf', name: 'IRPF (Lo que aportamos todos)', amount: 42.1 },
    { id: 'iva', name: 'IVA (Consumo)', amount: 33.4 },
    { id: 'eu', name: 'Fondos Europeos (Ayuda externa)', amount: 12.5 },
    { id: 'otros', name: 'Otros ingresos', amount: 9.2 }
  ]
};
