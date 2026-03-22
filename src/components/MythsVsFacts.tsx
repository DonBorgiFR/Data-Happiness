import { motion } from 'framer-motion';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

const myths = [
  {
    id: 1,
    myth: "Nuestras calles y ciudades cada vez son más peligrosas y violentas.",
    fact: "La seguridad nocturna es del 80% (superior a la OCDE) y los robos en domicilios bajaron más del 11%. El crimen real no sube, se ha mudado de forma digital a internet (88% de la cibercriminalidad).",
  },
  {
    id: 2,
    myth: "Las mejores playas necesitan de duchas y grandes chiringuitos para darnos bienestar.",
    fact: "Para conseguir una Bandera Azul no es obligatorio tener duchas; de hecho, se desaconsejan expresamente para no derrochar agua potable y cuidar conscientemente nuestro entorno medioambiental.",
  },
  {
    id: 3,
    myth: "Las nuevas juventudes están tremendamente divididas por la ideología y el odio.",
    fact: "A pesar del clima de división política, el 91% de los jóvenes de ambos sexos coinciden y están de acuerdo en proteger plenos derechos LGBTQ+, demostrando una tolerancia estructural inquebrantable.",
  }
];

export function MythsVsFacts() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggle = (id: number) => {
    if (flipped.includes(id)) {
      setFlipped(flipped.filter(f => f !== id));
    } else {
      setFlipped([...flipped, id]);
    }
  }

  return (
    <section className="my-16 perspective-1000">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <EyeOff className="h-6 w-6 text-brand-400" />
          <h3 className="text-3xl font-bold text-brand-900 tracking-tight">Mitos vs Datos Reales</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {myths.map((m) => (
          <div key={m.id} className="relative h-72 w-full cursor-pointer preserve-3d" onClick={() => toggle(m.id)}>
            <motion.div
              initial={false}
              animate={{ rotateY: flipped.includes(m.id) ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute inset-0 preserve-3d"
            >
              {/* Myth Side */}
              <div className="absolute inset-0 backface-hidden glass-card p-8 flex flex-col justify-center text-center bg-brand-50 border-transparent hover:shadow-[0_0_30px_rgba(201,177,131,0.2)]">
                <span className="text-xs font-bold tracking-[0.2em] text-[#ff7e67] mb-4 uppercase">Mito Popular</span>
                <p className="text-earth-800 text-[16px] sm:text-[17px] font-medium leading-relaxed italic">"{m.myth}"</p>
                <div className="mt-auto pt-6 opacity-60 flex justify-center">
                  <span className="animate-pulse text-xs uppercase tracking-widest text-brand-600 underline decoration-dashed">Tocame para la Verdad</span>
                </div>
              </div>
              
              {/* Fact Side */}
              <div className="absolute inset-0 backface-hidden glass-card p-8 flex flex-col justify-center text-center bg-brand-500/10 border-brand-500/20 rotate-y-180">
                <span className="text-xs font-bold tracking-[0.2em] text-brand-500 mb-4 uppercase">La Realidad</span>
                <p className="text-earth-800 text-[15px] sm:text-[17px] font-medium leading-relaxed tracking-wide">{m.fact}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
