import { secureStorage } from '../lib/storage/secureStorage';

// ============================================================
// MOCK DE AUTENTICAÇÃO — SEM INTEGRAÇÃO COM BACKEND AINDA
// A equipe de backend deve substituir o conteúdo de login() e
// register() pela chamada real à API, mantendo a mesma
// assinatura (recebe os dados do form, retorna o token).
// ============================================================

function fakeDelay(ms = 800) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login(data) {
  await fakeDelay();

  // TODO(backend): substituir por chamada real, ex:
  // const response = await fetch(`${API_BASE_URL}/auth/login`, { ... });
  const mockToken = `mock-token-${Date.now()}`;

  await secureStorage.saveToken(mockToken);
  return mockToken;
}

export async function register(data) {
  await fakeDelay();

  // TODO(backend): substituir por chamada real, ex:
  // const response = await fetch(`${API_BASE_URL}/auth/register`, { ... });
  const mockToken = `mock-token-${Date.now()}`;

  await secureStorage.saveToken(mockToken);
  return mockToken;
}