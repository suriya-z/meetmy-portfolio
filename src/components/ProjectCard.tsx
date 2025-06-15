
import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  technologies,
  demoUrl,
  githubUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[280px] w-72 h-40 netflix-card cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="w-full h-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover Content */}
      {isHovered && (
        <div className="absolute inset-0 bg-netflix-dark-gray/95 p-4 flex flex-col justify-between animate-fade-in rounded-md">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-netflix-light-gray text-sm mb-3 line-clamp-3">{description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="bg-netflix-red/20 text-netflix-red text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            {demoUrl && (
              <button className="flex items-center gap-1 bg-netflix-red hover:bg-netflix-red-dark text-white text-xs px-3 py-1 rounded transition-colors duration-200">
                <Play size={12} fill="white" />
                Demo
              </button>
            )}
            {githubUrl && (
              <button className="flex items-center gap-1 bg-netflix-medium-gray hover:bg-netflix-light-gray/20 text-white text-xs px-3 py-1 rounded transition-colors duration-200">
                <Github size={12} />
                Code
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
