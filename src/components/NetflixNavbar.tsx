
import React from "react";
import { useNavigate } from "react-router-dom";

// Show just the letter "S" like Netflix's "N" logo, but without the glowy effect
const netflixLogo = (
  <span className="text-netflix-red font-bold text-3xl tracking-wide font-netflix select-none leading-none">
    S
  </span>
);

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "#movies" },
  { label: "TV Shows", href: "#tvshows" },
  { label: "Latest", href: "#latest" },
  { label: "My List", href: "#my-list" },
];

const AVATAR_SRC = "/lovable-uploads/5cd95a7f-42bc-4f73-9fd6-87b7a56be546.png";

const NetflixNavbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#111] text-white flex items-center px-6 py-2 fixed top-0 left-0 z-50 h-14 shadow-sm border-b border-black/30">
      {/* Logo - S styled like the Netflix N */}
      <div
        className="mr-8 cursor-pointer flex-shrink-0"
        tabIndex={0}
        onClick={() => navigate("/")}
        aria-label="Go to Home"
      >
        {netflixLogo}
      </div>

      {/* Navigation links */}
      <ul className="flex items-center gap-6 text-[15px] font-medium">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-white/90 hover:text-white transition-colors"
              tabIndex={0}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Filler (left align) */}
      <div className="flex-1" />

      {/* Profile picture avatar */}
      <div className="flex-shrink-0">
        <img
          src={AVATAR_SRC}
          alt="profile"
          className="w-9 h-9 rounded-md object-cover border border-white/15"
          draggable={false}
        />
      </div>
    </nav>
  );
};

export default NetflixNavbar;

