import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, Globe, Anchor, Navigation, Compass, FileText, Map, Wind, Waves } from 'lucide-react';

const categories = [
  {
    icon: Map,
    label: 'CARTOGRAFIA E NAVEGAÇÃO',
    items: [
      {
        title: 'OpenCPN',
        description: 'Software de navegação marítima código aberto, plotter gráfico e ferramenta de planejamento de rotas em tempo real. Visualização de cartas náuticas raster e vetoriais (Windows, Mac, Linux, Android, Raspberry Pi).',
        url: 'https://opencpn.org',
        logo: null,
      },
      {
        title: 'CHM — Centro de Hidrografia da Marinha',
        description: 'Cartas náuticas raster da Costa Brasileira (formato NOAA-BSB), datum WGS-84.',
        url: 'https://www.marinha.mil.br/chm/dados-do-segnav/cartas-raster',
        logo: 'https://www.marinha.mil.br/favicon.ico',
      },
      {
        title: 'OpenSeaMap',
        description: 'Mapa náutico colaborativo e gratuito com boias, portos e fundos.',
        url: 'https://map.openseamap.org',
        logo: 'https://map.openseamap.org/favicon.ico',
      },
      {
        title: 'NavionicsWeb',
        description: 'Visualizador de cartas náuticas detalhadas com batimetria e marinas.',
        url: 'https://webapp.navionics.com',
        logo: 'https://webapp.navionics.com/favicon.ico',
      },
    ],
  },
  {
    icon: Wind,
    label: 'METEOROLOGIA',
    items: [
      {
        title: 'Windy',
        description: 'Previsão meteorológica e de ventos em tempo real, ideal para planejamento de rotas.',
        url: 'https://www.windy.com',
        logo: 'https://www.windy.com/favicon.ico',
      },
      {
        title: 'PredictWind',
        description: 'Previsão de vento de alta precisão para navegação oceânica e offshore.',
        url: 'https://www.predictwind.com',
        logo: 'https://www.predictwind.com/favicon.ico',
      },
      {
        title: 'MBV — Muito Bons Ventos',
        description: 'Plataforma e aplicativo focado no monitoramento local da velocidade e direção do vento, projetado especificamente para a comunidade náutica.',
        url: 'https://muitobonsventos.com.br',
        logo: 'https://muitobonsventos.com.br/favicon.ico',
      },
      {
        title: 'WindGuru',
        description: 'Previsão Meteorológica.',
        url: 'https://www.windguru.cz',
        logo: 'https://www.windguru.cz/favicon.ico',
      },
      {
        title: 'INMET — Instituto Nacional de Meteorologia',
        description: 'Previsões meteorológicas e alertas oficiais do Brasil.',
        url: 'https://portal.inmet.gov.br',
        logo: 'https://portal.inmet.gov.br/favicon.ico',
      },
      {
        title: 'NullSchool Earth',
        description: 'Visualização Meteorologica Global.',
        url: 'https://earth.nullschool.net',
        logo: 'https://earth.nullschool.net/favicon.ico',
      },
    ],
  },
  {
    icon: Globe,
    label: 'CERTIFICAÇÕES INTERNACIONAIS',
    items: [
      {
        title: 'ASA — American Sailing Association',
        description: 'Certificações náuticas americanas reconhecidas no Caribe e nas Américas.',
        url: 'https://americansailing.com',
        logo: 'https://americansailing.com/favicon.ico',
      },
      {
        title: 'NauticEd',
        description: 'Plataforma de cursos e certificações náuticas reconhecidas internacionalmente.',
        url: 'https://www.nauticed.org',
        logo: 'https://www.nauticed.org/favicon.ico',
      },
    ],
  },
  {
    icon: Anchor,
    label: 'MARINHA DO BRASIL',
    items: [
      {
        title: 'DPC — Diretoria de Portos e Costas, NORMAN(s)',
        description: 'Normas da Autoridade Marítima',
        url: 'https://www.marinha.mil.br/dpc/normas-autoridade-maritima-brasileira',
        logo: 'https://www.marinha.mil.br/favicon.ico',
      },
      {
        title: 'Comando do 8° Distrito Naval (SP/Vila Mariana)',
        description: 'Subseção de Amadores',
        url: 'https://www.marinha.mil.br/com8dn/node/106',
        logo: 'https://www.marinha.mil.br/favicon.ico',
      },
    ],
  },
];

export default function References() {
  usePageMeta(
    'Referências e Materiais Náuticos',
    'Referências, regulamentos e materiais de estudo para navegação. Normas da Marinha do Brasil, cartas náuticas, publicações e links úteis para navegadores amadores.'
  );
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-navy py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)',
          }}
        />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-[0.3em] text-orange mb-4"
          >
            BIBLIOTECA DE NAVEGAÇÃO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-archivo text-4xl md:text-6xl tracking-wide text-white leading-none mb-6"
          >
            REFERÊNCIAS
            <br />
            <span className="text-orange">NÁUTICAS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base text-white/60 max-w-xl leading-relaxed"
          >
            Recursos essenciais para navegadores: links oficiais, ferramentas de planejamento, meteorologia, cartografia e publicações de referência.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="space-y-16">
          {categories.map((cat, ci) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: ci * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <CatIcon className="w-5 h-5 text-orange" />
                  <h2 className="font-mono text-xs tracking-[0.25em] text-orange">{cat.label}</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, ii) => (
                    <a
                      key={ii}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-border p-6 hover:border-orange/40 transition-all duration-300 ease-ship bg-white hover:bg-secondary/30"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3 flex-1">
                          {item.logo && (
                            <img 
                              src={item.logo} 
                              alt={item.title}
                              className="h-8 w-8 object-contain flex-shrink-0 rounded"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                if (e.target.nextElementSibling) {
                                  e.target.nextElementSibling.style.display = 'flex';
                                }
                              }}
                            />
                          )}
                          <div className="h-8 w-8 rounded bg-gradient-to-br from-orange/20 to-orange/10 flex items-center justify-center text-orange text-xs font-bold hidden flex-shrink-0">
                            {item.title.charAt(0)}
                          </div>
                          <h3 className="font-archivo text-base text-navy leading-snug group-hover:text-orange transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-orange flex-shrink-0 mt-0.5 transition-colors duration-300" />
                      </div>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Back link */}
        <div className="mt-20 pt-8 border-t border-border">
          <Link
            to="/"
            className="font-mono text-xs tracking-wider text-muted-foreground hover:text-orange transition-colors duration-300 flex items-center gap-2"
          >
            ← VOLTAR AO INÍCIO
          </Link>
        </div>
      </div>
    </div>
  );
}