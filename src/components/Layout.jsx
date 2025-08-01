import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <main className="pt-20 min-h-screen">
        
      <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Layout;
