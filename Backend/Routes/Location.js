const { Router } = require("express");
const LocationController = require('../Controllers/Location'); // Asegúrate de que la ruta al archivo sea correcta

const router = Router();

router.get('/', LocationController.getLocation); // Usando LocationController.getLocation

module.exports = router;