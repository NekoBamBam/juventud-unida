import Carrusel from "../components/Carrousel";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Juventud Unida</h1>
      <p className="text-lg">
        Orgullo de barrio, pasión por el fútbol.
      </p>
      <Carrusel/>
    </div>
  );
}
