// Ejercicio 2: un joven muy afortunado logró ganar el primer premio de la
// lotería y, para celebrarlo, decide hacer una gran fiesta. Para evitarse
// posibles problemas, compra una máquina para que deja pasar solo a aquellas
// personas mayores de edad.
// Crear una función en la cual:
//    A. Deje pasar solo a los mayores de edad.
//    B. La primer persona después de las 2 AM no paga.

const mayorDeEdad = edad => {
    if (edad >= 18) {
        alert("Podés entrar en la fiesta.");
        return true;
    }
    else {
        alert("No podés entrar en la fiesta.");
        return false;
    }
}

function fiesta(tiempo) {
    let edad = parseInt(prompt("¿Cuál es tu edad?"));
    if (mayorDeEdad(edad)) {
        if (tiempo >= 2 && !free) {
            free = true;
            alert("No tenés que pagar entrada.");
        }
        else {
            alert("Tenés que pagar la entrada.");
        }
    }
}

let free = false;
fiesta(0);
fiesta(1);
fiesta(2);
fiesta(3);
