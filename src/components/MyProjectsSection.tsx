
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    title: "Task Management App",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    title: "Mobile Banking App UI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
  },
];

// Number style for overlay
const numberClasses =
  "absolute -left-5 top-2 text-white text-6xl font-extrabold drop-shadow-xl pointer-events-none netflix-text-shadow select-none z-10";

const MyProjectsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-16 px-0 overflow-x-clip">
      {/* Neon Curve (SVG) */}
      <div className="relative w-full h-[34px] flex items-end justify-center select-none mb-2 pointer-events-none z-20">
        <svg width="100%" height="34" className="block w-full h-[34px] mx-auto" viewBox="0 0 1400 34" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,34 Q700,-32 1400,34"
            stroke="url(#netflix-curve)" strokeWidth="6"
            fill="none"
          />
          <defs>
            <linearGradient id="netflix-curve" x1="0" y1="0" x2="1400" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff2c60" />
              <stop offset="0.4" stopColor="#e50914" />
              <stop offset="0.6" stopColor="#e50914" />
              <stop offset="1" stopColor="#ff2c60" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-peach text-6xl sm:text-7xl font-centrio font-bold mb-8 text-center select-none drop-shadow-lg tracking-wide"
          style={{
            letterSpacing: "0.06em",
            textShadow: "2px 4px 18px rgba(24,15,7,0.27)"
          }}
        >
          My Projects
        </h2>
        <div className="relative">
          {/* Custom horizontal scrolling list */}
          <div
            className="flex gap-8 overflow-x-auto scrollbar-hide pl-8 pr-8 pb-2"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="relative shrink-0 w-[170px] sm:w-[190px] md:w-[220px] h-[240px] sm:h-[270px] lg:h-[300px] rounded-xl bg-netflix-dark-gray group transition-all duration-300 hover:scale-105 shadow-xl hover:z-30"
                style={{
                  marginRight: i === projects.length - 1 ? 0 : undefined,
                }}
              >
                <span className={numberClasses}>{i + 1}</span>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                  draggable={false}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent py-4 px-3 rounded-b-xl z-10">
                  <div className="font-bold text-lg text-white drop-shadow">{project.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjectsSection;
