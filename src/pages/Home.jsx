// src/pages/Landing.jsx
import { useEffect } from "react";
import Carrusel from "../components/Carrousel";

function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="w-full font-sans text-white">
      {/* Hero Section */}
      <section
        className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Bienvenido
          </h1>
          <p className="text-lg md:text-xl mb-8">Esta es una demo</p>
          <a
            href="#sobremi"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-800 transition rounded-lg font-medium"
          >
            Saber más
          </a>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobremi" className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          aspernatur ab provident, veniam quaerat atque nisi id quo optio,
          officia adipisci, voluptatem necessitatibus sed unde quidem beatae nam
          cumque neque.
        </p>
      </section>

      {/* Proyectos */}
      <section className="bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Proyectos destacados</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Proyecto 1", "Proyecto 2", "Proyecto 3"].map((title, idx) => (
            <div
              key={idx}
              className="bg-gray-700 rounded-lg shadow-md p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                dignissimos amet ea sed itaque praesentium minima earum culpa
                accusantium nihil explicabo, beatae dolor saepe dicta sequi
                soluta animi eos quo.
              </p>
            </div>
          ))}
        <Carrusel/>
        </div>
      </section>
    </div>
  );
}

export default Home;
