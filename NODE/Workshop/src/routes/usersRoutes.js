const express = require("express");
const router = express.Router();
// Controladores
const usersController = require("../controllers/usersControllers");

// Mostrar un usuario específico (/users/:id)
router.get("/:id", usersController.getUser);

module.exports = router;
