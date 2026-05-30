import { Clock, MapPin, Users, Anchor, Waves, UtensilsCrossed } from 'lucide-react';

export const practicalClasses = {
  arrais: {
    slug: 'arrais',
    icon: Anchor,
    tag: 'HABILITAÇÃO MARINHA DO BRASIL',
    image: '/images/practical-1.png',
    title: 'Prática para Habilitação de Arrais Amador',
    subtitle: 'AULA PRÁTICA OBRIGATÓRIA',
    description: 'A aula prática de 6 horas é um pré-requisito obrigatório da Marinha do Brasil para quem deseja obter a habilitação de Arrais Amador.',
    longDescription: [
      'A aula prática de 6 horas é um pré-requisito obrigatório da Marinha do Brasil para quem deseja obter a habilitação de Arrais Amador (condução de embarcações de esporte e recreio).',
      'Essa carga horária é estabelecida pelas Normas da Autoridade Marítima (NORMAM) para garantir que o candidato tenha experiência mínima de manuseio antes da prova teórica.',
      'Ao final das 6 horas de aula prática, emissão do "Atestado de Treinamento Prático", documento este que é requisito para inscrição do exame teórico na Capitania, Delegacia ou Agência da Marinha.',
    ],
    meta: [
      { icon: Clock, text: '6 horas' },
      { icon: UtensilsCrossed, text: 'Incluso lanche e água a bordo' },
    ],
    price: 'R$ 2.500',
    highlights: [
      'Pré-requisito obrigatório pela NORMAM',
      'Emissão de Atestado de Treinamento Prático',
      'Instrutor Certificado',
    ],
    topics: [
      'Familiarização com a embarcação e equipamentos de segurança',
      'Manobras básicas de partida, parada e atracação',
      'Navegação em canal e em mar aberto',
      'Uso de equipamentos de comunicação e sinalização',
      'Procedimentos de segurança a bordo',
      'Emissão do certificado de horas práticas',
    ],
  },
  vela: {
    slug: 'vela',
    icon: Waves,
    tag: 'VELA OCEÂNICA',
    image: '/images/practical-2.png',
    title: 'Prática de Vela Oceânica – Nível Básico',
    subtitle: 'CURSO PRÁTICO A BORDO',
    description: 'Realizado no Canal de São Sebastião a bordo de veleiro Wind-34, com 12 horas de navegação real divididas em dois dias.',
    longDescription: [
      'Realizado no Canal de São Sebastião, o curso acontece a bordo de veleiro Wind-34. São dois dias de aula, totalizando 12 horas de aulas práticas (6 horas por dia).',
      'Durante o curso, a bordo do barco-escola, os alunos aprendem a identificar os principais componentes do veleiro, os nomes dos cabos e velas, além de noções básicas de navegação. Antes de sair para o mar, o instrutor simula as manobras mais comuns, como bordos, jibes e troca de velas.',
      'Durante a navegação, todos se revezam nas funções a bordo, aprendendo, na prática, os papéis essenciais de velejar.',
    ],
    meta: [
      { icon: Clock, text: '12 horas (2 dias)' },
      { icon: UtensilsCrossed, text: 'Incluso lanche e água a bordo' },
    ],
    price: 'R$ 3.500',
    highlights: [
      'Veleiro Wind-34 como barco-escola',
      'Canal de São Sebastião — SP',
      'Instrutor Certificado',
    ],
    topics: [
      'Identificação dos componentes do veleiro',
      'Nomenclatura de cabos, velas e manobras',
      'Noções básicas de navegação a vela',
      'Manobras de bordo e jibe (simuladas em terra)',
      'Troca de velas e ajuste de trim',
      'Navegação real com rodízio de funções a bordo',
    ],
  },
};