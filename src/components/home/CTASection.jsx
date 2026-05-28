import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="enroll" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Grid lines decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center mb-8"
        >
          <Compass className="w-12 h-12 text-orange" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="font-archivo text-3xl md:text-5xl tracking-wide mb-6"
        >
          PRONTO PARA ASSUMIR
          <br />
          <span className="text-orange">O COMANDO?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="font-inter text-base text-white/60 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Matricule-se agora e dê o primeiro passo rumo à sua habilitação oficial. Turmas abertas com vagas limitadas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-mono text-xs tracking-[0.15em] bg-orange text-white px-10 py-4 hover:bg-orange/90 transition-all duration-500 ease-ship min-h-[44px]"
          >
            MATRICULE-SE AGORA
          </a>
          <a
            href="#courses"
            className="inline-flex items-center justify-center font-mono text-xs tracking-[0.15em] border border-white/30 text-white px-10 py-4 hover:border-orange hover:text-orange transition-all duration-500 ease-ship min-h-[44px]"
          >
            VER TODOS OS CURSOS
          </a>
        </motion.div>
      </div>
    </section>
  );
}