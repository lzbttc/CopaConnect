// MOCK — substituir pela chamada real da API quando o backend integrar.
// Troque STATUS_ATUAL pra testar as variações: 'agendada' | 'ao_vivo' | 'finalizada'
export const STATUS_ATUAL = 'ao_vivo';

export const mockMatch = {
  id: 'match-1',
  competition: 'Fase de Grupos',
  group: 'Grupo D',
  status: STATUS_ATUAL, // 'agendada' | 'ao_vivo' | 'finalizada'
  date: '14/07',
  time: '19:00',
  minute: '67',
  teamA: { name: 'Brasil', flag: '🇧🇷', score: 7 },
  teamB: { name: 'Alemanha', flag: '🇩🇪', score: 1 },
};

export const mockBoloes = [
  { id: 'b1', nome: 'Familia', posicao: 1, totalParticipantes: 8, pontos: 67, palpite: 'BRA 9 - 4 GER' },
  { id: 'b2', nome: 'Trampo', posicao: 7, totalParticipantes: 12, pontos: 30, palpite: 'BRA 5 - 2 GER' },
];

export const mockFriendsOnline = [
  { id: 'f1', nome: 'Marta G.' },
  { id: 'f2', nome: 'Matheus N.' },
  { id: 'f3', nome: 'Thiago C.' },
  { id: 'f4', nome: 'Walter W.' },
];
export const mockFriendsExtraCount = 5;

export const mockNotificationsCount = 3;