import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="" className="h-14 w-20" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 ">
          <Link
            to="/"
            className="text-[#419145] hover:text-[#c83332] transition"
          >
            Inicio
          </Link>
          <Link
            to="/jugadores"
            className="text-[#419145] hover:text-[#c83332] transition"
          >
            Jugadores
          </Link>
          <Link
            to="/info"
            className="text-[#419145] hover:text-[#c83332] transition"
          >
            Sobre Nosotros
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Inicio
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Jugadores
          </a>

          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
