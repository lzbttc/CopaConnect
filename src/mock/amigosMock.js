// MOCK — substituir pela chamada real da API quando o backend integrar.
export const mockConversations = [
  { id: 'c1', friendId: 'u1', nome: 'Marta G.', online: true, lastMessage: 'Os palpites para Brasil e Argentina foram travados', time: '13:40', unreadCount: 3 },
  { id: 'c2', friendId: 'u2', nome: 'Matheus N.', online: false, lastMessage: 'Bora fechar o bolão hoje?', time: '12:15', unreadCount: 0 },
  { id: 'c3', friendId: 'u3', nome: 'Tiago C.', online: false, lastMessage: 'Você viu o jogo de ontem?', time: '13:40', unreadCount: 1 },
];

export const mockRequests = [
  { id: 'r1', friendId: 'u5', nome: 'Neymar J.', online: true, time: '13:40' },
  { id: 'r2', friendId: 'u6', nome: 'Lionel M.', online: false, time: '13:40' },
  { id: 'r3', friendId: 'u7', nome: 'Cristiano R.', online: false, time: '13:40' },
];

export const mockFriends = [
  { id: 'u1', nome: 'Marta G.', online: true },
  { id: 'u2', nome: 'Matheus N.', online: false },
  { id: 'u3', nome: 'Tiago C.', online: false },
  { id: 'u4', nome: 'Walter W.', online: false },
];