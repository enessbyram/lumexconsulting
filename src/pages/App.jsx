import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollToTop from "../components/ScrollToTop"; // YENİ IMPORT

import About from "../pages/About";
import Services from "../pages/Services";
import ProjectDetail from "../pages/ProjectDetail";
import ComingSoon from "../pages/ComingSoon";

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
      <ScrollToTop /> 
      
      <AnimatedBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;