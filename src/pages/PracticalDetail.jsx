import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { practicalClasses } from '@/lib/practicalData';

export default function PracticalDetail() {
  const pathParts = window.location.pathname.split('/');
  const slug = pathParts[pathParts.length - 1];
  const data = practicalClasses[slug];

  if (!data) {
    return (
      <div className="pt-24 px-6 text-center">
        <p className="font-mono text-sm text-muted-foreground">Curso não encontrado.</p>
        <Link to="/" className="text-orange font-mono text-xs mt-4 inline-block">← VOLTAR</Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-[1440px] mx-auto">
          <Link
            to="/#practical"
            className="font-mono text-xs tracking-wider text-white/60 hover:text-orange flex items-center gap-2 mb-6 transition-colors duration-300 min-h-[44px] w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> VOLTAR ÀS AULAS PRÁTICAS
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-orange" />
            <span className="font-mono text-xs tracking-[0.3em] text-orange">{data.tag}</span>
          </div>

          <h1 className="font-archivo text-3xl md:text-5xl lg:text-6xl tracking-wide text-white mb-4">
            {data.title}
          </h1>

          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="font-archivo text-2xl tracking-wide text-navy mb-6">VISÃO GERAL</h2>
              <div className="space-y-4">
                {data.longDescription.map((para, i) => (
                  <p key={i} className="font-inter text-base text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            >
              <h2 className="font-archivo text-2xl tracking-wide text-navy mb-6">CONTEÚDO ABORDADO</h2>
              <div className="space-y-3">
                {data.topics.map((topic, i) => (
                  <div key={i} className="border border-chart-grey p-5 hover:border-orange/30 transition-colors duration-300 ease-ship flex items-start gap-4">
                    <span className="font-mono text-xs tracking-wider text-orange flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-inter text-sm text-navy leading-relaxed">{topic}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="sticky top-24 border border-chart-grey p-8 space-y-6"
            >
              {data.price && (
                <>
                  <div>
                    <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">INVESTIMENTO</p>
                    <p className="font-archivo text-3xl text-navy">{data.price}</p>
                  </div>
                  <div className="h-px bg-chart-grey" />
                </>
              )}

              <div>
                <p className="font-mono text-xs tracking-wider text-muted-foreground mb-3">DETALHES</p>
                <div className="space-y-3">
                  {data.meta.map((m, i) => {
                    const MetaIcon = m.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <MetaIcon className="w-4 h-4 text-orange flex-shrink-0" />
                        <span className="font-inter text-sm text-navy">{m.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-chart-grey" />

              <div>
                <p className="font-mono text-xs tracking-wider text-muted-foreground mb-3">DESTAQUES</p>
                <div className="space-y-2">
                  {data.highlights.map((h, i) => (
                    <span key={i} className="flex items-start gap-2 font-inter text-sm text-navy">
                      <CheckCircle className="w-3 h-3 text-orange flex-shrink-0 mt-0.5" /> {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-chart-grey" />

              <a
                href="/#contact"
                className="block w-full text-center font-mono text-xs tracking-[0.15em] bg-orange text-white py-4 hover:bg-orange/90 transition-all duration-500 ease-ship min-h-[44px]"
              >
                SOLICITAR INSCRIÇÃO
              </a>
              <a
                href="/#contact"
                className="block w-full text-center font-mono text-xs tracking-[0.15em] border border-navy/20 text-navy py-4 hover:border-orange hover:text-orange transition-all duration-500 ease-ship min-h-[44px]"
              >
                FALAR COM ASSESSOR
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}