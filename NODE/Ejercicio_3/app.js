const express = require("express");
const app = express();
const port = 8080;
const games = [
    {
        id: 1,
        title: "Red Dead Redemption 2"
    },
    {
        id: 2,
        title: "The Last of Us"
    },
    {
        id: 3,
        title: "Alan Wake"
    }
]

// Middleware necesario para poder extraer la información del JSON que proviene
// de las solicitudes para los métodos POST, PUT y DELETE.
app.use(express.json());

/* --- GET --- */
app.get("/", (req, res) => {
    res.send("Hello, World!");
})

// Devolver el array con todos los juegos.
app.get("/api/games", (req, res) => {
    res.send(games);
})

// Devolver un juego específico del array a partir del id que aparece en una ruta parametrizada.
app.get("/api/games/:id", (req, res) => {
    const game = games.find(game => game.id === parseInt(req.params.id));
    if (!game) {
        res.status(404).send(`The game with ID ${req.params.id} was not found :(`);
    }
    res.send(game);
})

/* --- POST --- */
// Agregar un nuevo juego al array.
app.post("/api/games", (req, res) => {
    const newGame = {
        id: games.length + 1,
        title: req.body.title
    }
    games.push(newGame);
    res.status(200).send(`Game succesfully added! ${newGame.title}`);
})


/* --- START SERVER --- */
app.listen(port, () => {
    console.log(`Servidor iniciado y escuchando en el puerto ${port}`);
})
