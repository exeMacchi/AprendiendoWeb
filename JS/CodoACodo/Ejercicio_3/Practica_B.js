/*
    Crear una función para saludar a una determinada persona. 
    (tip: pasaremos el nombre como parámetro).
*/

function main() {
    alert(greetings(prompt("¿Cuál es tu nombre?")));
}

function greetings(name) {
    return `Hi! ${name}`;
}

/* -------------------------------------------------------------------------- */
main();
