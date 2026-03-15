import React from 'react';
import { motion } from 'framer-motion';
import SubPageHero from '../components/ui/SubPageHero';

const CreatorsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <SubPageHero 
        title="Join Our" 
        highlight="Creator Network" 
        subtitle="Are you a content creator? Partner with world-class brands and grow your influence with Veltex."
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 text-center">

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
                { title: 'Global Reach', desc: 'Connect with brands from US, UK, Indonesia, and more.' },
                { title: 'AI Dashboard', desc: 'Track your performance and earnings with our smart tools.' },
                { title: 'Premium Brands', desc: 'Work with the top 100+ brands in the industry.' }
            ].map((item, i) => (
                <div key={i} className="p-8 bg-brand-light rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>

        <button className="px-10 py-4 bg-brand-blue text-white font-bold rounded-xl hover:shadow-xl transition-all">
            Apply as a Creator
        </button>
      </div>
    </div>
  );
};

export default CreatorsPage;
