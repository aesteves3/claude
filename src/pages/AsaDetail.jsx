import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, ExternalLink, Award, ArrowRight } from 'lucide-react';
import { asaCourses, CERT_IMAGE } from '@/lib/internationalData';
import CertCourseRow from '@/components/international/CertCourseRow';

export default function AsaDetail() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={CERT_IMAGE} alt="ASA" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-[1440px] mx-auto">
          <Link
            to="/#international"
            className="font-mono text-xs tracking-wider text-white/60 hover:text-orange flex items-center gap-2 mb-6 transition-colors duration-300 min-h-[44px] w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> VOLTAR
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-orange" />
            <span className="font-mono text-xs tracking-[0.3em] text-orange">CERTIFICAÇÃO INTERNACIONAL</span>
          </div>

          <h1 className="font-archivo text-3xl md:text-5xl lg:text-6xl tracking-wide text-white mb-4">
            ASA
          </h1>
          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            American Sailing Association — líder em educação náutica nos EUA, Caribe e Américas. Certificações reconhecidas globalmente.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="mb-12"
            >
              <h2 className="font-archivo text-2xl tracking-wide text-navy mb-6">SOBRE A ASA</h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-4">
                A American Sailing Association é a principal organização de educação náutica dos EUA. Com mais de 50 anos de história, suas certificações são amplamente reconhecidas por empresas de charter no Caribe, Mediterrâneo e em todo o mundo.
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed">
                O sistema progressivo da ASA — do ASA 101 ao ASA 106 — oferece um caminho claro de aprendizado, desde iniciantes até navegadores oceânicos. O ASA 104 (Bareboat Charterer) é equivalente ao ICC europeu e aceito por charteiras em mais de 100 países, especialmente no Caribe.
              </p>
            </motion.div>

            {/* Courses accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            >
              <h2 className="font-archivo text-2xl tracking-wide text-navy mb-8">CERTIFICAÇÕES</h2>
              <div className="border border-chart-grey">
                <div className="flex items-center gap-4 py-3 px-4 border-b border-chart-grey">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground w-10 flex-shrink-0">NÍV.</span>
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">CERTIFICAÇÃO</span>
                </div>
                <div className="px-4">
                  {asaCourses.map((course, i) => (
                    <CertCourseRow key={course.name} course={course} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="sticky top-24 space-y-6"
            >
              <div className="border border-chart-grey p-8 space-y-5">
                <div>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">RECONHECIMENTO</p>
                  <p className="font-inter text-sm text-navy leading-relaxed">Aceita em mais de 100 países — especialmente no Caribe, Mediterrâneo e por empresas de charter globalmente.</p>
                </div>
                <div className="h-px bg-chart-grey" />
                <div>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">DESTAQUES</p>
                  <ul className="space-y-2 font-inter text-sm text-navy">
                    <li>• 6 níveis progressivos de certificação</li>
                    <li>• Reconhecida por charteiras do Caribe</li>
                    <li>• Equivalente ao ICC europeu (ASA 104)</li>
                    <li>• Líder em educação náutica americana</li>
                  </ul>
                </div>
                <div className="h-px bg-chart-grey" />
                <a
                  href="https://americansailing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] bg-orange text-white py-4 hover:bg-orange/90 transition-all duration-500 ease-ship min-h-[44px]"
                >
                  VISITAR ASA <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] border border-navy/20 text-navy py-4 hover:border-orange hover:text-orange transition-all duration-500 ease-ship min-h-[44px]"
                >
                  FALAR COM ASSESSOR
                </a>
              </div>

              <div className="border border-orange/20 bg-orange/5 p-6">
                <Award className="w-6 h-6 text-orange mb-3" />
                <p className="font-archivo text-base text-navy mb-2">PREPARAÇÃO COMBINADA</p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                  Combine a ASA com sua certificação da Marinha do Brasil para um perfil internacional completo.
                </p>
                <a
                  href="/#contact"
                  className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-orange hover:underline"
                >
                  FALAR COM ASSESSOR <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}