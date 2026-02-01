const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#050505] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob"></div>
      
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="absolute -bottom-32 left-1/2 w-150 h-150 bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>

      
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float opacity-70 shadow-[0_0_10px_white]"></div>
      <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-float-delayed opacity-50 shadow-[0_0_10px_white]"></div>
      <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-purple-300 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-200 rounded-full animate-float-delayed opacity-40 blur-[1px]"></div>
      <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-float opacity-40"></div>
      
      <div className="absolute inset-0 bg-transparent opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")'}}>
      </div>
    </div>
  );
};

export default AnimatedBackground;