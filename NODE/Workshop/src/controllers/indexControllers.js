const { getUsersFromDB } = require("../model/model");

// Mostrar la landpage con todos los usuarios.
const getIndex = async (req, res) => {
    try {
        const users = await getUsersFromDB();
        res.render("index", {
            pageTitle: "Inicio",
            title: "Landpage sobre usuarios",
            users
        });
    }
    catch (err) {
        console.error(`Error al obtener los usuarios: ${err}`);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getIndex
}
