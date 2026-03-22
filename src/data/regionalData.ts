export const regionalData = [
  { name: 'Andalucía', value: 82.1, description: 'Liderazgo en sostenibilidad: impulsa el Valle Andaluz del Hidrógeno Verde y es la 2ª comunidad con más Banderas Azules.' },
  { name: 'Aragón', value: 83.5, description: 'Mayor índice de bienestar y asombrosa solidaridad ciudadana (+71% en donaciones de órganos en 2024).' },
  { name: 'Cantabria', value: 83.6, description: 'Líder mundial en solidaridad sanitaria con 103,4 donantes de órganos por cada millón de habitantes.' },
  { name: 'Castilla-La Mancha', value: 83.0, description: 'Su sistema sanitario se consolida con el Hospital de Toledo uniéndose a la red de trasplantes hepáticos.' },
  { name: 'Castilla y León', value: 84.1, description: 'En la élite de longevidad: sexta región europea en esperanza de vida (sus mujeres superan los 87,7 años).' },
  { name: 'Cataluña', value: 83.6, description: 'Pionera médica mundial (logrando trasplantes simultáneos inéditos) y cuida sus puertos (23 Banderas Azules).' },
  { name: 'Ceuta y Melilla', value: 81.5, description: 'Mantienen playas excelentes certificadas por Banderas Azules que garantizan su accesibilidad y calidad ambiental.' },
  { name: 'Comunidad de Madrid', value: 86.1, description: 'Cúspide de la salud: sus mujeres tienen una esperanza de vida de 88,3 años, la segunda más alta del mundo entero (solo por detrás de Finlandia).' },
  { name: 'Comunidad Foral de Navarra', value: 85.3, description: 'Acumula la mayor calidad de vida de España (105,19 puntos), destacando en ocio, salud y relaciones sociales.' },
  { name: 'Comunidad Valenciana', value: 82.5, description: 'Lidera la dimensión de «Gobernanza» y campeona absoluta cuidando el litoral (143 Banderas Azules).' },
  { name: 'Extremadura', value: 82.4, description: 'Potente compromiso cívico y medioambiental, con municipios premiados a nivel nacional por la educación verde.' },
  { name: 'Galicia', value: 83.3, description: 'Referente ecológico que atesora las costas más premiadas: Sanxenxo y Vigo lideran en Banderas Azules en toda España.' },
  { name: 'Islas Baleares', value: 83.1, description: 'La región que más mejoró su calidad de vida recientemente, logrando dar el mayor salto positivo en el bienestar nacional.' },
  { name: 'Islas Canarias', value: 82.2, description: 'Modelo pionero de prevención en costas (premiado a nivel nacional) combinándolo con 47 de las mejores playas del país.' },
  { name: 'La Rioja', value: 83.8, description: 'Un verdadero remanso de paz: ocupa la 2ª posición nacional en el Índice Multidimensional de Calidad de Vida.' },
  { name: 'País Vasco', value: 84.0, description: 'Referente absoluto de cohesión social, batiendo récords con la tasa de riesgo de pobreza más baja (9,3%) y mejor sistema educativo.' },
  { name: 'Principado de Asturias', value: 82.7, description: 'Considerada la zona más tranquila y protegida, lidera absolutamente la dimensión «Seguridad Física y Personal».' },
  { name: 'Región de Murcia', value: 82.3, description: 'Su Hospital V. de la Arrixaca se corona orgullo nacional, siendo el centro con más actividad en trasplantes de todo el país.' }
];

// Helper to get color scaling
export const getRegionalValue = (regionName: string) => {
  const match = regionalData.find(d => d.name === regionName);
  return match ? match.value : 80;
};
