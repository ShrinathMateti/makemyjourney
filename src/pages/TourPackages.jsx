import { motion } from "framer-motion";
import {
  FaHeart,
  FaLocationArrow,
  FaArrowRight,
} from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

const tours = [
  {
    image: "tour1.jpg",
    title: "Adventure & Wildlife Escape",
    days: "08 Nights / 09 Days",
  },
  {
    image: "tour2.jpg",
    title: "Wellness & Spiritual Retreat",
    days: "02 Nights / 03 Days",
  },
  {
    image: "tour3.jpg",
    title: "Hill Station Experience",
    days: "05 Nights / 06 Days",
  },
  {
    image: "tour4.jpg",
    title: "Luxury Nature Journey",
    days: "08 Nights / 09 Days",
  },
  {
    image: "tour5.jpg",
    title: "Adventure Mountain Tour",
    days: "08 Nights / 09 Days",
  },
  {
    image: "tour6.jpg",
    title: "Relaxing Wildlife Escape",
    days: "02 Nights / 03 Days",
  },
  {
    image: "tour7.jpg",
    title: "Spiritual Discovery Tour",
    days: "04 Nights / 05 Days",
  },
  {
    image: "tour8.jpg",
    title: "Premium Retreat Experience",
    days: "04 Nights / 05 Days",
  },
];

const features = [
  {
    icon: <FaLocationArrow />,
    title: "Beautiful Destinations",
    desc: "Carefully selected places crafted for unforgettable journeys.",
  },
  {
    icon: <FaHeart />,
    title: "Personalized Guidance",
    desc: "Travel planning designed around your comfort and preferences.",
  },
  {
    icon: <SlBadge />,
    title: "Trusted Services",
    desc: "Exceptional support and reliable experiences every time.",
  },
];

// FADE ANIMATION
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
    },
  }),
};

const TourPackages = () => {
  return (
    <div id="tourpackages" className="py-20 bg-white overflow-hidden">
      
      {/* HEADER */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-14 px-6"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          Explore Tour Packages
        </h1>

        <div className="w-16 h-[2px] bg-slate-900 mx-auto mt-4 rounded-full"></div>

        <p className="max-w-xl mx-auto mt-4 text-slate-500 text-sm md:text-base">
          Discover unforgettable journeys crafted with breathtaking destinations
          and premium travel experiences.
        </p>
      </motion.section>

      {/* TOUR GRID */}
      <section className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[28px] cursor-pointer"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[28px]" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 md:p-6 text-white">
                
                <p className="text-xs md:text-sm text-slate-300 font-medium mb-2">
                  {tour.days}
                </p>

                <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">
                  {tour.title}
                </h3>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
                >
                  View Details

                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="border border-slate-300 rounded-[28px] p-8 bg-white hover:shadow-xl transition duration-300"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl mb-5">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourPackages;