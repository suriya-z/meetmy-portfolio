
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectSlider3D from '../components/ProjectSlider3D';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </nav>

      {/* Main content */}
      <div className="relative z-10 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of web applications, built with modern technologies and creative design.
          </p>
        </div>

        <ProjectSlider3D />
      </div>
    </div>
  );
};

export default Projects;
