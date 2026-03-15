import React from 'react';
import Hero from '../features/home/components/Hero';
import BrandLogos from '../features/home/components/BrandLogos';
import Stats from '../features/home/components/Stats';
import HowWeHelp from '../features/home/components/HowWeHelp';
import CaseStudies from '../features/home/components/CaseStudies';
import Services from '../features/home/components/Services';
import ExpertsStrategy from '../features/home/components/ExpertsStrategy';
import WhyChooseUs from '../features/home/components/WhyChooseUs';
import FAQ from '../features/home/components/FAQ';
import ContactSection from '../features/home/components/ContactSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandLogos />
      <Stats />
      <HowWeHelp />
      <CaseStudies />
      <Services />
      <ExpertsStrategy />
      <WhyChooseUs />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default HomePage;
