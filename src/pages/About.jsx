import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-10 md:mt-16 mb-20 md:mb-32">
      <section
        id="about"
        className="max-w-screen-xl mx-auto px-5 sm:px-6 py-20 md:py-24 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block mb-5"
            >
              <span className="bg-blue-100 text-blue-700 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                ✈️ ABOUT MAKE MY JOURNEY
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
            >
              Explore The World
              <span className="block text-blue-600 mt-2">
                With Confidence
              </span>
            </motion.h2>

            {/* Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 rounded-full mt-5 md:mt-6 mb-6 md:mb-8"
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5"
            >
              Welcome to
              <span className="font-semibold text-blue-600">
                {" "}
                Make My Journey
              </span>
              , where every destination becomes a memorable story. We create
              personalized travel experiences designed with comfort, luxury,
              and adventure in mind.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 md:mb-10"
            >
              From romantic escapes to thrilling adventures and family
              vacations, our team ensures every journey feels seamless,
              exciting, and truly unforgettable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-8"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/20 transition duration-300 text-center"
              >
                Plan Your Trip
              </a>

              {/* Secondary CTA */}
              <a
                href="#destinations"
                className="bg-slate-100 hover:bg-slate-200 text-black px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/20 transition duration-300 text-center"
              >
                Explore Destinations

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mt-10 md:mt-0"
          >
            {/* Background Glow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8 
                         w-40 h-40 md:w-64 md:h-64 
                         bg-blue-400/20 rounded-full blur-3xl"
            />

            {/* Main Image Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl"
            >
              <img
                src="about.jpg"
                alt="About Make My Journey"
                className="w-full 
                           h-[320px] sm:h-[420px] md:h-[550px] 
                           object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Floating Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto 
                           md:max-w-sm
                           bg-white/10 backdrop-blur-xl 
                           border border-white/20 
                           rounded-2xl md:rounded-3xl 
                           px-4 py-4 md:px-6 md:py-5 
                           text-white shadow-xl"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-snug">
                  Travel Beyond Limits
                </h3>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Discover destinations crafted for unforgettable moments.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;