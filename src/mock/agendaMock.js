// MOCK — substituir pela chamada real da API quando o backend integrar.
export const mockDates = [
  { key: '12-jun', day: '12', month: 'JUN' },
  { key: '13-jun', day: '13', month: 'JUN' },
  { key: '14-jun', day: '14', month: 'JUN' },
  { key: '15-jun', day: '15', month: 'JUN' },
  { key: '16-jun', day: '16', month: 'JUN' },
  { key: '17-jun', day: '17', month: 'JUN' },
  { key: '18-jun', day: '18', month: 'JUN' },
];

export const mockAgendaSections = [
  {
    dateKey: '12-jun',
    title: '12 de Junho',
    data: [
      {
        id: 'match-10', competition: 'Fase de Grupos', group: 'Grupo A', status: 'finalizada',
        date: '12/06', time: '16:00', minute: null,
        teamA: { name: 'Argentina', flag: '🇦🇷', score: 2 },
        teamB: { name: 'México', flag: '🇲🇽', score: 0 },
      },
    ],
  },
  {
    dateKey: '13-jun',
    title: '13 de Junho',
    data: [
      {
        id: 'match-11', competition: 'Fase de Grupos', group: 'Grupo C', status: 'finalizada',
        date: '13/06', time: '13:00', minute: null,
        teamA: { name: 'França', flag: '🇫🇷', score: 1 },
        teamB: { name: 'Japão', flag: '🇯🇵', score: 1 },
      },
    ],
  },
  {
    dateKey: '14-jun',
    title: '14 de Junho',
    data: [
      {
        id: 'match-1', competition: 'Fase de Grupos', group: 'Grupo D', status: 'ao_vivo',
        date: '14/07', time: '19:00', minute: '67',
        teamA: { name: 'Brasil', flag: '🇧🇷', score: 7 },
        teamB: { name: 'Alemanha', flag: '🇩🇪', score: 1 },
      },
      {
        id: 'match-2', competition: 'Fase de Grupos', group: 'Grupo D', status: 'agendada',
        date: '14/07', time: '19:00', minute: null,
        teamA: { name: 'Brasil', flag: '🇧🇷', score: null },
        teamB: { name: 'Alemanha', flag: '🇩🇪', score: null },
      },
      {
        id: 'match-3', competition: 'Fase de Grupos', group: 'Grupo D', status: 'finalizada',
        date: '14/07', time: '13:00', minute: null,
        teamA: { name: 'Brasil', flag: '🇧🇷', score: 7 },
        teamB: { name: 'Alemanha', flag: '🇩🇪', score: 1 },
      },
    ],
  },
  {
    dateKey: '15-jun',
    title: '15 de Junho',
    data: [
      {
        id: 'match-12', competition: 'Fase de Grupos', group: 'Grupo B', status: 'agendada',
        date: '15/06', time: '16:00', minute: null,
        teamA: { name: 'Espanha', flag: '🇪🇸', score: null },
        teamB: { name: 'Portugal', flag: '🇵🇹', score: null },
      },
    ],
  },
  { dateKey: '16-jun', title: '16 de Junho', data: [] },
  { dateKey: '17-jun', title: '17 de Junho', data: [] },
  { dateKey: '18-jun', title: '18 de Junho', data: [] },
];