import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ brand: '', website: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%]"
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-extrabold text-gray-900 leading-tight">
              Want to boost your business through influencer marketing?
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Being India's best influencer marketing agency, we leverage data-driven methodologies and research to accomplish your goals. Skyrocket your business today!
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[60%] w-full"
          >
            <div className="bg-[#1e1b4b] rounded-2xl p-8">
              <h3 className="text-white text-xl font-bold text-center mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#2d2a6e] border border-[#3d3a8e] text-white text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue"
                  />
                  <input
                    type="text"
                    name="website"
                    placeholder="Website Mobile / App Link"
                    value={form.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#2d2a6e] border border-[#3d3a8e] text-white text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#2d2a6e] border border-[#3d3a8e] text-white text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#2d2a6e] border border-[#3d3a8e] text-white text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#2d2a6e] border border-[#3d3a8e] text-white text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-bold rounded-lg transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
