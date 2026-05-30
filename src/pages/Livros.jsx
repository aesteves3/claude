import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Star, Anchor, Navigation, Compass, Globe, Cloud } from 'lucide-react';

const categories = [
  {
    title: 'Náutica Básica & Arrais Amador',
    icon: Anchor,
    books: [
      {
        title: 'Navegar é Fácil',
        author: 'Geraldo Luiz Miranda de Barros',
        description: 'Amplamente utilizado como material didático para exames de habilitação de amadores da Marinha do Brasil (Arrais-Amador, Mestre-Amador).',
        level: 'Iniciante',
        topics: ['Bibliografia recomendada NORMAM-211/DPC', 'Regras, manobras e meteorologia', 'Legislação, RIPEAM, balizamento e segurança'],
        link: 'https://www.estantevirtual.com.br/busca/navegar-e-facil',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/40461b0aa_navegarfacil.jpg',
      },
      {
        title: 'The Annapolis Book of Seamanship',
        author: 'John Rousmaniere',
        description: 'Padrão de referência para escolas de navegação e entusiastas, cobrindo desde o manuseio básico do barco até navegação avançada e procedimentos de emergência.',
        level: 'Todos os níveis',
        topics: ['Manuseio de barcos, ajuste de velas, navegação, ancoragem', 'Meteorologia', 'Problemas específicos de marinharia', 'Vídeo Series disponível em Prime Video e Vimeo', 'Digital eBook disponível em Google Play'],
        link: 'https://www.amazon.com.br/Annapolis-Book-Seamanship-John-Rousmaniere/dp/1451650191',
        image: 'https://images-na.ssl-images-amazon.com/images/P/1451650191.01.L.jpg',
      },
    ],
  },
  {
    title: 'Navegação Costeira & Mestre Amador',
    icon: Navigation,
    books: [
      {
        title: 'Navegação: A Ciência e a Arte',
        author: 'Altineu Pires Miguens',
        description: 'Publicado oficialmente pela Diretoria de Hidrografia e Navegação (DHN) da Marinha do Brasil, o manual é amplamente utilizado na formação de profissionais do mar e amadores.',
        level: 'Intermediário',
        topics: ['Bibliografia recomendada NORMAM-211/DPC', 'Volume I: Navegação Costeira, Estimada e em Águas Restritas (Arrais)', 'Volume II: Navegação Astronômica e Derrotas (Capitão)', 'Volume III: Navegação Eletrônica e em Condições Especiais (Mestre)', 'Nota: distribuído gratuitamente pela Marinha; é denso e deve ser considerado como referência pontual'],
        link: 'https://www.marinha.mil.br/dhn/npublicacoes',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/4f527ce15_Miguens.jpg',
      },
    ],
  },
  {
    title: 'Navegação Oceânica & Capitão Amador',
    icon: Compass,
    books: [
      {
        title: 'Capitão Amador',
        author: 'Jaime Roberto da Costa Felipe',
        description: 'Manual técnico sugerido pela Marinha do Brasil como material preparatório para o exame oficial de Capitão Amador, nível que capacita o condutor a guiar embarcações de esporte e recreio em mar aberto sem limites de afastamento da costa.',
        level: 'Avançado',
        topics: ['Princípios de flutuabilidade', 'Meteorologia Marinha', 'Oceanografia', 'Navegação Astronômica', 'Eletrônica e Comunicações'],
        link: 'https://www.capitaoamador.com',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/9dd35ea7f_CApitaoAmador1.webp',
      },

    ],
  },
  {
    title: 'Operação & Manutenção',
    icon: Globe,
    books: [
      {
        title: 'Sail & Rig Tuning',
        author: 'Ivar Dedekam',
        description: 'Guia náutico essencial que simplifica os conceitos complexos de aerodinâmica, ajuste de velas e regulagem de mastros. Recomendado para velejadores de todos os níveis, o livro explica de forma prática como utilizar controles como o cunningham, estai de popa e carrinho da genoa para otimizar o formato das velas e alinhar a mastreação de acordo com a intensidade do vento, garantindo maior velocidade, segurança e estabilidade ao barco.',
        level: 'Todos os níveis',
        topics: ['Aerodinâmica Prática', 'Ajuste da Vela Mestra e Genoas', 'Mastreação e Cabos Fixos (Rigging)', 'Velas de Balão (Spinnaker e Gennaker)'],
        link: 'https://a.co/d/0ffyuPr3',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/007a5c31a_SailRig1.jpg',
      },
      {
        title: 'Chapman Piloting & Seamanship',
        author: 'Chapman / Hearst Marine Books',
        description: 'A bíblia da náutica norte-americana, com cobertura enciclopédica de navegação, motores, regulamentos e primeiros socorros no mar.',
        level: 'Todos os níveis',
        topics: ['Navegação eletrônica', 'Motores náuticos', 'Regulamentos internacionais'],
        link: 'https://www.amazon.com/Chapman-Piloting-Seamanship-69th-ebook/dp/B08Y6CDDSQ',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/dc35b6378_Chapman.jpg',
      },
      {
        title: 'Boatowner\'s Mechanical and Electrical Manual',
        author: 'Nigel Calder',
        description: 'Considerado o guia definitivo e mais completo para manutenção, diagnóstico e reparo dos sistemas essenciais de uma embarcação. Este livro de referência ensina a cuidar desde circuitos elétricos e eletrônicos marítimos até motores a diesel, geradores e mecanismos de leme.',
        level: 'Todos os níveis',
        topics: ['Sistemas Elétricos', 'Energia Alternativa', 'Mecânica e Propulsão', 'Encanamento e Climatização', 'Equipamentos de Convés'],
        link: 'https://a.co/d/0508IT3B',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/d10aee39d_Calder1.jpg',
      },
    ],
  },
  {
    title: 'Meteorologia Náutica',
    icon: Cloud,
    books: [
      {
        title: 'The Atmosphere: An Introduction to Meteorology',
        author: 'Frederick K. Lutgens e Edward J. Tarbuck',
        description: 'Fundamental e acessível, amplamente reconhecido como o padrão para cursos universitários de introdução à meteorologia, tempo e clima. Elaborado para estudantes sem formação científica prévia, utilizando uma narrativa não técnica e exemplos do cotidiano para explicar a física atmosférica complexa.',
        level: 'Todos os níveis',
        topics: ['Conceitos Fundamentais da Atmosfera', 'Aquecimento da Superfície da Terra e da Atmosfera', 'Temperatura, Umidade e Estabilidade Atmosférica', 'Formas de Condensação e Precipitação', 'Clima Severo'],
        link: 'https://a.co/d/08uBuWUv',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/0f54f50e5_Atmosphere1.jpg',
      },
      {
        title: 'Meteorologia para Navegar, Voar e Trilhar',
        author: 'Giovanni Dolif',
        description: 'Publicado por Hashtag Céu, o livro é um guia prático, didático e em formato de pocket book (livro de bolso), projetado especificamente para quem realiza atividades ao ar livre.',
        level: 'Todos os níveis',
        topics: ['Previsão Meteorológica', 'Micro e Macro', 'Uso prático do Windy'],
        link: 'https://velamar.com.br/livro-meteorologia-navegar-voar-trilhar-de-giovanni-dolif/',
        image: 'https://media.base44.com/images/public/69c6ae1aa394aee53ff11055/fb6e0dff8_GiovanniDolif1.jpg',
      },
    ],
  },
];

const levelColors = {
  'Iniciante': 'text-green-600 bg-green-50 border-green-200',
  'Intermediário': 'text-blue-600 bg-blue-50 border-blue-200',
  'Avançado': 'text-orange bg-orange/5 border-orange/20',
  'Todos os níveis': 'text-navy bg-navy/5 border-navy/20',
};

export default function Livros() {
  usePageMeta(
    'Livros de Náutica Recomendados',
    'Livros e publicações recomendados pelo NAUTK para estudo de navegação. Obras essenciais para a preparação às provas da Marinha do Brasil e certificações internacionais.'
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
            BIBLIOTECA NÁUTICA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="font-archivo text-4xl md:text-6xl tracking-wide text-white mb-6"
          >
            LIVROS DE
            <br />
            <span className="text-orange">APRENDIZADO NÁUTICO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Uma seleção cuidadosa de obras fundamentais para a formação do navegador — do iniciante ao capitão oceânico. Publicações oficiais da Marinha do Brasil, manuais técnicos e referências internacionais reconhecidas.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-20">
        {categories.map((cat, catIdx) => {
          const CatIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: catIdx * 0.05 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-chart-grey">
                <CatIcon className="w-5 h-5 text-orange" />
                <h2 className="font-archivo text-xl md:text-2xl tracking-wide text-navy">{cat.title}</h2>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.books.map((book, bookIdx) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: bookIdx * 0.08 }}
                    className="border border-chart-grey overflow-hidden hover:border-orange/30 transition-colors duration-300 ease-ship flex flex-col"
                  >
                    {book.image && (
                      <div className="h-64 flex items-center justify-center mb-4 bg-secondary/50">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                      <BookOpen className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                      <span className={`font-mono text-[10px] tracking-wider px-2 py-1 border rounded-sm ${levelColors[book.level]}`}>
                        {book.level.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-archivo text-lg text-navy mb-1 leading-snug">{book.title}</h3>
                    <p className="font-mono text-xs text-orange tracking-wider mb-4">{book.author}</p>

                      <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {book.description}
                      </p>

                      <div className="space-y-1.5 mb-5">
                        {book.topics.map((topic) => (
                          <p key={topic} className="font-inter text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
                            {topic}
                          </p>
                        ))}
                      </div>

                      {book.link && (
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs tracking-wider text-orange hover:text-orange/70 transition-colors flex items-center gap-2 mt-auto"
                        >
                          ACESSAR PUBLICAÇÃO <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-orange/20 bg-orange/5 p-8"
        >
          <div className="flex items-start gap-4">
            <Star className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-archivo text-lg text-navy mb-2">Recomendação dos Instrutores</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                As publicações oficiais da Marinha do Brasil — especialmente as editadas pela DHN (Diretoria de Hidrografia e Navegação) — são referência obrigatória para as provas de habilitação. Os demais títulos complementam a formação técnica e ampliam o repertório do navegador, sendo recomendados conforme o nível de certificação desejado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}