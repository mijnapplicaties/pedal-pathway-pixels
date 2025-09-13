
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551524164-6cf12ac775a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Epic Bicycle
          <span className="block text-green-400 animate-fade-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">Adventure</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
          Join us on an unforgettable journey through breathtaking landscapes, challenging trails, and incredible destinations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:1.4s] opacity-0 [animation-fill-mode:forwards]">
          <button 
            onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transform-gpu"
          >
            <span className="relative z-10">Discover Our Route</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group relative overflow-hidden bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 transform-gpu">
            <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">View Gallery</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
