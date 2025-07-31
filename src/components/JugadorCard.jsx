function JugadorCard({ jugador }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 w-full max-w-sm">
      <img src={jugador.imagen} alt={jugador.nombre} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800">{jugador.nombre}</h2>
        <p className="text-gray-700">{jugador.posicion}</p>
        <p className="text-gray-500">{jugador.equipo}</p>
      </div>
    </div>
  );
}

export default JugadorCard;
