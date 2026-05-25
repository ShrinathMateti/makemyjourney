import { useState } from "react";
import { FaLocationArrow, FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Show toast immediately
    toast.info("📨 Your message has been submitted!");

    // Reset form and stop loading after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-slate-800" id="contact">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Section Heading */}
      <section className="text-white py-10">
        <h1 className="text-center font-semibold text-4xl mt-10">Get In Touch</h1>
        <p className="text-center text-lg">Have any queries? Get in touch today.</p>
      </section>

      {/* Grid Layout */}
      <section className="container mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white text-slate-700 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800">
                <FaLocationArrow className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Address</h4>
                <p className="text-sm text-slate-700">INDIA</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white text-slate-700 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">E-mail Us</h4>
                <p className="text-sm text-slate-700">makemyjourney@info</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white text-slate-700 shadow-md">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800">
                <IoIosCall className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                <p className="text-sm text-slate-700">+91 1233222324</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Send a Message</h2>
            <form onSubmit={sendEmail} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-600">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  required
                  className="w-full mt-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white cursor-pointer transition ${
                  loading
                    ? "bg-slate-500 cursor-not-allowed"
                    : "bg-slate-800 hover:bg-slate-700"
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
