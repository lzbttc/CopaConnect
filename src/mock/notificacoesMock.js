// MOCK — substituir pela chamada real da API quando o backend integrar.
export const mockNotificationSections = [
  {
    title: 'Hoje',
    data: [
      { id: 'n1', icon: 'trophy', title: 'Você subiu no Ranking!', description: 'Agora você está em 3º lugar no bolão Turma da Copa', time: '5 min', read: false },
      { id: 'n2', icon: 'trophy', title: 'Você subiu no Ranking!', description: 'Agora você está em 3º lugar no bolão Turma da Copa', time: '5 min', read: false },
      { id: 'n3', icon: 'people', title: 'Novo pedido de amizade', description: 'Walter W. quer se conectar com você', time: '20 min', read: false },
    ],
  },
  {
    title: 'Ontem',
    data: [
      { id: 'n4', icon: 'football', title: 'Partida finalizada', description: 'Brasil 7 x 1 Alemanha — confira seu desempenho', time: '1 dia', read: true },
      { id: 'n5', icon: 'trophy', title: 'Você subiu no Ranking!', description: 'Agora você está em 3º lugar no bolão Turma da Copa', time: '1 dia', read: true },
    ],
  },
];