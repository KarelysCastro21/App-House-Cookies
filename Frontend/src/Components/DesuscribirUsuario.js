import axios from 'axios';

export const desuscribirUsuario = async (usuarioId) => {
  try {
    const response = await axios.delete(`/api/usuarios/desuscribirse/${usuarioId}`);

    if (response.status === 200) {
      return true; // Desuscripción exitosa
    } else {
      return false; // Error en la desuscripción
    }
  } catch (error) {
    console.error('Error al desuscribir al usuario:', error);
    return false; // Error en la desuscripción
  }
};