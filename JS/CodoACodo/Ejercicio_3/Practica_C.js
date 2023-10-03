/*
    Crea una función para chequear el área de un rectángulo.
    (tip: pasaremos un 2 números, base y altura, como parámetros)
*/

function main() {
    const rectangle = (b, h) => b * h;
    const base = prompt("Base: ");
    const height = prompt("Height: ");
    console.log(rectangle(base, height));
}

/* -------------------------------------------------------------------------- */
main();
