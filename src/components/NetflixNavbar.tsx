
import React from "react";
import { useNavigate } from "react-router-dom";

// Stylized "S" logo with two dots, inspired by the user-provided reference image
const netflixLogo = (
  <span
    className="inline-flex items-center"
    aria-label="Geometric S Logo"
    style={{
      lineHeight: 1,
      userSelect: "none",
      fontFamily: "inherit"
    }}
  >
    <svg
      width="38"
      height="42"
      viewBox="0 0 38 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
      aria-hidden="true"
    >
      {/* "S" created using a path; two dots as circles */}
      {/* Main "S" curve */}
      <path
        d="M32 10
           Q24 3, 15 10
           Q7 17, 20 23
           Q33 29, 21 37"
        stroke="#E50914"
        strokeWidth="3.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Top dot */}
      <circle
        cx="29.2"
        cy="7.5"
        r="2.8"
        fill="#E50914"
      />
      {/* Bottom dot */}
      <circle
        cx="8.8"
        cy="34"
        r="2.8"
        fill="#E50914"
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
      {/* Stylized geometric S logo */}
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
