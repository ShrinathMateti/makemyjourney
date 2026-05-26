import { useState } from "react";
import { FaLocationArrow, FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    // Toast Message
    toast.success("📨 Your message has been submitted!");

    // Reset Form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-slate-800" id="contact">
      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Heading */}
      <section className="text-white py-10 md:py-14 px-5">
        <h1 className="text-center mt-6 font-semibold text-3xl sm:text-4xl">
          Get In Touch
        </h1>

        <p className="text-center text-sm sm:text-lg text-slate-300 mt-3">
          Have any queries? Get in touch today.
        </p>
      </section>

      {/* Main Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-20 pb-14 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* LEFT SIDE - Hidden On Mobile */}
          <div className="hidden md:grid grid-cols-1 gap-5">
            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[30px] h-[260px] group shadow-2xl">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Travel"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-white/70 text-sm tracking-[3px] uppercase mb-2">
                  Explore
                </p>

                <h2 className="text-white text-3xl font-bold leading-tight">
                  Travel Beyond <br /> Boundaries
                </h2>
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-slate-800 rounded-[30px] overflow-hidden border border-white/15 shadow-2xl">
              

              {/* Contact Info */}
              <div className="p-4 space-y-5">
                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-lg">
                    <FaLocationArrow className="text-white text-sm" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Address</p>

                    <h4 className="font-semibold text-white">INDIA</h4>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-lg">
                    <FaEnvelope className="text-white text-sm" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-400">E-mail</p>

                    <h4 className="font-semibold text-white truncate">
                      makemyjourney@info
                    </h4>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-lg">
                    <IoIosCall className="text-white text-base" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Phone</p>

                    <h4 className="font-semibold text-white">+91 1233222324</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-slate-100 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-6">
              Send a Message
            </h2>

            <form onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-800"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-800"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-800 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl text-white font-medium transition duration-300 ${
                  loading
                    ? "bg-slate-500 cursor-not-allowed"
                    : "bg-slate-800 hover:bg-slate-700 cursor-pointer"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
