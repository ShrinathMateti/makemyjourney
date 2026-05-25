import { motion } from "framer-motion";

const destinations = [
  {
    image: "dest1.jpg",
    name: "Sikkim",
  },
  {
    image: "dest2.jpg",
    name: "Darjeeling",
  },
  {
    image: "dest3.jpg",
    name: "Gangtok",
  },
];

const Destinations = () => {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden py-24 bg-slate-50"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-slate-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-screen-xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Explore Astonishing
            <span className="block">Travel Destinations</span>
          </h1>
        </motion.div>

        {/* DESTINATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] cursor-pointer"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-[28px]" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-white/70 uppercase tracking-[3px] text-xs mb-2">
                  Luxury Destination
                </p>

                <h2 className="text-3xl font-bold text-white">{place.name}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-slate-900 rounded-[32px] px-8 py-14 md:px-16 text-center"
        >
          <p className="uppercase tracking-[4px] text-slate-400 text-xs mb-4">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Best Service We Strive
            <span className="block">To Provide Our Customers</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-relaxed">
            Seamless travel planning, premium experiences, and unforgettable
            journeys crafted with care and attention to every detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
