/*
    - Declarar y definir 2 variables (usuario y password)
    - A continuación crear condicional para que chequee si el usuario y password 
      son los correctos con lo ingresado a través de “prompt”, si no indicar que 
      no es correcto.
*/

const user = "Exequiel";
const pass = "123";

function logIn(user, pass) {
    let username = prompt("Ingrese su usuario:");
    let password = prompt("Ingrese la contraseña:");

    if (username == user && password == pass) {
        alert(`Bienvenido, ${user}.`);
    }
    else {
        alert("Usuario y contraseña erróneas.");
    }
}

logIn(user, pass);
