/* Lista de jogos do portal.
   Para adicionar um jogo novo:
   1. Crie a pasta <id-do-jogo>.html com o jogo.
   2. Coloque uma imagem de capa (1280x720, .jpg) na mesma pasta.
   3. Copie um bloco abaixo e troque os dados. */
const SITE_NAME = 'School Games';

const GAMES = [
  {
    id: 'turbo-ladder',
    title: 'Turbo Ladder',
    category: 'Corrida',
    tags: ['3D', 'Carros', 'Campeonato'],
    thumb: 'turbo-ladder.jpg',
    path: 'turbo-ladder.html',
    featured: true,
    isNew: true,
    short: 'Corrida 3D com 50 pistas, loops, rampas e 11 rivais.',
    description: 'Comece com um Skyline R32 e vença 50 pistas, incluindo 10 circuitos inspirados na Fórmula 1. Ganhe dinheiro, compre 12 carros, instale upgrades de motor, difusor e rodas, e personalize a pintura e as estampas. Cada pista tem looping, rampa para uma pista elevada, curva na parede, placas de boost e cones.',
    controls: [
      ['↑ / W', 'Acelerar'],
      ['↓ / S', 'Frear'],
      ['← → / A D', 'Virar'],
      ['C', 'Trocar câmera'],
      ['Esc / P', 'Pausar']
    ]
  }
];

const COMING_SOON = [
  { title: 'Em breve', category: 'Ação' },
  { title: 'Em breve', category: 'Puzzle' },
  { title: 'Em breve', category: 'Esporte' }
];
