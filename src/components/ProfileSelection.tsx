
import React from "react";
import { Plus, Play, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample avatars (replace URLs with your own if needed)
const PROFILES = [
  {
    name: "Steven",
    avatar: "https://occ-0-3219-3647.1.nflxso.net/dnm/api/v6/8zA3vK6CtLv5Qf2K4hE6ITJ3SWE/AAAABcZ2Hmqy_6vds5goPRvNEUSey6JzRBGBHkp4AIHBgCPhaZzm-JlAYHPyqEoE9uevgss1WEDODuZVU6pMxHyZGLhvVLlj.png?r=ffa"
  },
  {
    name: "Will",
    avatar: "https://occ-0-3219-3647.1.nflxso.net/dnm/api/v6/8zA3vK6CtLv5Qf2K4hE6ITJ3SWE/AAAABQ0h7XnBCusac_2GChMnATcPtM2YEFX6oxj9JMnV6HfPklxnldFV2V-lSzVQQ9PE57lygi7w4itbk5WVRR_3XOUMz_93.png?r=229"
  },
  {
    name: "Kids",
    avatar: "https://occ-0-3219-3647.1.nflxso.net/dnm/api/v6/8zA3vK6CtLv5Qf2K4hE6ITJ3SWE/AAAABU9bTPasUU4IbSKuJ9FVUYni1dgPLbc1Q90VsAPsM3-7KLjTZG61wh3Wi0GmHrRRkwfoJjPuZI62zBbGK6c5PBn92NXY.png?r=2a6"
  }
];

export default function ProfileSelection() {
  const navigate = useNavigate();

  const handleProfileClick = (name: string) => {
    // You can change this logic to route, set profile, etc.
    alert(`Selected: ${name}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-netflix-black text-white">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-12 text-center">Who's watching?</h1>
      <div className="flex flex-row gap-8 mb-12">
        {PROFILES.map(profile => (
          <button
            key={profile.name}
            className="flex flex-col items-center group outline-none"
            tabIndex={0}
            aria-label={profile.name}
            onClick={() => handleProfileClick(profile.name)}
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-md border-2 border-transparent group-hover:border-white group-focus:border-white object-cover shadow-xl"
              draggable={false}
            />
            <span className="mt-4 text-lg sm:text-xl text-netflix-light-gray group-hover:text-white group-focus:text-white tracking-wide">{profile.name}</span>
          </button>
        ))}
        <button
          className="flex flex-col items-center group outline-none"
          tabIndex={0}
          aria-label="Add Profile"
          onClick={() => handleProfileClick("Add Profile")}
        >
          <span className="bg-netflix-medium-gray/50 rounded-md w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center border-2 border-transparent group-hover:border-white group-focus:border-white transition-colors">
            <Plus size={48} color="#b3b3b3" />
          </span>
          <span className="mt-4 text-lg sm:text-xl text-netflix-light-gray group-hover:text-white group-focus:text-white tracking-wide">Add Profile</span>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className="netflix-button flex items-center gap-2 text-lg"
          onClick={() => navigate("/suriya")}
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

