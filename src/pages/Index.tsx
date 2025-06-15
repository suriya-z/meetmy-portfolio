
import React from 'react';
import ProfileSelection from '@/components/ProfileSelection';

// Home page shows "Who's watching?" selector
const Index = () => {
  return (
    <div className="relative min-h-screen bg-netflix-black overflow-hidden">
      {/* Red & Black Gradient Background (from HeroSection) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, rgba(229,9,20,0.45) 0%, rgba(20,20,20,0.95) 60%, transparent 100%),
            radial-gradient(circle at 100% 0%, rgba(229,9,20,0.45) 0%, rgba(20,20,20,0.95) 60%, transparent 100%),
            linear-gradient(120deg, rgba(229,9,20,0.16) 0%, #141414 8%, #141414 92%, rgba(229,9,20,0.18) 100%)
          `,
        }}
        aria-hidden="true"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-netflix-black via-transparent to-transparent" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <ProfileSelection />
      </div>
    </div>
  );
};

export default Index;

