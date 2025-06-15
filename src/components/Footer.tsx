
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-netflix-black border-t border-netflix-medium-gray/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-netflix-light-gray hover:text-netflix-red transition-colors duration-200 p-2"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <div className="mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-netflix-medium-gray hover:bg-netflix-light-gray/20 text-white font-medium px-6 py-3 rounded transition-all duration-200 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-netflix-medium-gray/20 pt-8">
            <p className="text-netflix-light-gray">
              &copy; 2024 Your Name. All rights reserved.
            </p>
            <p className="text-netflix-light-gray/60 text-sm mt-2">
              Inspired by Netflix • Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
