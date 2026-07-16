// MOCK — substituir pela chamada real da API quando o backend integrar.
export const mockNotificationSections = [
  {
    title: 'Hoje',
    data: [
      { id: 'n1', icon: 'trophy', title: 'Você subiu no Ranking!', description: 'Agora você está em 3º lugar no bolão Turma da Copa', time: '5 min', read: false },
      { id: 'n2', icon: 'people', title: 'Novo pedido de amizade', description: 'Walter W. quer se conectar com você', time: '20 min', read: false },
      { id: 'n3', icon: 'trophy', title: 'Palpites encerrados', description: 'Os palpites para Brasil e Espanha foram travados', time: '1 h', read: false },
    ],
  },
  {
    title: 'Ontem',
    data: [
      { id: 'n4', icon: 'calendar', title: 'Partida Finalizada', description: 'Brasil 7 x 1 Alemanha - Confira seu desempenho no bolão', time: '1 dia', read: true },
      { id: 'n5', icon: 'trophy', title: 'Bolão atualizado', description: 'Marta G. aceitou seu convite para o bolão "Trampo"', time: '1 dia', read: true },
    ],
  },
];