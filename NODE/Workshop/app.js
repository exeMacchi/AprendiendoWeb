const express = require("express");
require("dotenv").config();
const session = require("express-session");
const app = express();
const port = process.env.SV_PORT || 3000;

// Rutas
const indexRoutes = require("./src/routes/indexRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

// Motor de plantillas
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Middleware: archivos estáticos
app.use(express.static("public"));

// Middleware: decodificar
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Middleware: express-session
app.use(session({
    secret: process.env.SECRET, // "workshopnode"
    name: "session",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 2 // 2 minutos
    }
}))


// HOME
app.use("/", indexRoutes);

// USERS (Public)
app.use("/users", usersRoutes);

// USERS (Admin)
app.use("/admin", adminRoutes);


// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor iniciado y escuchando en el puerto ${port}`);
})
