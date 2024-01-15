const pool = require("../config/database");

/**
 * Obtener la información de todos los usuarios desde la base de datos.
 * @returns Array de objetos donde cada objeto representa un registro devuelto
 *          desde la base de datos.
 */
async function getUsersFromDB() {
    try {
        const [users] = await pool.query("SELECT * FROM users");
        return users;
    }
    catch (err) {
        console.error(`Error en la consulta a la base de datos: ${err}`);
        throw err;
    }
};

/**
 * Obtener la información de un usuario específico desde la base de datos.
 * @returns Array con un objeto que representa el registro devuelto desde la 
 *          base de datos.
 */
async function getUserFromDB(id) {
    const sql = `
    SELECT * FROM users
    WHERE id = ?`;
    try {
        const [user] = await pool.query(sql, [id])
        return user;
    }
    catch (err) {
        console.error(`Error en la consulta a la base de datos: ${err}`);
        throw err;
    }
};

async function getUserFromDBByUsername(username) {
    const query = `
    SELECT * FROM admins
    WHERE username = ?`;

    try {
        const [userData] = await pool.query(query, [username]);
        return userData;
    }
    catch (err) {
        console.error(`Error en la consulta a la base de datos: ${err}`);
        throw err;
    }
}

/**
 * Actualizar la información de un usuario específico en la base de datos.
 * @param {Object} user Objeto con la información del usuario.
 * @returns {Boolean} Valor booleano que indica si se actualizó el usuario con
 *                    éxito o no.
 */
async function editUserInDB(user) {
    const sql = `
    UPDATE users
    SET name = ?,
        age = ?,
        email = ?,
        phone = ?,
        location = ?,
        image = ?
    WHERE id = ?`;
    const parameters = [ 
        user.name, 
        user.age, 
        user.email, 
        user.phone, 
        user.location,
        user.image, 
        user.id
    ];

    try {
        const [modifiedUser] = await getUserFromDB(user.id);
        const [result] = await pool.query(sql, parameters);
        if (result.changedRows === 1) {
            console.log("-> Usuario actualizado con éxito");
            return [true, modifiedUser.image];
        }
        else {
            console.log("-> Ningún registro fue actualizado");
            return [false];
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}


/**
 * Agregar un nuevo usuario en la base de datos.
 * @param {Object} newUser Objeto con la información del nuevo usuario.
 * @returns {Boolean} Indicar si se pudo o no agregar el nuevo usuario en la DB.
 */
async function createUserInDB(newUser) {
    const sql = `INSERT INTO users (id, name, age, email, phone, location, image)
                 VALUES (NULL, ?, ?, ?, ?, ?, ?)`;
    const parameters = [
        newUser.name,
        newUser.age,
        newUser.email,
        newUser.phone,
        newUser.location,
        newUser.image
    ];

    try {
        const [result] = await pool.query(sql, parameters);
        if (result.affectedRows > 0) {
            console.log("-> Se agregó un nuevo usuario en la base de datos.");
            return true;
        }
        else {
            console.log("-> No se ha agregado el nuevo usuario en la base de datos");
            return false;
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}


/**
 * Eliminar un usuario en la base de datos.
 * @param {Number} id ID del usuario que se quiere eliminar
 * @returns {Array} Un array con dos elementos: un booleano que representa la
 *                  resolución de la operación y un string que indica la ruta
 *                  de la imagen asociada al usuario eliminado.
 */
async function deleteUserFromDB(id) {
    const sql = `DELETE FROM users WHERE id = ?`;

    try {
        const [deletedUser] = await getUserFromDB(id);
        const [result] = await pool.query(sql, [id]);
        if (result.affectedRows > 0) {
            console.log("-> Se eliminó el usuario seleccionado en la base de datos");
            return [true, deletedUser.image];
        }
        else {
            console.log("-> No se pudo eliminar el usuario seleccionado en la base de datos");
            return [false];
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}


module.exports = {
    getUsersFromDB,
    getUserFromDB,
    getUserFromDBByUsername,
    editUserInDB,
    createUserInDB,
    deleteUserFromDB
};
