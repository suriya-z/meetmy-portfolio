
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Use the uploaded image as the background
const backgroundImage = "/lovable-uploads/c08e2bb3-bee2-408c-b5fe-f99d7c88ec69.png";

const AboutSuriya = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-start bg-black overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-20 flex items-center gap-2 bg-black/60 hover:bg-black/80 transition-colors px-4 py-2 rounded-full shadow-lg border border-white/20 backdrop-blur font-netflix text-white"
        aria-label="Back to Home"
      >
        <ArrowLeft size={24} strokeWidth={2.2} />
        <span className="sr-only">Back</span>
      </button>
      {/* Custom Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right, 
              rgba(20,20,20,0.96) 0%, 
              rgba(20,20,20,0.85) 30%, 
              rgba(20,20,20,0.6) 50%,
              rgba(20,20,20,0.18) 75%,
              rgba(20,20,20,0.02) 100%
            ), 
            url('${backgroundImage}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 items-start text-left pl-6 sm:pl-10 md:pl-16 lg:pl-24 py-16 w-full max-w-3xl">
        <span className="uppercase tracking-widest text-xs text-red-600 font-bold mb-2 font-netflix">
          N SERIES
        </span>
        <h1 className="text-white text-5xl sm:text-7xl font-extrabold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,.8)] netflix-text-shadow font-netflix">
          Suriya
        </h1>
        <div className="flex items-center gap-4 my-2">
          <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded font-netflix">
            Web Developer
          </span>
          <span className="text-xs font-semibold bg-white/16 text-gray-200 px-2 py-1 rounded border border-white/20 font-netflix">
            Web Designer
          </span>
        </div>
        <p className="text-lg text-white max-w-2xl font-medium drop-shadow-md mb-8 font-netflix">
          Passionate and detail-oriented Web Developer with hands-on experience in building responsive and user-centric websites using HTML, CSS, JavaScript, and React. Adept at translating design wireframes into high-quality code and ensuring cross-browser compatibility. Eager to contribute to dynamic teams and build impactful web applications.
        </p>
        {/* You can add CTA or other badges here if needed */}
      </div>
    </div>
  );
};

export default AboutSuriya;
