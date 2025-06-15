
import React from 'react';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = () => {
  // Sample project data - replace with your actual projects
  const webApps = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop',
      category: 'Web Apps',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=225&fit=crop',
      category: 'Web Apps',
      technologies: ['Vue.js', 'Express', 'Socket.io'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop',
      category: 'Web Apps',
      technologies: ['React', 'Chart.js', 'REST API'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const uiuxProjects = [
    {
      id: 4,
      title: 'Mobile Banking App UI',
      description: 'Modern mobile banking interface design with focus on accessibility, security, and user experience.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop',
      category: 'UI/UX',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      demoUrl: '#',
    },
    {
      id: 5,
      title: 'SaaS Dashboard Design',
      description: 'Clean and intuitive dashboard design for B2B SaaS platform with complex data visualization needs.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop',
      category: 'UI/UX',
      technologies: ['Adobe XD', 'Design System', 'Wireframing'],
      demoUrl: '#',
    },
  ];

  const creativeProjects = [
    {
      id: 6,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop',
      category: '3D & VFX',
      technologies: ['Illustrator', 'Photoshop', 'Brand Strategy'],
      demoUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-netflix-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Featured Projects
          </h2>
          <p className="text-netflix-light-gray text-lg max-w-2xl mx-auto">
            Discover my latest work across web development, UI/UX design, and creative projects
          </p>
        </div>

        <ProjectCarousel title="Web Applications" projects={webApps} />
        <ProjectCarousel title="UI/UX Design" projects={uiuxProjects} />
        <ProjectCarousel title="Creative & 3D" projects={creativeProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
