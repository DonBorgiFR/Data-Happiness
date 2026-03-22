export const regionalData = [
  { name: 'Andalucía', value: 82.1, description: 'Fuerte crecimiento en energías renovables.' },
  { name: 'Aragón', value: 83.5, description: 'Alta calidad de vida y acceso a servicios.' },
  { name: 'Cantabria', value: 83.6, description: 'Destacada en bienestar mental y entorno natural.' },
  { name: 'Castilla-La Mancha', value: 83.0, description: 'Avances en exportación y sector agroalimentario.' },
  { name: 'Castilla y León', value: 84.1, description: 'De las mayores esperanzas de vida del país y excelente educación.' },
  { name: 'Cataluña', value: 83.6, description: 'Motor de innovación tecnológica y atracción de startups.' },
  { name: 'Ceuta y Melilla', value: 80.5, description: 'Mejoras recientes en infraestructura portuaria.' },
  { name: 'Comunidad de Madrid', value: 84.6, description: 'Líder en atracción de talento internacional y renta per cápita.' },
  { name: 'Comunidad Foral de Navarra', value: 84.3, description: 'Niveles de desempleo mínimos y alta cohesión social.' },
  { name: 'Comunidad Valenciana', value: 82.5, description: 'Referente en turismo sostenible y estilo de vida mediterráneo.' },
  { name: 'Extremadura', value: 82.4, description: 'Líder en preservación ecológica y producción solar.' },
  { name: 'Galicia', value: 83.3, description: 'Innovación en sector textil e industria pescadera.' },
  { name: 'Islas Baleares', value: 83.1, description: 'Destino estrella europeo con gran resiliencia económica.' },
  { name: 'Islas Canarias', value: 82.2, description: 'Clima privilegiado y pioneros en protección de biodiversidad.' },
  { name: 'La Rioja', value: 83.8, description: 'Excelencia en industria vinícola y alta seguridad ciudadana.' },
  { name: 'País Vasco', value: 84.0, description: 'Altos salarios y potentísima industria tecnológica y manufacturera.' },
  { name: 'Principado de Asturias', value: 82.7, description: 'Alta valoración de su sistema sanitario y entornos naturales.' },
  { name: 'Región de Murcia', value: 82.3, description: 'Explotación agraria de vanguardia y crecimiento en exportaciones.' }
];

// Helper to get color scaling
export const getRegionalValue = (regionName: string) => {
  const match = regionalData.find(d => d.name === regionName);
  return match ? match.value : 80;
};
