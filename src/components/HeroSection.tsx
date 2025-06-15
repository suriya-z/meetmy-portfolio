import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Red & Black Gradient Background inspired by reference */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, rgba(229,9,20,0.45) 0%, rgba(20,20,20,0.95) 60%, transparent 100%),
            radial-gradient(circle at 100% 0%, rgba(229,9,20,0.45) 0%, rgba(20,20,20,0.95) 60%, transparent 100%),
            linear-gradient(120deg, rgba(229,9,20,0.16) 0%, #141414 8%, #141414 92%, rgba(229,9,20,0.18) 100%)
          `,
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
            Web Developer | Web Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="netflix-button flex items-center gap-2 text-lg"
              onClick={() => navigate("/suriya")}
            >
              <Play size={20} fill="white" />
              Get Started
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
