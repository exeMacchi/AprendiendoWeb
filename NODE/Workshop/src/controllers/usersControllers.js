const { getUserFromDB } = require("../model/model");

// Devolver un usuario específico (/users/:id)
const getUser = async (req, res) => {
    const [user] = await getUserFromDB(parseInt(req.params.id));
    if (!user) { res.status(404).send("Usuario no encontrado"); }
    res.render("userProfile", {
        pageTitle: `${user.name}`,
        user
    });
};

module.exports = {
    getUser
};
