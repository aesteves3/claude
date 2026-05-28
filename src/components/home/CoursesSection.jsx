import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

const courseImages = {
  arrais: '/images/arrais1.png',
  mestre: '/images/mestre1.png',
  capitao: '/images/cap1.png',
};

const courses = [
  {
    certification_level: 'arrais',
    title: 'ARRAIS AMADOR',
    description: 'Habilitação inicial para condução de embarcações em navegação interior. O primeiro passo para quem deseja navegar com autonomia.',
    duration_hours: 11,
    price: '100. + prática',
  },
  {
    certification_level: 'mestre',
    title: 'MESTRE AMADOR',
    description: 'Habilitação para navegação costeira. Amplie seus horizontes e navegue além dos limites interiores com competência técnica avançada.',
    duration_hours: 16,
    price: 350,
  },
  {
    certification_level: 'capitao',
    title: 'CAPITÃO AMADOR',
    description: 'A mais alta habilitação amadora. Domínio completo de navegação astronômica, meteorologia oceânica e comando de embarcações sem limites.',
    duration_hours: 60,
    price: 1000,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="font-mono text-xs tracking-[0.3em] text-orange mb-4"
            >
              CARTA DE CURSOS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="font-archivo text-3xl md:text-5xl tracking-wide text-navy"
            >
              CERTIFICAÇÕES
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="font-inter text-sm text-muted-foreground max-w-md leading-relaxed"
          >
            Do primeiro comando ao domínio completo. Cada nível é uma escalada precisa na hierarquia da navegação brasileira.
          </motion.p>
        </div>

        {/* Thin instrumentation line */}
        <div className="h-px bg-chart-grey mb-16" />

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {courses.map((course, index) => (
            <CourseCard
              key={course.certification_level}
              course={course}
              index={index}
              image={courseImages[course.certification_level]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}