import { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Tour Packages", href: "#tourpackages" },
    { name: "Car Rent", href: "#car-rent" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
              <FaPlaneDeparture className="text-white text-xl" />
            </div>

            <div className="flex flex-col leading-tight">
              <span
                className={`text-2xl font-black tracking-tight transition duration-300 ${
                  scrolled
                    ? "text-slate-900"
                    : "text-white"
                }`}
              >
                MakeMyJourney
              </span>

              <span
                className={`text-xs tracking-[0.3em] uppercase transition duration-300 ${
                  scrolled
                    ? "text-slate-500"
                    : "text-white/70"
                }`}
              >
                Premium Travel
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`relative px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    scrolled
                      ? "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-3xl transition duration-300 ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden"
          >
            <div className="mx-4 mt-4 rounded-3xl bg-white/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
              <ul className="flex flex-col p-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-4 rounded-2xl text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

                {/* Mobile CTA */}
                <li className="mt-4">
                  <a
                    href="#booking"
                    className="block text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg"
                  >
                    Book Your Trip
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;