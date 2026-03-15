import React from 'react';
import { motion } from 'framer-motion';

const SubPageHero = ({ title, subtitle, highlight }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, var(--color-brand-dark) 0%, #003366 40%, #001a33 100%)' }}>
      <div className="absolute inset-0 z-0 bg-brand-green/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 top-0 left-0 w-[500px] h-[500px] rounded-full" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[2.8rem] md:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            {title} <span className="text-brand-green italic">{highlight}</span>
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SubPageHero;
