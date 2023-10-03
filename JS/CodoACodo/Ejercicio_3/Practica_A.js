/*
    Crear una función para chequear si sigue en codo a codo, según la edad, 
    es decir, si tiene más o igual a 18 años. 
    (tip: pasaremos la edad como parámetro)
*/

function main() {
    console.log(checkAge(20));
    console.log(checkAge(16));
    console.log(checkAge(18));
}

function checkAge(age) {
    return (age >= 18) ? true : false;
}

/* -------------------------------------------------------------------------- */
main();
