import React from "react";

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-8 bg-white/10 dark:bg-black/30 glass px-12 py-3 rounded-full shadow-lg backdrop-blur-md border border-white/20 animate-fade-in">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="text-lg font-semibold text-white hover:text-blue-300 transition-colors duration-200 tracking-wide"
      >
        {link.name}
      </a>
    ))}
  </nav>
);

export default Header; 