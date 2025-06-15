
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.4)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 netflix-text-shadow">
            Suriya
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-netflix-light-gray mb-8 netflix-text-shadow">
            Creative Developer | Designer | Storyteller
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="netflix-button flex items-center gap-2 text-lg"
              onClick={() => navigate("/suriya")}
            >
              <Play size={20} fill="white" />
              Get Started
            </button>
            <button
              className="netflix-button flex items-center gap-2 text-lg"
              // Set your resume action here
              onClick={() => { /* Add your Resume action if needed */ }}
            >
              <Play size={20} fill="white" />
              Resume
            </button>
            <button className="bg-netflix-medium-gray/80 hover:bg-netflix-medium-gray text-white font-medium px-6 py-3 rounded transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              More Info
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-netflix-black to-transparent" />
    </section>
  );
};

export default HeroSection;

