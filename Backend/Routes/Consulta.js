const express = require("express");
const router = express.Router();
const { enviarConsulta } = require("../Controllers/Consulta");

router.post("/", enviarConsulta);

module.exports = router;