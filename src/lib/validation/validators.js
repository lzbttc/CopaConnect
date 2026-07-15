export function validateLogin({ email, senha }) {
  const errors = {};

  if (!email.trim()) errors.email = 'Informe o e-mail';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'E-mail inválido';

  if (!senha) errors.senha = 'Informe a senha';

  return errors;
}

export function validateCadastro({ nome, telefone, email, senha }) {
  const errors = {};
  const phoneDigits = telefone.replace(/\D/g, '');

  if (!nome.trim()) errors.nome = 'Informe o nome';
  else if (nome.trim().length > 50) errors.nome = 'Máximo de 50 caracteres';

  if (phoneDigits.length !== 11) errors.telefone = 'Telefone deve ter 11 dígitos com DDD';

  if (!email.trim()) errors.email = 'Informe o e-mail';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'E-mail inválido';

  if (senha.length < 8) errors.senha = 'Mínimo de 8 caracteres';
  else if (!/[A-Za-z]/.test(senha) || !/[0-9]/.test(senha)) errors.senha = 'A senha deve conter letras e números';

  return errors;
}