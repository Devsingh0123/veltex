import { motion } from 'framer-motion';
import { statsData, achievementsData } from '../../../data/dummyData';
import * as Icons from 'react-icons/fi';
import React from 'react';

const Stats = () => {
  const stats = statsData;
  const achievements = achievementsData;
  return (
    <section className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[2rem] md:text-[2.8rem] font-extrabold text-gray-900 mb-14"
        >
          Largest <span className="text-brand-blue">Influencer Marketing</span> Platform in India
        </motion.h2>

        {/* Stats Grid */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-brand-blue leading-none mb-3">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm font-medium leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievements Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="text-center flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                  {React.createElement(Icons[item.icon], { size: 40, className: item.iconColor })}
                </div>
                <p className="text-gray-700 text-sm font-semibold leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
