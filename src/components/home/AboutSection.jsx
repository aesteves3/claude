import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';

const ABOUT_IMAGE = 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/84f5cf659_generated_43792659.png';

const stats = [
{ icon: Shield, value: '15+', label: 'ANOS DE EXPERIÊNCIA' },
{ icon: Users, value: '2.500+', label: 'NAVEGADORES FORMADOS' },
{ icon: Award, value: '98%', label: 'TAXA DE APROVAÇÃO' },
{ icon: Target, value: '3', label: 'NÍVEIS DE CERTIFICAÇÃO' }];


export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative">
            
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={ABOUT_IMAGE}
                alt="Brass sextant on nautical chart"
                className="w-full h-full object-cover" />
              
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-orange/30" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="font-mono text-xs tracking-[0.3em] text-orange mb-4">
              
              SOBRE O INSTITUTO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="font-archivo text-3xl md:text-4xl tracking-wide text-navy mb-6">
              
              PRECISÃO É
              <br />
              NOSSO RUMO
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              className="font-inter text-base text-muted-foreground leading-relaxed mb-8">
              
              A NAUTK é um instituto de formação náutica dedicado à preparação de navegadores para as certificações oficiais da Marinha do Brasil. Nossa metodologia combina instrução teórica rigorosa com experiência prática em embarcações, garantindo que cada aluno esteja totalmente preparado para os exames e para o mar.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
              className="font-inter text-base text-muted-foreground leading-relaxed mb-12">
              
              Com instrutores certificados Nacional e Internacionalmente e anos de experiência em águas brasileiras, oferecemos cursos que vão desde a habilitação inicial de Arrais Amador até a formação completa de Capitão Amador.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => null












              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}