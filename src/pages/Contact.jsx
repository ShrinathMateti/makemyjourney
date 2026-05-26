import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully ✈️");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl uppercase tracking-[4px] text-slate-500 font-medium mb-2">
            Contact Us
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-200"
        >
          {/* Left Image - Hidden On Mobile */}
          <div className="relative hidden lg:flex h-full min-h-[520px] overflow-hidden group">
            <img
              src="contact.jpg"
              alt="Travel"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end w-full p-8 md:p-10">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[26px] p-6">
                <p className="uppercase tracking-[0.3em] text-[10px] text-white/70 mb-3">
                  Premium Travel
                </p>

                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Explore The World
                </h2>

                <p className="mt-4 text-sm text-white/70 leading-7">
                  Discover luxury destinations and unforgettable travel
                  experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white h-full flex items-center justify-center p-8 md:p-10">
            <div className="w-full max-w-md">
              {/* Title */}
              <div className="mb-6">
                <h2 className="text-3xl font-black text-slate-900">
                  Send Message
                </h2>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  We’ll get back to you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={sendMessage} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
                />

                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-12 rounded-xl text-white font-semibold text-sm cursor-pointer transition duration-300 ${
                    loading
                      ? "bg-blue-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
