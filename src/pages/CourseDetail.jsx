import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen, Anchor, Navigation, Compass, CheckCircle } from 'lucide-react';
import EnrollmentForm from '../components/course/EnrollmentForm';

const courseImages = {
  arrais: '/images/arrais1.png',
  mestre: '/images/mestre1.png',
  capitao: '/images/cap1.png',
};

const levelIcons = {
  arrais: Anchor,
  mestre: Navigation,
  capitao: Compass,
};

const levelLabels = {
  arrais: 'ARRAIS AMADOR',
  mestre: 'MESTRE AMADOR',
  capitao: 'CAPITÃO AMADOR',
};

const coursesData = {
  arrais: {
    title: 'ARRAIS AMADOR',
    certification_level: 'arrais',
    description: 'Habilitação inicial para condução de embarcações em navegação interior. O primeiro passo para quem deseja navegar com autonomia.',
    long_description: 'O curso de Arrais Amador é a porta de entrada para o mundo da navegação. Prepara o aluno para conduzir embarcações de esporte e recreio nos limites da navegação interior (rios, lagos, baías e canais), com segurança e domínio das normas da Marinha do Brasil. O curso abrange desde legislação marítima até técnicas de navegação, meteorologia básica e primeiros socorros.',
    price: '100. + prática',
    duration_hours: 11,
    duration_label: '10+hr teoria + 6hr prática',
    next_start_label: 'EAD + Prática TBD',
    modules_label: '13 módulos + prática',
    modules: [
      { name: 'Nomenclatura', aulas: 3, hours: 1.0, topics: ['Partes de Embarcação', 'Movimentos', 'Estabilidade', 'Âncora'] },
      { name: 'Manobras de Embarcação', aulas: 3, hours: 1.0, topics: ['Fundear, Atracar/Desatracar', 'Espias, Leme e Efeitos'] },
      { name: 'Regras de Manobras', aulas: 5, hours: 1.0, topics: ['RIPEAM', 'Risco de Abalroamento', 'Responsabilidade entre Embarcações', 'Navegação Interior'] },
      { name: 'Luzes, Marcas e Sinais Sonoros', aulas: 7, hours: 1.5, topics: ['Definições e Alcance de Luzes', 'Situação e Operação de Embarcações', 'Sinais Sonoros'] },
      { name: 'Sinalização Náutica', aulas: 3, hours: 1.0, topics: ['IALA A/B'] },
      { name: 'Prevenção e Combate a Incêndio', aulas: 2, hours: 0.5, topics: ['Classes de Incêndio', 'Extintores', 'Procedimentos de Combate'] },
      { name: 'Primeiros Socorros', aulas: 2, hours: 0.5, topics: ['Noções e Ações a Bordo'] },
      { name: 'Sobrevivância no Mar e Salvatagem', aulas: 2, hours: 0.5, topics: ['Equipamentos de Salvatagem', 'Artefatos Pirotécnicos', 'MOB - Homem ao Mar'] },
      { name: 'Normas e Regulamentos', aulas: 4, hours: 1.0, topics: ['Definições', 'Comando de Embarcação', 'Autoridade Marítima', 'NORMAM'] },
      { name: 'Meteorologia', aulas: 4, hours: 1.0, topics: ['Temperatura do Ar e Mar', 'Pressão Atmosférica', 'Ventos, Umidade', 'Nuvens, Visibilidade, Precipitação', 'Sistemas Frontais', 'Boletins Meteorológicos'] },
      { name: 'Navegação', aulas: 1, hours: 0.5, topics: ['Latitude/Longitude', 'Cartas Náuticas'] },
      { name: 'Comunicação', aulas: 1, hours: 0.5, topics: ['VHF Marítimo', 'Chamada de Socorro', 'Canal 16'] },
      { name: 'Marés', aulas: 1, hours: 0.5, topics: ['Definições', 'Tábua de Marés'] },
      { name: 'Prática de Navegação (Atestado de Embarque)', hours: 6.0, topics: ['Manobras básicas', 'Atracação e desatracação', 'Ancoragem', 'Navegação em rota'] },
    ],
    included: [
      '10hrs de vídeo-aulas',
      '05hrs de vídeo-aulas alternativas, com conteúdo resumido',
      'PDFs com pontos relevantes da matéria',
      'Exercícios e questões de simulados/provas anteriores',
    ],
  },
  mestre: {
    title: 'MESTRE AMADOR',
    certification_level: 'mestre',
    description: 'Habilitação para navegação costeira. Amplie seus horizontes e navegue além dos limites interiores com competência técnica avançada.',
    long_description: 'O curso de Mestre Amador capacita o navegador para a navegação costeira, permitindo operar embarcações entre portos nacionais e estrangeiros dentro dos limites da visibilidade da costa. Aprofunda conhecimentos em navegação estimada e costeira, meteorologia aplicada e regulamentações internacionais. É o passo intermediário essencial para quem almeja a certificação máxima de Capitão Amador.',
    price: 350,
    duration_hours: 16,
    duration_label: '16 horas',
    next_start_label: 'EAD + Prática TBD',
    modules_label: '14 módulos',
    modules: [
      { name: 'Fundamentos da Navegação', aulas: 6, hours: 2, topics: ['Sistema de Coordenadas', 'Latitude/Longitude', 'Direção, Rumo', 'Rumos Verdadeiros, Magnético, da Agulha, Marcações Relativas e Polares', 'Velocidade de Superfície e Fundo', 'Calunga'] },
      { name: 'Carta Náutica e Publicações Náuticas', aulas: 7, hours: 2, topics: ['Projeções, Mercator', 'Loxodrômica, Ortodrômica', 'Título da Carta Náutica, Notas, Rosa-dos-Ventos'] },
      { name: 'Navegação Estimada e Costeira', aulas: 7, hours: 2, topics: ['Coordenadas, Distâncias e Direções na Carta Náutica', 'Navegação Estimada, Costeira, Linha de Posição (LDP)', 'Determinação de Posição na Navegação Costeira', 'Posição por Marcações'] },
      { name: 'Instrumentos Náuticos', aulas: 3, hours: 1, topics: ['Agulhas Náuticas, Agulha Magnética', 'Agulhas Giroscópica, Instrumentos para Marcações, Odômetro e Velocímetros', 'Prumo, Ecobatímetro, Anemômetro, Anemoscópio, Barômetro, Radiogoniômetro'] },
      { name: 'GPS e DGPS', aulas: 4, hours: 1.5, topics: ['Serviços, Sinais e Códigos do GPS', 'Imprecisão do GPS/DGPS', 'Interface com GPS, Datum', 'Utilização do GPS'] },
      { name: 'Estabilidade de Embarcações', aulas: 2, hours: 1, topics: ['Definições Gerais, Reserva de Flutuabilidade, Borda Livre', 'Estabilidade Lateral, Superfície Livre, Tosamento e Alquebramento'] },
      { name: 'Tábua de Marés', aulas: 1, hours: 0.5, topics: ['Marés, Tábua de Marés, Cartas de Correntes de Marés'] },
      { name: 'Navegação Radar', aulas: 3, hours: 1, topics: ['Funcionamento do Radar', 'Propagação do Sinal Radar', 'Controles, Precisão da Posição, Auxílios Radar'] },
      { name: 'Meteorologia', aulas: 5, hours: 2, topics: ['Equilíbrio Energético, Atmosfera, Pressão Atmosférica, Temperatura do Ar', 'TSM, Brisas, Isóbaras, Carta Sinótica', 'Ciclone e Anticiclone, Cavado e Crista', 'Umidade Absoluta e Umidade Relativa', 'Nuvens, Nevoeiros, Circulação Geral do Planeta', 'Frentes, Instrumentos, Ventos, Ondas, Carta Piloto', 'Metarea V, Meteoromainha, Regras Práticas'] },
      { name: 'Comunicações na Navegação Costeira', aulas: 1, hours: 0.5, topics: ['Equipamentos', 'Prioridades e Procedimentos'] },
      { name: 'EPIRB e AIS', aulas: 1, hours: 0.5, topics: ['Noções de Funcionamento'] },
      { name: 'Sobrevivência no Mar', aulas: 2, hours: 0.5, topics: ['MOB – Homem ao Mar', 'Manobra de Boutakow e Williamson', 'Salvatagem, Pirotecnia, Balsa Salva-Vidas'] },
      { name: 'Sinalização Náutica', aulas: 6, hours: 1.5, topics: ['Sinais Náuticos, Sinais Laterais, IALA B', 'Sinais Cardinais, Perigo Isolado, Águas Seguras e Especiais', 'Sinalização Fluvial e Lacustre', 'Luzes de Sinalização Náutica'] },
      { name: 'Regras de Governo, Luzes, Marcas e Sinais - RIPEAM Avançado', aulas: 13, hours: 2.5, topics: ['Definições, Vigilância, Velocidades de Segurança', 'Risco e Manobras para Evitar Abalroamento', 'Canais Estreitos, Vias de Separação', 'Ultrapassagem, Roda-a-Roda, Rumos Cruzados e Ações de Embarcações', 'Regras de Governo na Navegação Interior', 'Definições e Alcance de Luzes', 'Embarcações de Propulsão Mecânica, a Vela, Fundeadas', 'Embarcações de Reboque, Pesca e Sem Governo', 'Embarcações Encalhada e com Capacidade de Manobra Restrita', 'Embarcações Restritas Devido Calado, de Praticagem e Sinais de Perigo', 'Sinais Sonoros'] },
    ],
    included: [
      '16hrs de vídeo-aulas',
      'PDFs com pontos relevantes da matéria',
      'Exercícios e questões de simulados/provas anteriores',
      'Carta náutica (semelhante a de provas)',
    ],
  },
  capitao: {
    title: 'CAPITÃO AMADOR',
    certification_level: 'capitao',
    description: 'A mais alta habilitação amadora. Domínio completo de navegação astronômica, meteorologia oceânica e comando de embarcações sem limites.',
    long_description: 'O curso de Capitão Amador é a certificação máxima para navegadores amadores no Brasil. Habilita o comandante para navegação sem limites de afastamento da costa, incluindo travessias oceânicas. O programa abrange navegação astronômica com uso de sextante, meteorologia oceânica avançada, planejamento de rotas transoceânicas e todos os aspectos de comando e liderança a bordo. É o ápice da formação náutica amadora.',
    price: 1000,
    duration_hours: 60,
    duration_label: '48 horas',
    next_start_label: 'EAD',
    modules_label: '8 módulos',
    modules: [
      { name: 'Navegação Astronômica', aulas: 27, hours: 11.0, topics: ['A Terra e seus Movimentos', 'Sistema de Coordenadas', 'Medida do Tempo', 'Sextante e Cronômetro', 'Correção das Alturas', 'AHG e Declinação do Sol', 'Latitude Meridiana', 'Longitude Meridiana', 'Nascer e Pôr do Sol'] },
      { name: 'Navegação Eletrônica', aulas: 28, hours: 15.0, topics: ['Introdução ao Radar', 'Navegação com Uso do Radar', 'GPS e DGPS', 'AIS – Automatic Identification System', 'Navegação Batimétrica', 'Sistemas Integrados de Navegação', 'VTS – Vessel Traffic Service'] },
      { name: 'Estabilidade de Embarcações', aulas: 3, hours: 4.0, topics: ['Flutuabilidade', 'Empuxo, Trim e Banda – Deslocamento', 'Curva de Deslocamento, TPC, Reserva de Flutuabilidade', 'Variação do Calado devido Densidade da Água', 'Estabilidade', 'Principais Pontos Notáveis (G, C, M, K)', 'Condição de Equilíbrio', 'Curva de Estabilidade Estática', 'Banda Permanente e Ângulo de Encosto', 'Efeito de Superfície Livre, Suspensão de Cargas, Consumo em Viagem'] },
      { name: 'Meteorologia', aulas: 7, hours: 7.0, topics: ['Calor Latente e Calor Sensível', 'Temperatura do Ar, TSM, Pressão Atmosférica', 'Umidade, Ponto de Orvalho', 'Evaporação, Condensação, Nebulosidade', 'Nuvens, Precipitação', 'Circulação Geral do Planeta', 'Ventos Real, Relativo e Aparente', 'Alta e Baixa Pressão, Escala Beaufort', 'Sistemas Frontais, Frente Fria, Frente Quente', 'Frente Oclusa, Frente Estacionária', 'Fenômenos Convectivos, Linhas de Instabilidade', 'Trovoadas, ZCIT, Doldrums', 'Ciclones Tropical, Extratropical e Subtropical', 'Manobras Evasivas', 'Nevoeiros e Névoas', 'Informes Meteorológicos'] },
      { name: 'Oceanografia', aulas: 4, hours: 3.0, topics: ['Geração de Ondas, Vagas e Marulhos', 'Águas Profundas e Águas Rasas, Interação com Embarcações', 'A Causa da Maré, Elementos da Maré', 'Tipos de Maré, Tábuas de Maré', 'Cálculo da Altura de Maré', 'Correntes de Maré', 'Correntes Costeiras e Correntes Oceânicas', 'Outros Fenômenos Oceanográficos'] },
      { name: 'Comunicações', aulas: 7, hours: 2.5, topics: ['Ondas Eletromagnéticas, Características, Modulação', 'Atenuação de Ondas, Difração, Refração, Reflexão', 'Sistemas de Rádio, Diagrama em Blocos', 'Transceptor VHF', 'Prioridade nas Comunicações', 'Chamada Seletiva Digital', 'Transceptor MF, MHF, MF/HF e Outros Sistemas Rádio', 'Redes de Apoio Costeiro', 'GMDSS', 'NAVTEX, INMARSAT, IRIDIUM, EPIRB, SART, AIS-SART', 'Código Internacional de Sinais'] },
      { name: 'Sobrevivência no Mar', aulas: 5, hours: 3.5, topics: ['Aspectos Fisiológicos e Psicológicos', 'Hipotermia, Afogamento', 'Fome, Sede', 'Equipamentos de Salvatagem', 'Procedimentos de Abandono, Balsa Salva-Vidas', 'Busca e Resgate de Náufragos', 'Navegação com Balsa Salva-Vidas'] },
      { name: 'Carta Náutica e Publicações Náuticas', aulas: 3, hours: 2.0, topics: ['Projeção de Mercator, Loxodrômica e Ortodrômica', 'Desvantagens da Projeção de Mercator, Projeção Gnomônica', 'Cartas Náuticas, Definição, Escalas, Aspectos Gerais', 'Carta 12.000, Confiança e Precisão', 'Avisos aos Navegantes e Outras Publicações Relevantes'] },
    ],
    included: [
      '48hrs de vídeo-aulas',
      'PDFs com pontos relevantes da matéria',
      'Exercícios e questões de simulados/provas anteriores',
      'Rosa de manobras',
    ],
  },
};

export default function CourseDetail() {
  const pathParts = window.location.pathname.split('/');
  const level = pathParts[pathParts.length - 1];
  const [showEnroll, setShowEnroll] = useState(false);

  const course = coursesData[level];
  const LevelIcon = levelIcons[level] || Compass;
  const image = courseImages[level];

  if (!course) {
    return (
      <div className="pt-24 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <p className="font-inter text-muted-foreground">Curso não encontrado.</p>
        <Link to="/" className="font-mono text-xs text-orange hover:underline mt-4 inline-block">← VOLTAR AO INÍCIO</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={image} alt={levelLabels[level]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-[1440px] mx-auto">
          <Link
            to="/"
            className="font-mono text-xs tracking-wider text-white/60 hover:text-orange flex items-center gap-2 mb-6 transition-colors duration-300 min-h-[44px] w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> VOLTAR AO INÍCIO
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <LevelIcon className="w-6 h-6 text-orange" />
            <span className="font-mono text-xs tracking-[0.3em] text-orange">
              {levelLabels[level]}
            </span>
          </div>

          <h1 className="font-archivo text-3xl md:text-5xl lg:text-6xl tracking-wide text-white mb-4">
            {course.title}
          </h1>

          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            {course.long_description}
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="mb-12"
            >
              <h2 className="font-archivo text-2xl tracking-wide text-navy mb-6">VISÃO GERAL</h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-6">
                {course.long_description}
              </p>
              <div className="border-l-4 border-orange pl-6 py-4">
                <p className="font-inter text-sm text-navy font-semibold mb-4">Incluído no Curso de {levelLabels[level]}:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {course.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Modules */}
            {course.modules.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
              >
                <h2 className="font-archivo text-2xl tracking-wide text-navy mb-8">MÓDULOS DO CURSO</h2>
                <div className="space-y-4">
                  {course.modules.map((mod, idx) => (
                    <div key={idx} className="border border-chart-grey p-6 hover:border-orange/30 transition-colors duration-300 ease-ship">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs tracking-wider text-orange">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-archivo text-lg text-navy">{mod.name}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-right">
                          {mod.aulas && (
                            <span className="font-mono text-xs text-muted-foreground hidden sm:block">
                              {mod.aulas} aula{mod.aulas > 1 ? 's' : ''}
                            </span>
                          )}
                          {mod.hours && (
                            <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {mod.hours}H
                            </span>
                          )}
                        </div>
                      </div>
                      {mod.topics && mod.topics.length > 0 && (
                        <div className="ml-10 space-y-1.5">
                          {mod.topics.map((topic, tidx) => (
                            <p key={tidx} className="font-inter text-sm text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-orange/60 flex-shrink-0" /> {topic}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              className="sticky top-24 border border-chart-grey p-8 space-y-6"
            >
              <div>
                <p className="font-mono text-xs tracking-wider text-muted-foreground mb-1">INVESTIMENTO</p>
                <p className="font-archivo text-3xl text-navy">
                  {typeof course.price === 'number'
                    ? `R$ ${course.price.toLocaleString('pt-BR')}`
                    : `R$ ${course.price}`}
                </p>
              </div>

              <div className="h-px bg-chart-grey" />

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-orange" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground">DURAÇÃO</p>
                  <p className="font-inter text-sm text-navy">{course.duration_label}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-orange" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground">PRÓXIMA TURMA</p>
                  <p className="font-inter text-sm text-navy">{course.next_start_label}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-orange" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground">MÓDULOS</p>
                  <p className="font-inter text-sm text-navy">{course.modules_label}</p>
                </div>
              </div>

              <div className="h-px bg-chart-grey" />

              <button
                onClick={() => setShowEnroll(true)}
                className="w-full font-mono text-xs tracking-[0.15em] bg-orange text-white py-4 hover:bg-orange/90 transition-all duration-500 ease-ship min-h-[44px]"
              >
                MATRICULE-SE
              </button>

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

      {/* Enrollment Modal */}
      {showEnroll && (
        <EnrollmentForm course={course} onClose={() => setShowEnroll(false)} />
      )}
    </div>
  );
}