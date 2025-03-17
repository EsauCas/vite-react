import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Paquetes from "./pages/Paquetes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          logo="AgaTech"
          links={[
            { label: "Inicio", to: "/Inicio" },
            { label: "Nosotros", to: "/Nosotros" },
            { label: "Paquetes", to: "/Paquetes" },
          ]}
          ctaButton={{
            label: "Contacto",
            to: "/contacto",
            variant: "btn-success",
          }}
        />
        {/* Contenedor principal con padding-top para compensar el header fijo */}
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Paquetes" element={<Paquetes />} />
            <Route path="/" element={<Navigate to="/Inicio" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
