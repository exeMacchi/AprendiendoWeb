const adminRequired = (req, res, next) => {
    if (!req.session.isAdmin) {
        return res.redirect("/admin/login")
    }
    next();
}

module.exports = adminRequired;
