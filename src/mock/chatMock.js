// MOCK — substituir pela chamada real da API/WebSocket quando o backend integrar.
export const mockFriendsById = {
  u1: { id: 'u1', nome: 'Marta G.', online: true },
  u2: { id: 'u2', nome: 'Matheus N.', online: false },
  u3: { id: 'u3', nome: 'Thiago C.', online: true },
  u4: { id: 'u4', nome: 'Walter W.', online: true },
};

export const mockMessagesByFriendId = {
  u1: [
    { id: 'm1', autor: 'amigo', texto: 'Os palpites para Brasil x Argentina foram travados', hora: '13:38' },
    { id: 'm2', autor: 'eu', texto: 'Os palpites para Brasil x Argentina foram travados', hora: '13:40' },
  ],
  u2: [
    { id: 'm3', autor: 'amigo', texto: 'Bora fechar o bolão hoje?', hora: '12:10' },
    { id: 'm4', autor: 'eu', texto: 'Bora sim!', hora: '12:15' },
  ],
};

export function getFriendById(id) {
  return mockFriendsById[id] ?? { id, nome: 'Usuário', online: false };
}

export function getMessagesByFriendId(id) {
  return mockMessagesByFriendId[id] ?? [];
}