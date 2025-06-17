
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/lovable-uploads/38524548-8484-4812-b848-2f46ce2a401f.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/lovable-uploads/7273a0b5-175d-4187-8cfe-725279cf5227.png",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with forecasts, interactive maps, and location-based weather alerts using modern APIs.",
    image: "/lovable-uploads/c08e2bb3-bee2-408c-b5fe-f99d7c88ec69.png",
    technologies: ["Vue.js", "Python", "FastAPI", "OpenWeatherMap"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A full-featured social media platform with posts, comments, real-time messaging, and content sharing capabilities.",
    image: "/lovable-uploads/c4402640-2a5d-4b04-80e0-55f3ecce35cc.png",
    technologies: ["React", "Express", "Redis", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern animations, dark mode, and optimized performance for showcasing projects.",
    image: "/lovable-uploads/2aebf736-262d-4a81-b427-134b026a2db9.png",
    technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  }
];

const ProjectSlider3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
      {/* 3D Slider Container */}
      <div className="relative w-full max-w-6xl h-full">
        {projects.map((project, index) => {
          const position = (index - currentIndex + projects.length) % projects.length;
          const isActive = position === 0;
          
          let transform = '';
          let zIndex = 0;
          let opacity = 0.6;
          
          if (position === 0) {
            // Center slide
            transform = 'translateX(0) rotateY(0deg) scale(1)';
            zIndex = 10;
            opacity = 1;
          } else if (position === 1 || position === projects.length - 1) {
            // Adjacent slides
            const isNext = position === 1;
            transform = `translateX(${isNext ? '60%' : '-60%'}) rotateY(${isNext ? '-45deg' : '45deg'}) scale(0.8)`;
            zIndex = 5;
            opacity = 0.7;
          } else {
            // Hidden slides
            transform = `translateX(${position <= projects.length / 2 ? '120%' : '-120%'}) rotateY(${position <= projects.length / 2 ? '-60deg' : '60deg'}) scale(0.6)`;
            zIndex = 1;
            opacity = 0.3;
          }

          return (
            <div
              key={project.id}
              className={`absolute top-1/2 left-1/2 w-80 h-96 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out cursor-pointer ${
                isActive ? '' : 'hover:scale-110'
              }`}
              style={{
                transform: `translate(-50%, -50%) ${transform}`,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d'
              }}
              onClick={() => !isActive && goToSlide(index)}
            >
              <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 h-48 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {isActive && (
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
      >
        ←
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider3D;
