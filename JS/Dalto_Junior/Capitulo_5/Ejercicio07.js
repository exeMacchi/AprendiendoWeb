/*
	Ejercicio 7: crear una función que muestre por consola si un alumno aprobó o
	desaprobó una materia. Para aprobar una materia se necesita:
		• 90% de asistencia.
		• Promedio de 7.
		• 75% de trabajos prácticos entregados (100% son 4 trabajos prácticos).
*/

const resumenMaterias = {
    fisica: [90, 6, 3], // [asistencia, promedio, entregas]
    matematicas: [84, 8, 2],
    logica: [92, 8, 4],
    quimica: [96, 8, 4],
    calculo: [91, 6, 3],
    programacion: [79, 7, 4],
    biologia: [75, 9, 2],
    basesDeDatos: [98, 9, 1],
    algebra: [100, 10, 4]
}

function condicionMateria(asistencia, promedio, entregas) {
    if (asistencia < 90) {
        return [false, "falta de asistencias."];
    }
    if (promedio < 7) {
        return [false, "falta de promedio."];
    }
    if (entregas < 3) {
        return [false, "falta de entregas."];
    }
    return [true, "cumple todas las condiciones."];
}

console.group("Boletín");
for (const materia in resumenMaterias) {
    console.groupCollapsed(materia);
    let condicion = condicionMateria(resumenMaterias[materia][0], 
                                     resumenMaterias[materia][1],
                                     resumenMaterias[materia][2])
    if (condicion[0]) {
        console.log(`%cAprobado: ${condicion[1]}`, "color:green;")
    }
    else {
        console.log(`%cDesaprobado: ${condicion[1]}`, "color:red;")
    }
    console.groupEnd();
}
console.groupEnd();

function prueba(n) {
    if (n === 1) {
        return [true, "Si"];
    }
    else {
        return [false, "No"];
    }
}

