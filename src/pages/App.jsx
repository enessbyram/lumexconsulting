import Header from "../components/Header";
import Introduce from "../components/Introduce";
import AnimatedBackground from "../components/AnimatedBackground";
import Projects from "../components/Projects"; // Yeni ekledik
import Footer from "../components/Footer";     // Yeni ekledik

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 1. KATMAN: Arka Plan (Sabit) */}
      <AnimatedBackground />
      
      {/* 2. KATMAN: İçerik */}
      <div className="relative z-10 flex flex-col">
        <Header/>
        <Introduce />
        
        {/* Projeler Bölümü */}
        <Projects />
        
        {/* Footer */}
        <Footer />
      </div>
      
    </div>
  )
}

export default App;