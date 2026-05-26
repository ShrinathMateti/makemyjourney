import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPlaneDeparture,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#071321] text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Brand */}
          <div className="text-center lg:text-left max-w-md">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-2xl">
                <FaPlaneDeparture className="text-white text-2xl" />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  MakeMyJourney
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">
                  Premium Travel
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm md:text-base text-white/60 leading-7">
              Discover luxury travel experiences, curated destinations,
              unforgettable adventures, and premium journeys crafted for modern explorers.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 text-sm font-semibold">
            <a
              href="/#"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-white/70 hover:text-white transition duration-300"
            >
              About
            </a>

            <a
              href="#destinations"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Destinations
            </a>

            <a
              href="#tourpackages"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Tour Packages
            </a>

            <a
              href="#car-rent"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Car Rent
            </a>

            
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="/"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-sky-500 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="/"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} MakeMyJourney. All rights reserved.
          </p>

          <p className="text-sm text-white/40">
            Designed By Shrinath Mateti
          </p>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
    </footer>
  );
};

export default Footer;