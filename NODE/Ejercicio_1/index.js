const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });

        res.end("<h1>Hola, Exequiel, esto funcionó correctamente!</h1>");
    }
    else if (req.url === "/clientes") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        res.write("<h1>Lista de clientes</h1>");
        res.write(`
        <ul>
            <li>Ricardo</li>
            <li>Roberto</li>
            <li>Ramón</li>
            <li>Raúl</li>
            <li>Renzo</li>
        </ul>
        `);

        res.end();
    }
})

server.listen(8080, () => {
    console.log("Servidor abierto y escuchando en el puerto 8080");
})
