import React from 'react';
import ContactSection from '../features/home/components/ContactSection';
import FAQ from '../features/home/components/FAQ';
import SubPageHero from '../components/ui/SubPageHero';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <SubPageHero 
        title="Get In" 
        highlight="Touch" 
        subtitle="Ready to scale your brand? Let's discuss your next breakthrough campaign."
      />
      <ContactSection />
      <div className="bg-brand-light">
          <FAQ />
      </div>
    </div>
  );
};

export default ContactPage;
