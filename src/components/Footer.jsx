function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Juventud Unida. Todos los derechos reservados.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:underline text-gray-300">Instagram</a>
          <a href="#" className="hover:underline text-gray-300">Facebook</a>
          <a href="#" className="hover:underline text-gray-300">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
