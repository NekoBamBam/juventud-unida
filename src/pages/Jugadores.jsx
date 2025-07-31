import jugadores from "../data/jugadores";
import JugadorCard from "../components/JugadorCard";

function Jugadores() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Plantel de Jugadores</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jugadores.map(jugador => (
          <JugadorCard key={jugador.id} jugador={jugador} />
        ))}
      </div>
    </div>
  );
}

export default Jugadores;
