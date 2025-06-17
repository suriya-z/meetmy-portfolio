
import React from 'react';

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
  return (
    <div className="banner-3d">
      <div 
        className="slider-3d" 
        style={{ '--quantity': projects.length } as React.CSSProperties}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="item-3d"
            style={{ '--position': index + 1 } as React.CSSProperties}
          >
            <div className="project-card-3d">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <div className="tech-tags">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="content-3d">
        <h1 className="title-3d" data-content="PROJECTS">PROJECTS</h1>
        <div className="author-3d">
          <h2>SURIYA</h2>
          <p><b>Full Stack Developer</b></p>
          <p>Explore my latest projects and developments</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider3D;
