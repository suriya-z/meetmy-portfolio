import React from "react";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MyProjectsSection from "../components/MyProjectsSection";
import NetflixNavbar from "../components/NetflixNavbar";

// Use the latest uploaded image for the right-side portrait
const portraitImg = "/lovable-uploads/38524548-8484-4812-b848-2f46ce2a401f.png";
// Resume image file for download
const resumeImg = "/lovable-uploads/7273a0b5-175d-4187-8cfe-725279cf5227.png";

const AboutSuriya = () => {
  const navigate = useNavigate();

  // Trigger download for resume image
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeImg;
    link.download = "SuriyaD_Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-stretch flex-col">
      {/* NEW: Netflix Navbar at top */}
      <NetflixNavbar />
      
      {/* Back Button (keep for now but it's below navbar) */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-20 left-6 z-30 flex items-center gap-2 bg-black/60 hover:bg-black/80 transition-colors px-4 py-2 rounded-full shadow-lg border border-white/20 backdrop-blur font-netflix text-white"
        aria-label="Back to Home"
      >
        <ArrowLeft size={24} strokeWidth={2.2} />
        <span className="sr-only">Back</span>
      </button>

      {/* Background Right: Portrait with subtle fading left gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Right-aligned image, wrapped to crop the top half and reveal face */}
        <div
          className="absolute top-0 bottom-0 right-0 h-full w-[50vw] max-w-[700px] min-w-[320px] overflow-hidden"
        >
          <img
            src={portraitImg}
            alt="Portrait"
            className="h-full w-full object-cover"
            style={{
              objectPosition: "center 15%",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0) 8%, rgba(20,20,20,0.5) 60%, rgba(20,20,20,0.78) 85%, rgba(20,20,20,1) 97%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0) 8%, rgba(20,20,20,0.5) 60%, rgba(20,20,20,0.78) 85%, rgba(20,20,20,1) 97%)",
            }}
            draggable={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 via-60% to-transparent z-10"></div>
      </div>

      {/* Content Section (main info & resume button) */}
      <div
        className="
          relative z-20 flex flex-col justify-center
          pl-6 sm:pl-10 md:pl-16 lg:pl-24
          pr-4
          pt-28 pb-4
          w-full
          max-w-[50vw]
        "
      >
        <span className="uppercase tracking-widest text-xs text-red-600 font-bold mb-2 font-netflix">
          N SERIES
        </span>
        <h1 className="text-white text-5xl sm:text-7xl font-bold leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,.8)] netflix-text-shadow font-netflix">
          Suriya
        </h1>
        <div className="flex items-center gap-4 my-4">
          <span className="text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded font-netflix">
            Web Developer
          </span>
          <span className="text-xs font-bold bg-white/16 text-gray-200 px-2 py-1 rounded border border-white/20 font-netflix">
            Web Designer
          </span>
        </div>
        <p className="text-lg text-white max-w-2xl font-medium drop-shadow-md mb-8 font-netflix">
          Passionate and detail-oriented Web Developer with hands-on experience in building responsive and user-centric websites using HTML, CSS, JavaScript, and React. Adept at translating design wireframes into high-quality code and ensuring cross-browser compatibility. Eager to contribute to dynamic teams and build impactful web applications.
        </p>
        {/* Resume Button styled as Play */}
        <button
          className="netflix-button flex items-center gap-2 text-lg w-fit mb-0"
          onClick={handleResumeDownload}
        >
          <Play size={20} fill="white" />
          Resume
        </button>
      </div>
      {/* MyProjectsSection directly below content, spaced */}
      <div className="relative z-30 mt-8">
        <MyProjectsSection />
      </div>
    </div>
  );
};

export default AboutSuriya;
