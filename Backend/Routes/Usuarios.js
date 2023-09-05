const { Router } = require("express");
const { emailValidator,
  nombreApellidoValidator,
  cumpleañosValidator,
  validateID,
  validarCampos, } = require("../Middlewares/validator");


const {
    crearUsuario,
    
    actualizarUsuarios,
    borrarUsuario,
    buscarporCorreo
  } = require('../Controllers/Usuarios');
const { check } = require("express-validator");
  
  const router = Router();

router.post('/', [
  check('email').trim().isEmail().withMessage('Ingrese un correo electrónico válido'),
  check('nombreApellido').notEmpty().withMessage('El nombre y apellido son obligatorios'),
  check('cumpleaños').custom(value => {
    if (!/^\d{2}\/\d{2}$/.test(value)) {
      throw new Error('Formato de cumpleaños inválido. Use DD/MM.');
    }
    return true;
  }),
  validarCampos,
], crearUsuario);


router.get('/',buscarporCorreo);



router.put('/:id', [
  validateID, // Validar ID
  emailValidator, // Validar email
  nombreApellidoValidator, // Validar nombre y apellido
  cumpleañosValidator, // Validar cumpleaños
  validarCampos, // Validar campos generales y formatear cumpleaños
], actualizarUsuarios);


router.delete('/desuscribirse/:id', [
  validateID, // Validar ID
  emailValidator, // Validar email
  nombreApellidoValidator, // Validar nombre y apellido
  cumpleañosValidator, // Validar cumpleaños
  validarCampos, // Validar campos generales y formatear cumpleaños
],borrarUsuario);

module.exports = router;