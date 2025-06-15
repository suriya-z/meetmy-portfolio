
import React from "react";
import { useNavigate } from "react-router-dom";

// Aesthetic, stylized "S" logo, with gradient and shadow to mimic a Netflix-style effect
const netflixLogo = (
  <span
    className={`
      relative
      text-netflix-red font-extrabold text-4xl sm:text-5xl leading-none select-none
      rounded-sm
      px-1
      transition-transform duration-200
      font-netflix
      before:content-[''] before:absolute before:inset-0 before:rounded-sm
    `}
    style={{
      // Diagonal gradient overlay for depth
      background: `linear-gradient(135deg, #e50914 35%, #b81d24 65%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      // subtle 3D look with text shadow
      textShadow: "1px 2px 6px rgba(20,0,0,0.32), 0 1px 0.5px #b81d24",
    }}
    aria-label="Stylish S Logo"
  >
    S
    {/* Optional: Overlay a light highlight for extra "Netflix" depth */}
    <span
      aria-hidden="true"
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background:
          "linear-gradient(120deg,rgba(255,255,255,0.18) 22%,rgba(255,255,255,0) 56%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: "blur(0.5px)",
      }}
    >
      S
    </span>
  </span>
);

const NAV_ITEMS = [
  { label: "About me", href: "/suriya" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const AVATAR_SRC = "/lovable-uploads/5cd95a7f-42bc-4f73-9fd6-87b7a56be546.png";

const NetflixNavbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#111] text-white flex items-center px-6 py-2 fixed top-0 left-0 z-50 h-14 shadow-sm border-b border-black/30">
      {/* Stylized Logo */}
      <div
        className="mr-8 cursor-pointer flex-shrink-0 select-none"
        tabIndex={0}
        onClick={() => navigate("/")}
        aria-label="Go to Home"
        style={{
          lineHeight: 0.9,
        }}
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
