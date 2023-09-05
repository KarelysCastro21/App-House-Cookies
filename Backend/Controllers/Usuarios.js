const Usuario = require('../Models/Usuarios');
const enviarCorreo = require('../Models/Nodemail');
const mongoose = require('mongoose');

//POST
const crearUsuario = async (req, res) => {

  const { email, nombreApellido, cumpleaños } = req.body;
  const [ dia, mes] = cumpleaños.split('/');
  const fechaFormateada = `${dia}/${mes}`;
  try {
    

    // Verificar si ya existe un usuario con el mismo correo electrónico
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(409).json({ message: 'Usuario con el mismo correo electrónico ya existe' });
    }

    // Crear un nuevo usuario en la base de datos
    const nuevoUsuario = new Usuario({ email, nombreApellido, cumpleaños: fechaFormateada });
    await nuevoUsuario.save();
    const linkDesuscripcion = `http://localhost:8080/api/usuarios/desuscribirse/${nuevoUsuario._id}`;
    await enviarCorreo(email, nombreApellido, linkDesuscripcion);

    res.status(201).json({ message: 'Usuario registrado y correo electrónico enviado' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};






//PUT

actualizarUsuarios = async (req, res) => {
  const id = req.params.id;


   if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const { email, nombreApellido, cumpleaños } = req.body;
  const [dia, mes] = cumpleaños.split('/');

  try {
    const usuarioExistente = await Usuario.findById(id);
    if (!usuarioExistente) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    usuarioExistente.email = email;
    usuarioExistente.nombreApellido = nombreApellido;
    usuarioExistente.cumpleaños = `${mes}/${dia}`;
    await usuarioExistente.save();

    res.json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

//GET
const obtenerUsuarios = async (_, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al obtener los usuarios' });
  }
};
const buscarporCorreo = async (req, res) => {
  const { email } = req.query;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ userId: usuario._id });
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
};


//DELETE
const borrarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    await Usuario.findByIdAndDelete(id);
    res.json({ mensaje: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: 'Hubo un error al eliminar el usuario' });
  }
};

module.exports = {
  crearUsuario,
  actualizarUsuarios,
  buscarporCorreo,
  obtenerUsuarios,
  borrarUsuario,
};