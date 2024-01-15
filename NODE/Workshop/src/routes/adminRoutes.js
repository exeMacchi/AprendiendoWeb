const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// Multer
const upload = require("../utilities/multer");

// Express Validator
const validations = [
   body("nombre").notEmpty().withMessage("Indicar un nombre."),
]

// Express Session
const adminRequire = require("../middlewares/adminSession");

// Controladores
const adminController = require("../controllers/adminControllers");


/* --- READ --- */
// Mostrar todos los usuarios (/admin/users)
router.get("/users", adminRequire, adminController.getUsers);

// Mostrar formulario de login (/admin/login)
router.get("/login", adminController.getLoginForm);

// Procesar el formulario de login (/admin/login)
router.post("/login", adminController.processLogin);


/* --- UPDATE --- */
// Mostrar un usuario específico para editarlo (/admin/edit/:id)
router.get("/edit/:id", adminRequire, adminController.getUser);

// Editar un usuario específico (/admin/edit/:id)
router.post("/edit/:id",
            adminRequire,
            upload.single("imagen"),
            validations,
            adminController.editUser);

// Mensaje de éxito post-edición del usuario (/admin/edit/success)
router.get("/edit/:id/success", adminController.successfulEdit);



/* --- CREATE --- */
// Mostrar el formulario para crear un nuevo usuario (/admin/create)
router.get("/create", adminRequire, adminController.getCreateForm);

// Crear el nuevo usuario y agregarlo al modelo (/admin/create)
router.post("/create",
            adminRequire,
            upload.single("imagen"),
            validations,
            adminController.createUser);

/* Mensaje de éxito post-creado del usuario (/admin/create/success).
   Esto evita que se repita la operación de creación al actualizar */
router.get("/create/success", adminController.successfulCreate);



/* --- DELETE --- */
// Borrar un usuario del modelo (/admin/delete/:id)
router.get("/delete/:id", adminRequire, adminController.deleteUser);

// Mensaje de éxito post-eliminación del usuario (/admin/users/delete/success)
router.get("/delete/:id/success", adminController.successfulDelete);



module.exports = router;
