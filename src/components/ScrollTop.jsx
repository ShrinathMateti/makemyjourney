// components/ScrollToTop.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center cursor-pointer backdrop-blur-xl hover:scale-110 transition-all duration-300"
      >
        <FaArrowUp className="text-lg" />
      </button>
    )
  );
};

export default ScrollToTop;
