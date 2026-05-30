import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Globe, Anchor } from 'lucide-react';

const secoes = [
  {
    id: 'nautk',
    title: 'NAUTK',
    subtitle: 'Fundadores e Mestres do Instituto',
    pessoas: [
      {
        name: 'Armando Esteves',
        alias: 'YachtMaster',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/c0af6a91d_ArmandoEsteves12.jpg',
        description:
          'Rigor técnico de suas certificações nacionais e internacionais como Instrutor Náutico unido a uma paixão genuína pela vida ao vento. Traduz a complexidade da arte de navegar em um aprendizado prático e seguro, expertise que se materializa no comando de seu próprio veleiro, o Wind-34 Manawa.',
        tags: ['Educação náutica', 'Navegação oceânica'],
        links: {},
      },
      {
        name: 'Clauberto Andrade',
        alias: 'Capitão Clauberto',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/822eafe3e_ClaubertoAndrade11.jpg',
        description:
          'Referência na instrução de vela e na formação de novos velejadores no litoral paulista. Participa com destaque em competições de vela oceânicas renomadas, guiando e orientando tripulações de alunos em atividades práticas adversas e reais.',
        tags: ['Instrutor', 'Práticas', 'Regatas'],
        links: {},
      },
      {
        name: 'Pedro Rodrigues',
        alias: 'BL3',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/70c30f410_PedroRodrigues2.jpg',
        description:
          'Consolidado como um dos pilares da náutica brasileira ao fundar a BL3 Escola de Vela, instituição que se tornou referência nacional na democratização e no ensino técnico do esporte. Sua influência transcende a instrução básica, tendo sido um agente fundamental na transformação de Ilhabela na Capital Nacional da Vela e na formação de gerações de velejadores.',
        tags: ['Escola Náutica'],
        links: {},
      },
      {
        name: 'Leonardo Soldon',
        alias: 'Kaluanã',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/dc3b5c39a_LeonardoSoldon12.jpg',
        description:
          'Campeão brasileiro de vela oceânica e uma longa vivência no mar. Vindo do mundo corporativo, onde atuou em áreas estratégicas de desenvolvimento humano, uniu essas duas paixões ao criar a Escola de Vela Kaluanã, um espaço onde líderes e equipes vivem experiências práticas e transformadoras a bordo de veleiros de oceano.',
        tags: ['Escola Náutica'],
        links: {},
      },
    ],
  },
  {
    id: 'notaveis',
    title: 'NOTÁVEIS',
    subtitle: 'Referências da Náutica Brasileira',
    pessoas: [
      {
        name: 'Charlie Flesch',
        alias: 'Homo Zarpiens',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/9f514aefd_CharlieFlesch1.jpg',
        description:
          'Velejador e criador de conteúdo náutico, Charlie Flesch navega o mundo a bordo do seu veleiro documentando a vida no mar com humor, autenticidade e muita aventura. Referência para quem sonha em zarpar rumo ao desconhecido.',
        tags: ['Veleiro', 'Conteúdo náutico', 'Volta ao mundo'],
        links: {
          web: 'https://www.homozarpiens.com',
          youtube: 'https://www.youtube.com/@Homozarpiens',
          instagram: 'https://www.instagram.com/homozarpiens/',
        },
      },
      {
        name: 'Adriano Plotzki',
        alias: '#Sal',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/0c5201ab1_AdrianoPlotzki13.jpg',
        description:
          'Navegador apaixonado que compartilha a vida no mar com uma comunicação direta e inspiradora. Seus vídeos e posts mostram travessias oceânicas, técnicas de navegação e a filosofia de vida que o mar proporciona.',
        tags: ['Oceânico', 'Travessias', 'Estilo de vida náutico'],
        links: {
          youtube: 'https://www.youtube.com/@hashtagsal',
          instagram: 'https://www.instagram.com/hashtagsal_oficial/',
        },
      },
      {
        name: 'Velho Jack',
        alias: 'Velho Jack SN',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/9e58c5268_VelhoJack21.jpg',
        description:
          'Especialista náutico conhecido por seu trabalho com manutenção e vistorias de veleiros. Influente na comunidade náutica brasileira, compartilhando conhecimento técnico e o cotidiano da vida no mar.',
        tags: ['Vela', 'Comunidade náutica', 'Aprendizado'],
        links: {
          web: 'https://www.velhojacksn.com.br',
          youtube: 'https://www.velhojacksn.com.br',
          instagram: 'https://www.instagram.com/velhojacksn/',
        },
      },
      {
        name: 'Aleixo Belov',
        alias: 'Fundação Aleixo Belov',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/19e5002bf_AleixoBelov1.webp',
        description:
          'Lenda viva da náutica brasileira. Aleixo Belov dedicou sua vida ao mar e à preservação da cultura marítima nacional. Sua fundação e o Museu do Mar são patrimônios do velejador brasileiro.',
        tags: ['Oceânico', 'Cultura marítima', 'Museu do Mar'],
        links: {
          web: 'https://www.belov.com.br/index.html',
          youtube: 'https://www.youtube.com/@fundacaoaleixobelov',
          instagram: 'https://www.instagram.com/museudomar.aleixobelov/',
        },
      },
      {
        name: 'Tamara Klink',
        alias: 'Velejadora Oceânica',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/4c497633e_TamaraKlink11.jpg',
        description:
          'Uma das mais respeitadas navegadoras oceânicas do Brasil, Tamara realizou travessias solo de grande destaque internacional. Sua trajetória é inspiração para toda uma geração de mulheres na náutica.',
        tags: ['Solo oceânico', 'Travessias atlânticas', 'Inspiração feminina'],
        links: {
          youtube: 'https://www.youtube.com/c/TamaraKlink',
          instagram: 'https://www.instagram.com/tamaraklink/',
        },
      },
      {
        name: 'Giovanni Dolif',
        alias: '#Céu',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/894a766c0_GiovanniDolif12.jpg',
        description:
          'Navegador, renomado meteorologista e pesquisador que une o rigor acadêmico à experiência prática. Dedicação ao ensino da meteorologia aplicada, onde traduz dados complexos em ferramentas estratégicas para velejadores e navegantes.',
        tags: ['Meteorologia', 'Expedições', 'Pesquisa náutica'],
        links: {
          youtube: 'https://www.youtube.com/@giovannidolif',
          instagram: 'https://www.instagram.com/hashtag.ceu/',
        },
      },
    ],
  },
];

const PessoaCard = ({ pessoa, idx }) => (
  <motion.div
    key={pessoa.name}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: idx * 0.07 }}
    className="border border-chart-grey hover:border-orange/40 transition-colors duration-300 ease-ship flex flex-col"
  >
    {/* Photo */}
    {pessoa.image && (
      <div className="h-56 overflow-hidden">
        <img
          src={pessoa.image}
          alt={pessoa.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-ship hover:scale-105"
        />
      </div>
    )}

    {/* Card Header */}
    <div className="bg-navy/5 px-6 pt-5 pb-4 border-b border-chart-grey">
      <div className="flex items-center gap-3 mb-2">
        <Anchor className="w-4 h-4 text-orange flex-shrink-0" />
        <span className="font-mono text-xs tracking-[0.2em] text-orange">{pessoa.alias}</span>
      </div>
      <h2 className="font-archivo text-2xl text-navy">{pessoa.name}</h2>
    </div>

    {/* Card Body */}
    <div className="px-6 py-5 flex flex-col flex-1">
      <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
        {pessoa.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {pessoa.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2 py-1 border border-navy/10 text-navy/50"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 flex-wrap">
        {pessoa.links.web && (
          <a
            href={pessoa.links.web}
            target="_blank"
            rel="noopener noreferrer"
            title="Website"
            className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-navy/60 hover:text-orange transition-colors duration-300 border border-navy/10 hover:border-orange/30 px-3 py-2"
          >
            <Globe className="w-3.5 h-3.5" />
            SITE
          </a>
        )}
        {pessoa.links.youtube && (
          <a
            href={pessoa.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-navy/60 hover:text-orange transition-colors duration-300 border border-navy/10 hover:border-orange/30 px-3 py-2"
          >
            <Youtube className="w-3.5 h-3.5" />
            YOUTUBE
          </a>
        )}
        {pessoa.links.instagram && (
          <a
            href={pessoa.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-navy/60 hover:text-orange transition-colors duration-300 border border-navy/10 hover:border-orange/30 px-3 py-2"
          >
            <Instagram className="w-3.5 h-3.5" />
            INSTAGRAM
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Comandantes() {
  usePageMeta(
    'Comandantes e Instrutores Náuticos',
    'Conheça os comandantes e instrutores certificados do NAUTK. Profissionais com experiência comprovada em navegação e formação náutica pela Marinha do Brasil.'
  );
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-navy py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-12 w-64 h-64 border border-white rounded-full" />
          <div className="absolute top-8 left-12 w-96 h-96 border border-white rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 border border-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-[0.3em] text-orange mb-4"
          >
            REFERÊNCIAS DA NÁUTICA BRASILEIRA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-archivo text-4xl md:text-6xl tracking-wide text-white mb-6"
          >
            COMANDANTES
            <br />
            <span className="text-orange">DO MAR BRASILEIRO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Velejadores, navegadores e celebridades da náutica brasileira que inspiram, ensinam e mostram ao mundo a paixão do Brasil pelo mar. Conheça suas histórias e acompanhe seus conteúdos.
          </motion.p>
        </div>
      </div>

      {/* Sections */}
      {secoes.map((secao) => (
        <div key={secao.id} className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-12"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-orange mb-2">{secao.id === 'nautk' ? 'NOSSA INSTITUIÇÃO' : 'REFERÊNCIAS'}</p>
            <h2 className="font-archivo text-4xl md:text-5xl tracking-wide text-navy mb-3">{secao.title}</h2>
            <p className="font-inter text-base text-muted-foreground">{secao.subtitle}</p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secao.pessoas.map((pessoa, idx) => (
              <PessoaCard key={pessoa.name} pessoa={pessoa} idx={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}