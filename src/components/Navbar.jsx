import { useState } from "react";
import { FaPlane, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Tour Packages", href: "#tourpackages" },
    { name: "Car Rent", href: "#car-rent" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 py-4">
        
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0"
        >
          <FaPlane className="text-3xl md:text-4xl text-slate-800" />

          <span className="text-2xl md:text-3xl font-bold text-slate-800 whitespace-nowrap">
            Make My Journey
          </span>
        </a>

        {/* Toggle Button */}
        <button
          className="md:hidden text-slate-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 bg-white md:bg-transparent rounded-lg">
            
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-slate-700 font-medium hover:text-blue-700 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;