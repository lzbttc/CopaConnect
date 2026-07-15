import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'copaconnect_token';

export const secureStorage = {
  saveToken: (token) => SecureStore.setItemAsync(TOKEN_KEY, token),
  getToken: () => SecureStore.getItemAsync(TOKEN_KEY),
  clearToken: () => SecureStore.deleteItemAsync(TOKEN_KEY),
};