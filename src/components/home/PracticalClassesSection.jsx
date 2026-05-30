import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor, Waves, Clock, MapPin, ArrowRight } from 'lucide-react';

const classes = [
  {
    slug: 'arrais',
    icon: Anchor,
    tag: 'HABILITAÇÃO MARINHA DO BRASIL',
    image: '/images/practical-1.png',
    title: 'Prática para Habilitação de Arrais Amador',
    description: [
      'A aula prática de 6 horas é um pré-requisito obrigatório da Marinha do Brasil para quem deseja obter a habilitação de Arrais Amador (condução de embarcações de esporte e recreio).',
      'Essa carga horária é estabelecida pelas Normas da Autoridade Marítima (NORMAM) para garantir que o candidato tenha experiência mínima de manuseio antes da prova teórica.',
    ],
    meta: [{ icon: Clock, text: '6 horas' }],
  },
  {
    slug: 'vela',
    icon: Waves,
    tag: 'VELA OCEÂNICA',
    image: '/images/practical-2.png',
    title: 'Prática de Vela Oceânica – Nível Básico',
    description: [
      'Realizado no Canal de São Sebastião, o curso acontece a bordo de veleiro Wind-34. São dois dias de aula, totalizando 12 horas de aulas práticas (6 horas por dia).',
      'Durante o curso, a bordo do barco-escola, os alunos aprendem a identificar os principais componentes do veleiro, os nomes dos cabos e velas, além de noções básicas de navegação. Antes de sair para o mar, o instrutor simula as manobras mais comuns, como bordos, jibes e troca de velas.',
      'Durante a navegação, todos se revezam nas funções a bordo, aprendendo, na prática, os papéis essenciais de velejar.',
    ],
    meta: [
      { icon: Clock, text: '12 horas (2 dias)' },
      { icon: MapPin, text: 'Canal de São Sebastião' },

    ],
  },
];

export default function PracticalClassesSection({ embedded = false }) {
  const Wrapper = embedded ? 'div' : 'section';
  const wrapperProps = embedded
    ? { id: 'practical', className: 'mt-20' }
    : { id: 'practical', className: 'py-24 md:py-32 px-6 md:px-12' };

  return (
    <Wrapper {...wrapperProps}>
      <div className={embedded ? '' : 'max-w-[1440px] mx-auto'}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="font-mono text-xs tracking-[0.3em] text-orange mb-4"
            >
              COMPLEMENTO PRÁTICO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="font-archivo text-3xl md:text-5xl tracking-wide text-navy"
            >
              AULAS PRÁTICAS DE NAVEGAÇÃO
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="font-inter text-sm text-muted-foreground max-w-md leading-relaxed"
          >
            Além da teoria, oferecemos aulas práticas que complementam a formação e atendem aos requisitos obrigatórios da Marinha do Brasil.
          </motion.p>
        </div>

        <div className="h-px bg-chart-grey mb-16" />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {classes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
                className="group border border-chart-grey hover:border-orange/30 transition-colors duration-300 ease-ship overflow-hidden"
              >
                {/* Image */}
                <Link to={`/pratica/${item.slug}`} className="block relative overflow-hidden aspect-[16/7]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-ship" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-mono text-xs tracking-[0.25em] text-orange mb-1">{item.tag}</p>
                    <h3 className="font-archivo text-xl md:text-2xl tracking-wide text-white">{item.title}</h3>
                  </div>
                </Link>

                <div className="p-8">
                <div className="space-y-3 mb-8">
                  {item.description.map((para, i) => (
                    <p key={i} className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-chart-grey">
                  {item.meta.map((m, i) => {
                    const MetaIcon = m.icon;
                    return (
                      <span key={i} className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <MetaIcon className="w-3 h-3 text-orange" /> {m.text}
                      </span>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-chart-grey">
                  <Link
                    to={`/pratica/${item.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] bg-orange text-white px-6 py-3 hover:bg-orange/90 transition-all duration-500 ease-ship hover:gap-3"
                  >
                    VER DETALHES <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}