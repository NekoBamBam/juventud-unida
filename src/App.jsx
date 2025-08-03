import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jugadores from "./pages/Jugadores";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jugadores" element={<Jugadores />} />
          <Route path="/info" element={<Info/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
