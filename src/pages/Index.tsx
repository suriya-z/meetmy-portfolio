
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
