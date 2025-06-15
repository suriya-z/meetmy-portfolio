
import React from "react";
import { useNavigate } from "react-router-dom";

const netflixLogo = (
  <span
    className="inline-flex items-center"
    aria-label="Minimal Stylish S Logo"
    style={{
      lineHeight: 1,
      userSelect: "none",
      fontFamily: "inherit"
    }}
  >
    {/* SVG stylized S, minimal/modern and geometric */}
    <svg
      width="38"
      height="42"
      viewBox="0 0 38 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block drop-shadow-sm"
      style={{
        display: "block"
      }}
      aria-hidden="true"
    >
      <path
        d="M34 6.5C31.5 3.5 25.5 2 19.5 2C13 2 6.5 4 6.5 9.5C6.5 16 22.5 16 22.5 20.5C22.5 24.5 8 24 8 32C8 38 17.5 38.5 25.5 36.5C30.5 35.2 33.5 31.5 29.5 28.5"
        stroke="#E50914"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
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
      {/* Subtle SVG "S" logo */}
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

