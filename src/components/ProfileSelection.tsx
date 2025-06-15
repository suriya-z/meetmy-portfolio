import React, { useState } from "react";
import { Plus, Play, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Update profiles: "Suriya" (with uploaded avatar) and "Kids" (with uploaded image)
const PROFILES = [
  {
    name: "Suriya",
    avatar: "/lovable-uploads/5cd95a7f-42bc-4f73-9fd6-87b7a56be546.png",
  },
  {
    name: "Kids",
    avatar: "/lovable-uploads/c4402640-2a5d-4b04-80e0-55f3ecce35cc.png"
  }
];

export default function ProfileSelection() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleProfileClick = (name: string) => {
    if (name === "Kids") {
      alert("you cant enter inside if you're under 18. sorry!");
      return;
    }
    setSelectedProfile(name);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-netflix-black text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">Who's watching?</h1>
      <div className="flex flex-row gap-8 mb-12">
        {PROFILES.map(profile => (
          <button
            key={profile.name}
            className={`flex flex-col items-center group outline-none ${selectedProfile === profile.name ? "ring-2 ring-netflix-red ring-offset-2" : ""}`}
            tabIndex={0}
            aria-label={profile.name}
            onClick={() => handleProfileClick(profile.name)}
            type="button"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-md border-2 border-transparent group-hover:border-white group-focus:border-white object-cover shadow-xl"
              draggable={false}
            />
            <span className={`mt-4 text-lg sm:text-xl text-netflix-light-gray group-hover:text-white group-focus:text-white tracking-wide ${selectedProfile === profile.name ? "text-white" : ""}`}>
              {profile.name}
            </span>
          </button>
        ))}
        <button
          className="flex flex-col items-center group outline-none"
          tabIndex={0}
          aria-label="Add Profile"
          onClick={() => handleProfileClick("Add Profile")}
          type="button"
        >
          <span className="bg-netflix-medium-gray/50 rounded-md w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center border-2 border-transparent group-hover:border-white group-focus:border-white transition-colors">
            <Plus size={48} color="#b3b3b3" />
          </span>
          <span className="mt-4 text-lg sm:text-xl text-netflix-light-gray group-hover:text-white group-focus:text-white tracking-wide">Add Profile</span>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className={`
            netflix-button flex items-center gap-2 text-lg transition-all
            ${selectedProfile === "Suriya" ? "animate-pulse shadow-[0_0_16px_4px_rgba(229,9,20,0.7)] border-2 border-netflix-red scale-105" : "bg-netflix-medium-gray/80 text-white opacity-60 cursor-not-allowed"}
          `}
          disabled={selectedProfile !== "Suriya"}
          onClick={() => selectedProfile === "Suriya" && navigate("/suriya")}
          type="button"
        >
          <Play size={20} fill="white" />
          Get Started
        </button>
        <button className="bg-netflix-medium-gray/80 hover:bg-netflix-medium-gray text-white font-medium px-6 py-3 rounded transition-all duration-200 hover:scale-105 flex items-center gap-2"
        >
          More Info
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
}
