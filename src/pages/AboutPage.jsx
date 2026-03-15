import React from 'react';
import { motion } from 'framer-motion';
import SubPageHero from '../components/ui/SubPageHero';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <SubPageHero 
        title="We Are" 
        highlight="Veltex" 
        subtitle="India's leading influencer marketing agency dedicated to authentic storytelling."
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    With over 8 years of experience, Veltex has established itself as the leading influencer marketing agency in India. We believe in the power of authentic story-telling and human connection.
                </p>
                <div className="flex gap-8">
                    <div>
                        <div className="text-3xl font-extrabold text-brand-blue">8+ Years</div>
                        <div className="text-sm text-gray-500">Expertise</div>
                    </div>
                    <div>
                        <div className="text-3xl font-extrabold text-brand-green">100+</div>
                        <div className="text-sm text-gray-500">Brands Served</div>
                    </div>
                </div>
            </motion.div>
            <div className="aspect-square bg-brand-light rounded-[3rem] flex items-center justify-center">
                 <span className="text-gray-300 font-bold text-2xl rotate-45">Veltex Vision</span>
            </div>
        </div>

        <section className="py-16 bg-brand-dark rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                To empower brands and creators through data-driven strategies and AI-powered insights, creating a transparent and highly effective influencer ecosystem.
            </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
