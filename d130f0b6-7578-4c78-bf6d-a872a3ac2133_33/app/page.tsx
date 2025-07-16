
'use client';

import Link from 'next/link';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EpisodesSection from './components/EpisodesSection';
import TestimonialsSection from './components/TestimonialsSection';
import SponsorsSection from './components/SponsorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      <TestimonialsSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
