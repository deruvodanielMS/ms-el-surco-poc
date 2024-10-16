const avatars: Record<string, string> = {
  Elsurco1: 'https://randomuser.me/api/portraits/men/1.jpg', // Ejemplo de imagen aleatoria de usuario
  Elsurco2: 'https://randomuser.me/api/portraits/women/2.jpg',
  Elsurco3: 'https://randomuser.me/api/portraits/men/3.jpg',
  // Añade más URLs reales aquí
};

export const getAvatarUrl = (username: string) => {
  return avatars[username] || 'https://example.com/default-avatar.png'; // Usa un avatar por defecto si no hay uno específico
};
