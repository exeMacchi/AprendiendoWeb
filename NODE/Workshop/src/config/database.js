require("dotenv").config();

const { createPool } = require("mysql2/promise");

// Crear la piscina de conexiones
const pool = createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "workshop_node",
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
});

// Prueba de conexión
pool.getConnection()
    .then(connection => {
        console.log(`Conectado con la base de datos: ${connection.config.database}`);
        connection.release();
    })
    .catch(err => console.error("Error al conectar con la base de datos", err));


// Exportar la pool de conexiones
module.exports = pool;
