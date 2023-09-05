import { desuscribirUsuario } from './DesuscribirUsuario'; // Asegúrate de que la ruta sea correcta

const Desuscripcion = () => {
  const usuarioId = 'ID_DEL_USUARIO'; // Establece el ID del usuario aquí

  const handleDesuscribir = async () => {
    const desuscripcionExitosa = await desuscribirUsuario(usuarioId);

    if (desuscripcionExitosa) {
      // Aquí puedes manejar la lógica si la desuscripción fue exitosa
      console.log('Usuario desuscrito exitosamente');
    } else {
      // Aquí puedes manejar la lógica si hubo un error en la desuscripción
      console.error('Error al desuscribir al usuario');
    }
  };

  return (
    <div>
      <h2>Cancelar Suscripción</h2>
      <p>¿Estás seguro que deseas cancelar tu suscripción?</p>
      <button onClick={handleDesuscribir}>Confirmar Cancelación</button>
    </div>
  );
};

export default Desuscripcion;