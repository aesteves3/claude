import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import HeroSection from '../components/home/HeroSection';
import CoursesSection from '../components/home/CoursesSection';
import InternationalSection from '../components/home/InternationalSection';
import AboutSection from '../components/home/AboutSection';
import CTASection from '../components/home/CTASection';
import ContactSection from '../components/home/ContactSection';
export default function Home() {
  usePageMeta(
    'NAUTK — Instituto de Comando Marítimo',
    'Preparação completa para certificações náuticas da Marinha do Brasil. Cursos de Arrais Amador, Mestre Amador e Capitão Amador em São Paulo, Ilhabela e Represa Guarapiranga.'
  );
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