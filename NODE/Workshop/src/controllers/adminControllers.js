// Modelo
const { 
    getUsersFromDB, 
    getUserFromDB,
    getUserFromDBByUsername,
    editUserInDB,
    createUserInDB,
    deleteUserFromDB
} = require("../model/model");

// FileSystem.unlink() para eliminar la imagen asociada al usuario que se elimina
// de la base de datos.
const { unlink, unlinkSync } = require("node:fs");

// Express Validator
const { validationResult } = require("express-validator");

// Express Session


/* --- READ --- */
// Devolver una lista con todos los usuarios para poder editar o borrar.
const getUsers = async (req, res) => {
    try {
        const users = await getUsersFromDB();
        if (!users) { res.status(404).send("Usuarios no encontrados"); }
        res.render("adminUsersList", {
            pageTitle: "Usuarios",
            title: "Lista de usuarios",
            users
        });
    }
    catch (err) {
        console.error(`Error al obtener los usuarios: ${err}`);
        res.status(500).send("Internal Server Error");
    }
};

// Renderizar el formulario de login.
const getLoginForm = async (req, res) => {
    try {
        res.render("adminLogin", {
            pageTitle: "Iniciar sesión",
            error: false
        });
    }
    catch (err) {

    }
}

// Procesar el formulario de login.
const processLogin = async (req, res) => {
    const { username, password } = req.body;
    const [userData] = await getUserFromDBByUsername(username);
    if (userData && userData.password === password) {
        req.session.isAdmin = true;
        res.redirect("/admin/users");
    }
    else if (userData) {
        res.render("adminLogin", {
            pageTitle: "Iniciar sesión",
            error: true,
            message: "Contraseña incorrecta"
        });
    }
    else {
        res.render("adminLogin", {
            pageTitle: "Iniciar sesión",
            error: true,
            message: "Usuario incorrecto"
        });
    }
}


/* --- UPDATE --- */
// Devolver la información del usuario seleccionado para editar.
const getUser = async (req, res) => {
    const [user] = await getUserFromDB(parseInt(req.params.id));
    if (!user) { res.status(404).send("Usuario no encontrado"); }
    res.render("adminEditUserProfile", {
        pageTitle: "Editar usuario",
        user,
        error: false
    });
}

// Editar la información de un usuario específico.
const editUser = async (req, res) => {

    // Validar información
    const errors = validationResult(req);
    console.log(`---> ${req.body.nombre}`);
    if (!errors.isEmpty()) {

        // Eliminar la imagen cargada si hay errores de validación
        const filePath = req.file ? req.file.path : null;
        if (filePath) {
            unlinkSync(filePath);
        }

        const [user] = await getUserFromDB(parseInt(req.params.id));
        if (!user) { res.status(404).send("Usuario no encontrado"); }
        return res.status(400).render("adminEditUserProfile", {
            pageTitle: "Crear nuevo usuario",
            user,
            error: true,
            errors: errors.array()
        });
    }

    const modifiedUser = {
        id: parseInt(req.params.id),
        age: parseInt(req.body.edad),
        name: req.body.nombre,
        email: req.body.email,
        phone: req.body.telefono,
        location: req.body.ciudad,
        image: "/avatar/" + req.file.filename
    }
    const success = await editUserInDB(modifiedUser);
    // success[0] => Booleano que indica si se pudo modificar el usuario de
    //               forma exitosa en la base de datos
    if (success[0]) {
        // success[1] => String que representa el nombre de la imagen 
        //               en la carpeta '/avatar' que se debe eliminar.
        unlink(`public/${success[1]}`, (err) => {
            if (err) {
                console.error(`Error al intentar eliminar la imagen: ${err}`);
            }
            else {
                console.log("-> Imagen eliminada con éxito!");
            }
        });
        res.redirect(`/admin/edit/${modifiedUser.id}/success`);
    }
    else {
        res.status(422).send("Ningún registro fue actualizado");
    }
}

// Renderizar la página de éxito para la modificación del usuario.
const successfulEdit = (req, res) => {
    res.status(200).render("./global/success", {
        pageTitle: "Edición exitosa",
        text: "¡Se ha modificado el usuario con éxito!"
    });
}

/* --- CREATE --- */
// Devolver el formulario para crear un nuevo usuario.
const getCreateForm = (req, res) => {
    res.render("adminCreateUser", {
        pageTitle: "Crear nuevo usuario",
        error: false
    });
};

// Crear un nuevo usuario con la información recibida del formulario de creación.
const createUser = async (req, res) => {

    // Validar información
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        // Eliminar la imagen cargada si hay errores de validación
        const filePath = req.file ? req.file.path : null;
        if (filePath) {
            unlinkSync(filePath);
        }

        return res.status(400).render("adminCreateUser", {
            pageTitle: "Crear nuevo usuario",
            error: true,
            errors: errors.array()
        });
    }

    const newUser = {
        name: req.body.nombre,
        age: parseInt(req.body.edad),
        email: req.body.email,
        phone: req.body.telefono,
        location: req.body.ciudad,
        image: "/avatar/" + req.file.filename
    };
    const success = await createUserInDB(newUser);
    if (success) {
        res.redirect("/admin/create/success");
    }
    else {
        res.status(422).send("No se ha podido crear al usuario en la base de datos");
    }
}

// Renderizar la página de éxito para la creación del usuario.
const successfulCreate = (req, res) => {
    res.status(201).render("./global/success", {
        pageTitle: "Creación exitosa",
        text: "¡Se ha creado el usuario con éxito!"
    });
}

/* --- DELETE --- */
// Eliminar el usuario especificado dentro del modelo.
const deleteUser = async (req, res) => {
    const success = await deleteUserFromDB(parseInt(req.params.id));

    // success[0] => Booleano que indica si se pudo eliminar con éxito el usuario
    //               en la base de datos.
    if (success[0]) {

        // success[1] => String que representa el nombre de la imagen 
        //               en la carpeta '/uploads' que se debe eliminar.
        unlink(`public/${success[1]}`, (err) => {
            if (err) {
                console.error(`Error al intentar eliminar la imagen: ${err}`);
            }
            else {
                console.log("-> Imagen eliminada con éxito!");
            }
        });

        res.redirect(`/admin/delete/${req.params.id}/success`);
    }
    else {
        res.status(422).send("No se pudo eliminar el usuario seleccionado de la base de datos");
    }
}

// Renderizar la página de éxito para la eliminación del usuario.
const successfulDelete = (req, res) => {
    res.render("./global/success", {
        pageTitle: "Eliminación exitosa",
        text: "¡Se ha eliminado el usuario con éxito!"
    });
}



/* --- EXPORT --- */
module.exports = {
    getUsers,
    getLoginForm,
    processLogin,
    getUser,
    editUser,
    getCreateForm,
    createUser,
    deleteUser,
    successfulCreate,
    successfulEdit,
    successfulDelete
};
