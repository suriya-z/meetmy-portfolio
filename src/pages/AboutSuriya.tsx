
import React from "react";

const backgroundImage =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop";

const AboutSuriya = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,20,20,0.85) 40%, rgba(20,20,20,0.35)), url('${backgroundImage}')`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-3xl ml-12 pl-6 py-16 flex flex-col gap-8">
        <span className="uppercase tracking-widest text-xs text-red-600 font-bold mb-2">N SERIES</span>
        <h1 className="text-white text-5xl sm:text-7xl font-extrabold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,.8)] netflix-text-shadow">
          Suriya
        </h1>
        <div className="flex items-center gap-4 my-2">
          <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded">#1 in Web Developers Today</span>
          <span className="text-xs font-semibold bg-white/16 text-gray-200 px-2 py-1 rounded border border-white/20">2024</span>
        </div>
        <p className="text-lg text-white max-w-2xl font-medium drop-shadow-md mb-8">
          Passionate and detail-oriented Web Developer with hands-on experience in building responsive and user-centric websites using HTML, CSS, JavaScript, and React. Adept at translating design wireframes into high-quality code and ensuring cross-browser compatibility. Eager to contribute to dynamic teams and build impactful web applications.
        </p>
        {/* You can add CTA or other badges here if needed */}
      </div>
    </div>
  );
};

export default AboutSuriya;
