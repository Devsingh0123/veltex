import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fi';
import SubPageHero from '../components/ui/SubPageHero';

const ServicesPage = () => {
  const services = useSelector((state) => state.services.items);

  return (
    <div className="bg-white min-h-screen">
      <SubPageHero 
        title="Our Premium" 
        highlight="Services" 
        subtitle="We offer comprehensive 360-degree influencer marketing solutions tailored to your brand's growth and vision."
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: svc.color }}>
                {React.createElement(Icons[svc.icon], { size: 40, className: svc.iconColor })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{svc.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{svc.desc}</p>
              <ul className="space-y-3">
                {svc.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
