// MOCK — substituir pela chamada real da API quando o backend integrar.
import { mockMatch } from './homeMock';

export { mockMatch };

export const mockComments = [
  { id: 'cm1', autor: 'Você', texto: 'Que jogo incrível! Brasil Arrasando', tempo: 'Agora' },
  { id: 'cm2', autor: 'Marta G.', texto: 'Vamos que vamos, Brasil!', tempo: '2 min' },
  { id: 'cm3', autor: 'Thiago C.', texto: 'Esse jogo tá surreal', tempo: '5 min' },
];

export const mockEvents = [
  { id: 'ev1', minute: '79\'', title: 'Gol', description: 'Willian marca após assistência de Ramires', team: 'BRA' },
  { id: 'ev2', minute: '75\'', title: 'Cartão amarelo', description: 'Boateng recebe cartão após parar contra-ataque', team: 'GER' },
  { id: 'ev3', minute: '72\'', title: 'Substituição', description: 'Ramires entra no lugar de Hulk', team: 'BRA' },
  { id: 'ev4', minute: '68\'', title: 'Gol de pênalti', description: 'Neymar converte a cobrança e marca o sexto', team: 'BRA' },
  { id: 'ev5', minute: '68\'', title: 'Gol de pênalti', description: 'Neymar converte a cobrança e marca o sexto', team: 'BRA' },
];