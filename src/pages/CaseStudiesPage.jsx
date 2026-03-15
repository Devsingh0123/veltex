import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import SubPageHero from '../components/ui/SubPageHero';

const CaseStudiesPage = () => {
  const caseStudies = useSelector((state) => state.caseStudies.items);

  return (
    <div className="bg-white min-h-screen">
      <SubPageHero 
        title="Success" 
        highlight="Stories" 
        subtitle="Explore how we've helped leading brands achieve exceptional results through strategic influencer collaborations."
      />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="aspect-video overflow-hidden flex items-center justify-center relative" style={{ backgroundColor: cs.color }}>
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                 <span className="text-gray-400 font-bold text-xl uppercase tracking-widest">Case Study Preview</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cs.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Detailed case study data will be presented here, showing campaign reach, engagement metrics, and brand ROI results."
                </p>
                <div className="flex gap-4">
                    <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full">Engagement</span>
                    <span className="px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-bold rounded-full">Growth</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
