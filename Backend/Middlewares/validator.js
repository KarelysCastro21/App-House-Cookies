const { body, param, validationResult } = require('express-validator');
const Usuario = require("../Models/Usuarios");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  const { cumpleaños } = req.body;
  const [mes, dia] = cumpleaños.split('/');
  req.body.cumpleaños = `${mes}/${dia}`;

 
  next();
};

const validateID = param('id').custom(async (value) => {
  const usuario = await Usuario.findById(value);

  if (!usuario) {
    throw new Error('No existe usuario con ese ID');
  }
});


const emailValidator = body('email').trim().isEmail().withMessage('Ingrese un correo electrónico válido');
const nombreApellidoValidator = body('nombreApellido').notEmpty().withMessage('El nombre y apellido son obligatorios');
const cumpleañosValidator = body('cumpleaños').custom(value => {
  if (!/^\d{2}\/\d{2}$/.test(value)) {
    throw new Error('Formato de cumpleaños inválido. Use DD/MM.');
  }
  return true;
});

module.exports = {
  validarCampos,
  validateID,
  emailValidator,
  nombreApellidoValidator,
  cumpleañosValidator,
};