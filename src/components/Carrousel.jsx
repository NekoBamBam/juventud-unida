import { useState } from "react";
import fondo1 from "../assets/fondo1.jpg";
import fondo2 from "../assets/fondo2.jpg";
import fondo3 from "../assets/fondo3.jpg";

const imagenes = [
  { src: fondo1, alt: "Equipo A" },
  { src: fondo2, alt: "Equipo B" },
  { src: fondo3, alt: "Equipo C" },
];

function Carrusel() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Imagen actual */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={imagenes[indice].src}
          alt={imagenes[indice].alt}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Botones */}
      <button
        onClick={anterior}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        ◀
      </button>
      <button
        onClick={siguiente}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        ▶
      </button>
    </div>
  );
}

export default Carrusel;
