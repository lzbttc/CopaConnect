// MOCK — substituir pela chamada real da API quando o backend integrar.
export const mockConversations = [
  { id: 'c1', friendId: 'u1', nome: 'Marta G.', online: true, lastMessage: 'Os palpites para Brasil x Argentina foram travados', time: '13:40' },
  { id: 'c2', friendId: 'u2', nome: 'Matheus N.', online: false, lastMessage: 'Bora fechar o bolão hoje?', time: '12:15' },
  { id: 'c3', friendId: 'u3', nome: 'Thiago C.', online: true, lastMessage: 'Você viu o jogo de ontem?', time: '11:02' },
];

export const mockRequests = [
  { id: 'r1', friendId: 'u4', nome: 'Walter W.', online: true, time: '13:40' },
  { id: 'r2', friendId: 'u5', nome: 'Luíza B.', online: false, time: '10:22' },
];

export const mockFriends = [
  { id: 'u1', nome: 'Marta G.', online: true },
  { id: 'u2', nome: 'Matheus N.', online: false },
  { id: 'u3', nome: 'Thiago C.', online: false },
];