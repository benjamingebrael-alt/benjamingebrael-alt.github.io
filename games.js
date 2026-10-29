/* Lista de jogos do portal.
   Para adicionar um jogo novo:
   1. Crie a pasta <id-do-jogo>.html com o jogo.
   2. Coloque uma imagem de capa (1280x720, .jpg) na mesma pasta.
   3. Copie um bloco abaixo e troque os dados. */
const SITE_NAME = 'School Games';

const GAMES = [
  {
    id: 'operacao-areia',
    title: 'Operação Areia',
    category: 'Tiro',
    tags: ['3D', 'FPS', 'Tático'],
    thumb: 'operacao-areia.jpg',
    path: 'operacao-areia.html',
    featured: true,
    isNew: true,
    short: 'FPS tático 5 contra 5 com agentes, habilidades e 4 mapas.',
    description: 'Escolha um agente, compre suas armas e entre com seus quatro aliados contra a equipe inimiga. São três agentes com habilidades (Brasa, Névoa e Faísca), seis armas mais a faca, coletes e quatro mapas: Duna Velha, Celeiro, Ruínas e Porto. Quem vencer sete rodadas leva a partida. Precisa de teclado e mouse.',
    controls: [
      ['WASD', 'Mover'],
      ['Mouse', 'Mirar e atirar'],
      ['Botão direito', 'Zoom / luneta'],
      ['Espaço', 'Pular'],
      ['C', 'Agachar'],
      ['R', 'Recarregar'],
      ['1 2 3', 'Trocar arma'],
      ['Q E X', 'Habilidades'],
      ['B', 'Loja'],
      ['Esc', 'Pausar']
    ]
  },
  {
    id: 'cleaning-carpet',
    title: 'Cleaning Carpet Simulator',
    category: 'Simulador',
    tags: ['3D', 'Limpeza', 'Upgrades'],
    thumb: 'cleaning-carpet.jpg',
    path: 'cleaning-carpet.html',
    featured: false,
    isNew: true,
    short: 'Esfregue, molhe e empurre as bolhas até o ralo para ganhar dinheiro.',
    description: 'Limpe tapetes imundos em primeira pessoa. Esfregue com a bucha, molhe as bolhas com a mangueira até virarem bolhas de desenho e empurre com o rodo até o ralo. Cada bolha limpa vira dinheiro para melhorar a bucha, a mangueira, o rodo e o ralo, comprar a vassoura e o polisher e descobrir o mercado negro.',
    controls: [
      ['WASD', 'Andar'],
      ['Shift', 'Correr'],
      ['Mouse', 'Olhar'],
      ['Clique', 'Usar ferramenta'],
      ['F', 'Ver sujeira / enrolar tapete'],
      ['1 a 6', 'Trocar ferramenta']
    ]
  },
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
  { title: 'Em breve', category: 'Puzzle' }
];
