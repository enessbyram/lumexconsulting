import { Routes, Route } from "react-router-dom";

// Component Importları (Senin dosya yapına göre)
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

// Page Importları (Senin dosya yapına göre)
import About from "./About";
import Services from "./Services";
import ProjectDetail from "./ProjectDetail"; // Yeni Detay Sayfası

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative z-10 flex flex-col">
        <Introduce />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <AnimatedBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;