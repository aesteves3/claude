import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Wind, Waves, Navigation } from 'lucide-react';

const HERO_IMAGE = '/images/hero-boat.png';

export default function HeroSection() {
const coords = { lat: '22°54\'10"S', lon: '43°10\'30"W' };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Aerial view of yacht on ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80" />
      </div>

      {/* HUD Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 pt-24 pb-12">
        {/* Top HUD */}
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-mono text-xs text-white/50 tracking-wider space-y-1"
          >
            <p>NAUTK // SISTEMA DE NAVEGAÇÃO</p>
            <p className="text-orange/70">STATUS: ONLINE</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="hidden md:flex items-center gap-6 font-mono text-xs text-white/40 tracking-wider"
          >
            <span className="flex items-center gap-1.5"><Wind className="w-3 h-3" /> 12 KT NE</span>
            <span className="flex items-center gap-1.5"><Waves className="w-3 h-3" /> MAR 0.8M</span>
            <span className="flex items-center gap-1.5"><Navigation className="w-3 h-3" /> HDG 045°</span>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            className="font-mono text-xs md:text-sm tracking-[0.3em] text-orange mb-6"
          >
            INSTITUTO DE COMANDO NÁUTICO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            className="font-archivo text-4xl md:text-6xl lg:text-7xl tracking-wide text-white leading-none mb-6"
          >
            SEU RUMO
            <br />
            <span className="text-orange">COMEÇA AQUI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
            className="font-inter text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-10"
          >
            Preparação completa para as credenciais da Marinha do Brasil - de Arrais Amador à Capitão Amador.
            <br /><br />
            Certificações Náuticas Internacionais que garantem possuir os conhecimentos teóricos e práticos necessários para operar embarcações em águas estrangeiras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#courses"
              className="inline-flex items-center justify-center font-mono text-xs tracking-[0.15em] bg-orange text-white px-8 py-4 hover:bg-orange/90 transition-all duration-500 ease-ship min-w-[44px] min-h-[44px]"
            >
              EXPLORAR CURSOS
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center font-mono text-xs tracking-[0.15em] border border-white/30 text-white px-8 py-4 hover:border-orange hover:text-orange transition-all duration-500 ease-ship min-w-[44px] min-h-[44px]"
            >
              SOBRE O INSTITUTO
            </a>
          </motion.div>
        </div>

        {/* Bottom HUD */}
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="font-mono text-xs text-white/30 tracking-wider"
          >
            <p>{coords.lat}</p>
            <p>{coords.lon}</p>
          </motion.div>

          <motion.a
            href="#courses"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-orange transition-colors duration-300"
          >
            <span className="font-mono text-xs tracking-wider">SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
