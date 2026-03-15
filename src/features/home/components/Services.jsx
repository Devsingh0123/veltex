import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import * as Icons from 'react-icons/fi';
import React from 'react';

const Services = () => {
  const services = useSelector((state) => state.services.items);
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[1.8rem] md:text-[2.5rem] font-extrabold text-gray-900 mb-4"
        >
          Influencer Marketing Services Offered By Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-[0.95rem] leading-relaxed max-w-4xl mb-12"
        >
          We are the top influencer marketing company in India that is most respected, as we offer complete 360-degree influencer marketing campaign solutions through India's top influencers on YouTube, Instagram, Snapchat, Facebook, Twitter, and LinkedIn.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: svc.color }}>
                {React.createElement(Icons[svc.icon], { size: 36, className: svc.iconColor })}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{svc.desc}</p>
              <ul className="space-y-1.5">
                {svc.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-brand-blue text-white text-sm font-bold rounded-md hover:bg-brand-blue/90 transition-colors"
          >
            Talk to Influencer Marketing experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
