import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import StickyOfferBar from './components/StickyOfferBar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureBoxes from './components/FeatureBoxes';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import WhyChoose from './components/WhyChoose';
import WhatsIncluded from './components/WhatsIncluded';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scroll behavior
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <StickyOfferBar />
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="feature-boxes">
        <FeatureBoxes />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="screenshots">
        <Screenshots />
      </div>
      <div id="why-choose">
        <WhyChoose />
      </div>
      <div id="whats-included">
        <WhatsIncluded />
      </div>
      <div id="video">
        <VideoSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="trust">
        <TrustBadges />
      </div>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;