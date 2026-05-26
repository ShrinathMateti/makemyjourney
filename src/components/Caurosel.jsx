import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "banner1.webp",
    title: "Luxury Redefined",
    subtitle: "Experience the world's most beautiful destinations",
  },
  {
    image: "banner2.jpeg",
    title: "Travel Beyond Limits",
    subtitle: "Premium journeys crafted for unforgettable moments",
  },
  {
    image: "banner3.jpg",
    title: "Discover Paradise",
    subtitle: "Elegant tours designed for modern explorers",
  },
];

export default function PremiumCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 7, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover"
          />

          {/* Dark Luxury Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <span className="uppercase tracking-[0.4em] text-sm md:text-base text-white/70">
              Premium Travel Experience
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-black  text-white max-w-5xl">
              {slides[current].title}
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              {slides[current].subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="#tourpackages"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-2xl"
              >
                Explore Tours
              </a>

              <a
                href="#destinations"
                className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition duration-300"
              >
                View Destinations
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              current === index
                ? "w-14 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          >
            {current === index && (
              <motion.div
                layoutId="indicator"
                className="absolute inset-0 bg-white rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-10 right-10 z-30 text-white/70 text-sm tracking-[0.3em]">
        0{current + 1} / 0{slides.length}
      </div>

      {/* Socials */}
      <div className="absolute left-8 bottom-10 z-30 hidden md:flex flex-col gap-4 text-white/60">
        <span className="rotate-[-90deg] origin-left text-xs tracking-[0.4em]">
          FOLLOW US
        </span>
      </div>
    </section>
  );
}
