// Ejercicio 3: crear un sistema que permita registrar las presencias (P) o
// ausencias (A) de x alumnos de una clase. Pasados los 30 días, se debe 
// mostrar la situación final de dichos alumnos. 
// Solo se tiene un máximo de 10% de ausencias por mes.

//
function rellenarInfoAlumnos(cantidadAlumnos) {
    let alumnos = [];
    for (let i = 0; i < cantidadAlumnos; i++) {
        alumnos[i] = prompt(`Nombre del alumno ${i + 1}`);
    }
    return alumnos;
}

// Función para crear el encabezado de la tabla.
function crearEncabezado() {
    let encabezado = "<thead><tr><th>Alumnos</th>"
    for (let i = 1; i <= 30; i++) {
        encabezado += `<th>Día ${i}</th>`;
    }
    encabezado += "<th>Condición</th></tr></thead>";
    return encabezado;
}

// Función que devuelve según un número aleatorio la presencia "P" o la ausencia
// "A" del alumno. El alumno tiene una probabilidad del 90% de asistir a clase.
function controlAsistencia(inasistencias) {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    if (numeroAleatorio > 0) {
        return "P";
    }
    else {
        inasistencias.valor++;
        return "A";
    }
}

// Función que recuenta las inasistencias para devolver la condición final del
// alumno. Si faltó más de 3 veces (el 10% permitido), está desaprobado.
function condicionFinal(inasistencias) {
    if (inasistencias.valor > 3) {
        return "Desaprobado";
    }
    else {
        return "Aprobado";
    }
}

// Función para crear los registros de la tabla.
function crearContenido(alumnos, cantidadAlumnos) {
    let contenido = "<tbody>";
    for (let i = 0; i < cantidadAlumnos; i++) {
        let inasistencias = { valor: 0 };
        contenido += `<tr><td class="alumno">${alumnos[i]}</td>`;

        // Control de asistencias
        for (let j = 0; j < 30; j++) {
            contenido += `<td>${controlAsistencia(inasistencias)}</td>`
        }

        // Condición
        contenido += `<td>${condicionFinal(inasistencias)}</td>`;

        contenido += "</tr>";
    }
    contenido += "</tbody>";
    return contenido;
}


// Función que crea y devuelve la cadena con el encabezado y los registros para 
// crear la tabla.
function crearTabla() {
    let cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos hay?"))
    let alumnos = rellenarInfoAlumnos(cantidadAlumnos);
    let encabezado = crearEncabezado();
    let contenido = crearContenido(alumnos, cantidadAlumnos);
    let tabla = encabezado + contenido;
    return tabla;
}

// Aplicar estilos condicionales a la tabla según el contenido de cada celda.
function formatoCondicional() {
    let tabla = document.getElementById("asistencias");
    let celdas = tabla.getElementsByTagName("td");
    Array.from(celdas).forEach((celda, i) => {
        let texto = celda.innerText;
        if (i != 0) {
            if (texto == "P") {
                celda.style.backgroundColor = "lightgreen";
            }
            else if (texto == "A") {
                celda.style.backgroundColor = "lightcoral";
            }
            else if (texto == "Aprobado") {
                celda.style.backgroundColor = "green";
            }
            else if (texto == "Desaprobado") {
                celda.style.backgroundColor = "red";
            }
        }
    });
}

// MAIN //
let tabla = document.getElementById("asistencias");
tabla.innerHTML = crearTabla();
formatoCondicional();
