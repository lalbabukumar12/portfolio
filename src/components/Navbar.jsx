import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 text-3xl font-bold text-white"
        >
          Lalbabu
          <span className="text-purple-500">Kumar</span>
          <span className="w-3 h-3 bg-purple-500 rounded-full mt-2" />
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setShowMenu((isOpen) => !isOpen)}
            className="text-2xl text-white cursor-pointer"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={() => setShowMenu(false)}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
