import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, Award, ArrowRight, MapPin, Anchor, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SAILING_IMAGE, CERT_IMAGE } from '@/lib/internationalData';
import PracticalClassesSection from './PracticalClassesSection';

const providers = [
  {
    acronym: 'ASA',
    name: 'American Sailing Association',
    tagline: 'LÍDER EM EDUCAÇÃO NÁUTICA NOS EUA E CARIBE',
    subtitle: 'ASA — American Sailing Association',
    description: 'Principal organização de educação náutica dos EUA com mais de 50 anos de história. 6 níveis progressivos de certificação — do ASA 101 ao ASA 106 — reconhecidos globalmente, especialmente por charteiras no Caribe e Mediterrâneo.',
    highlights: ['6 níveis progressivos de certificação', 'Aceita em mais de 100 países', 'ASA 104 equivalente ao ICC europeu', 'Reconhecida por charteiras do Caribe'],
    image: CERT_IMAGE,
    path: '/internacional/asa',
    website: 'https://americansailing.com',
  },
  {
    acronym: 'NAUTICED',
    name: 'NauticEd Sailing Education',
    tagline: 'RECONHECIDO EM TODOS OS PAÍSES MEDITERRÂNEOS',
    description: 'Uma das únicas organizações fora da RYA a emitir a Sailing License & Credentials (SLC). Cursos online combinam teoria, logbook eletrônico e avaliação presencial — ideal para charter na Europa, Caribe e Mediterrâneo.',
    highlights: ['Sailing License & Credentials (SLC)', 'Aceita em todos os países mediterrâneos', 'Logbook eletrônico verificável', 'Equivalente ao ICC'],
    image: SAILING_IMAGE,
    path: '/internacional/nauticed',
    website: 'https://www.nauticed.org',
  },
];

export default function InternationalSection() {
  return (
    <section id="international" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/40">
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
              CERTIFICAÇÕES INTERNACIONAIS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="font-archivo text-3xl md:text-5xl tracking-wide text-navy"
            >
              NAVEGUE O MUNDO
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="font-inter text-sm text-muted-foreground max-w-md leading-relaxed"
          >
            Além das certificações da Marinha do Brasil, preparamos você para obter credenciais reconhecidas globalmente por charters, marinas e autoridades marítimas internacionais.
          </motion.p>
        </div>

        <div className="h-px bg-chart-grey mb-16" />

        {/* Provider Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {providers.map((p, index) => (
            <motion.div
              key={p.acronym}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
              className="border border-chart-grey hover:border-orange/30 transition-colors duration-300 ease-ship group"
            >
              {/* Image */}
              <Link to={p.path} className="block relative overflow-hidden aspect-[16/7]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-ship" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-mono text-xs tracking-[0.25em] text-orange mb-1">{p.acronym}</p>
                  <h3 className="font-archivo text-2xl md:text-3xl tracking-wide text-white">{p.acronym}</h3>
                </div>
              </Link>

              {/* Content */}
              <div className="p-8">
                {p.subtitle && <p className="font-mono text-xs tracking-wider text-navy mb-1">{p.subtitle}</p>}
                <p className="font-mono text-xs tracking-wider text-muted-foreground mb-3">{p.tagline}</p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                  {p.highlights.map((h, i) => (
                    <span key={i} className="flex items-start gap-2 font-inter text-sm text-navy">
                      <CheckCircle className="w-3 h-3 text-orange flex-shrink-0 mt-0.5" /> {h}
                    </span>
                  ))}
                </div>

                <Link
                  to={p.path}
                  className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] bg-navy text-white py-4 hover:bg-orange transition-all duration-500 ease-ship min-h-[44px]"
                >
                  VER CERTIFICAÇÕES <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practical Classes */}
        <div className="h-px bg-chart-grey mt-20" />
        <PracticalClassesSection embedded />

        {/* Partner Schools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-20"
        >
          <div className="h-px bg-chart-grey mb-14" />

          <p className="font-mono text-xs tracking-[0.3em] text-orange mb-4">COMPLEMENTO PRÁTICO</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h3 className="font-archivo text-2xl md:text-3xl tracking-wide text-navy">
              ESCOLAS NÁUTICAS PARCEIRAS
            </h3>
            <p className="font-inter text-sm text-muted-foreground max-w-md leading-relaxed">
              A NAUTK oferece a base teórica, enquanto as Escolas parceiras fornecem o complemento prático — embarcações, instrutores certificados e navegação real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BL3 */}
            <div className="border border-chart-grey p-8 hover:border-orange/30 transition-colors duration-300 ease-ship">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="font-mono text-xs tracking-[0.25em] text-orange mb-1">PARCEIRA PRÁTICA</p>
                  <h4 className="font-archivo text-xl tracking-wide text-navy">BL3 ESCOLA DE IATISMO</h4>
                </div>
                <img src="https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/0e4590e13_bl3_logo.jpeg" alt="BL3" className="w-12 h-12 object-contain rounded-full flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-5">
                <MapPin className="w-3 h-3 text-orange" />
                <span>Ilhabela — SP</span>
              </div>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">
                Desde 1994, a BL3 é referência no iatismo brasileiro — e um dos melhores lugares do mundo para velejar, na palavra do bicampeão olímpico Robert Scheidt. Oferece vela oceânica básica e intermediária, curso de Arrais Amador, participação em regatas e charters em Ilhabela.
              </p>
              <div className="space-y-2 mb-6">
                {['Vela oceânica básica e intermediária', 'Curso de Arrais Amador', 'Participação em regatas', 'Charters e travessias oceânicas', 'Frota de veleiros oceânicos preparados', 'Mais de 30 anos de experiência'].map((item, i) => (
                  <span key={i} className="flex items-start gap-2 font-inter text-sm text-navy">
                    <CheckCircle className="w-3 h-3 text-orange flex-shrink-0 mt-0.5" /> {item}
                  </span>
                ))}
              </div>
              <a
                href="https://www.bl3.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] border border-orange text-orange py-3 hover:bg-orange hover:text-white transition-all duration-500 ease-ship min-h-[44px]"
              >
                VISITAR BL3 <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Kaluanã */}
            <div className="border border-chart-grey p-8 hover:border-orange/30 transition-colors duration-300 ease-ship">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="font-mono text-xs tracking-[0.25em] text-orange mb-1">PARCEIRA PRÁTICA</p>
                  <h4 className="font-archivo text-xl tracking-wide text-navy">KALUANÃ SAILING TEAM</h4>
                </div>
                <img src="https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/c7227be61_kalua_logo.png" alt="Kaluanã" className="w-16 h-10 object-contain flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-5">
                <MapPin className="w-3 h-3 text-orange" />
                <span>Represa Guarapiranga, São Paulo — SP</span>
              </div>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-6">
                Sediada no Clube de Campo do Castelo às margens da Represa Guarapiranga, a Kaluanã tem o propósito de aproximar pessoas da vela com formação de qualidade. Escola fundadora da ABEV, oferece vela adulto e infantil, clínicas de especialização e participação em regatas.
              </p>
              <div className="space-y-2 mb-6">
                {['Curso básico de vela adulto (iniciante)', 'Vela infantil — Optimist', 'Clínicas de balão e regata', 'Participação em regatas oficiais', 'Fundadora da ABEV', 'Localização central em São Paulo'].map((item, i) => (
                  <span key={i} className="flex items-start gap-2 font-inter text-sm text-navy">
                    <CheckCircle className="w-3 h-3 text-orange flex-shrink-0 mt-0.5" /> {item}
                  </span>
                ))}
              </div>
              <a
                href="https://www.escolakaluana.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] border border-orange text-orange py-3 hover:bg-orange hover:text-white transition-all duration-500 ease-ship min-h-[44px]"
              >
                VISITAR KALUANÃ <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 p-8 md:p-10 border border-orange/20 bg-orange/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-archivo text-lg text-navy mb-1">PREPARAÇÃO COMBINADA</p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed max-w-xl">
                Combine sua certificação da Marinha do Brasil com uma credencial internacional NauticEd ou ASA. Nossos assessores orientam você na melhor rota de certificação para seus objetivos.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] bg-orange text-white px-8 py-4 hover:bg-orange/90 transition-all duration-500 ease-ship flex-shrink-0 min-h-[44px]"
          >
            FALAR COM ASSESSOR <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}