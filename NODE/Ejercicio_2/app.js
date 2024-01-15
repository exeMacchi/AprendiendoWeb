const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "index.html");
// })

// app.get("/users", (req, res) => {
//     res.sendFile(__dirname + "/users/users.html");
// })

app.listen(port, () => {
    console.log(`Servidor iniciado y escuchando en el puerto ${port}`);
})
