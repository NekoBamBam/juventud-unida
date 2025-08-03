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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-black bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>
      <button
        onClick={siguiente}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="text-black bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </div>
  );
}

export default Carrusel;
