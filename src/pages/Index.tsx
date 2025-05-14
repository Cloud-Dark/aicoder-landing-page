import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import CodingAnimation from '../components/CodingAnimation';

const Index = () => {
  return (
    <div>
      <Hero />
      <CodingAnimation />
      <Features />
      <Pricing />
      <Footer />
      {/* MobileNav is fixed position, doesn't need to be inside a section */}
      <MobileNav />
    </div>
  );
};

export default Index;
