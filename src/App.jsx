import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jugadores from "./pages/Jugadores";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jugadores" element={<Jugadores />} />
          {/* más páginas acá */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
