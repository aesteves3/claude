import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CoursesSection from '../components/home/CoursesSection';
import InternationalSection from '../components/home/InternationalSection';
import AboutSection from '../components/home/AboutSection';
import CTASection from '../components/home/CTASection';
import ContactSection from '../components/home/ContactSection';
export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <InternationalSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </>
  );
}