/*
    Ejercicio 5:
    A) Crear una función que, al pasarle como parámetro una materia,
    nos muestre:
        • El profesor asignado a la materia.
        • El nombre de todos los alumnos. 

    B) Crear una función que nos muestre en cuántas clases está incripto un
    alumno, mostrando en cuales.
*/

const materias = {
    fisica: {
        profesor: "Pérez",
        alumnos: ["Pedro", "Pepito", "Cofla", "Maria"]
    },
    programacion: {
        profesor: "Dalto",
        alumnos: ["Pedro", "Juan", "Pepito"]
    },
    logica: {
        profesor: "Rodríguez",
        alumnos: ["Pedro", "Juan", "Cofla", "María"]
    },
    quimica: {
        profesor: "Hernández",
        alumnos: ["Pedro", "Pepito", "Cofla", "María"]
    }
}

function informacionMateria(materia) {
    if (materias?.[materia]) {
        let profesorAsignado = materias[materia].profesor;
        let alumnosAsignados = formatearAlumnos(materias[materia].alumnos);
        console.log(`La materia ${materia} tiene asignado al profesor ${profesorAsignado} ` +
        `y los alumnos son los siguientes: ${alumnosAsignados}.`);
    }
    else {
        console.log(`La materia ${materia} no está inscripta en la cátedra.`)
    }
}

function formatearAlumnos(alumnos) {
    let alumnosAsignados = alumnos.slice(0, alumnos.length - 1).join(", ");
    return alumnosAsignados.concat(` y ${alumnos[alumnos.length - 1]}`);
}


function informacionAlumno(alumno) {
    let cantidadClases = 0;
    let materiasInscriptas = [];
    for (const materia in materias) {
        for (const alumnoAsignado of materias[materia].alumnos) {
            if (alumnoAsignado === alumno) {
                cantidadClases++;
                materiasInscriptas.push(materia);
            }
        }
    }
    materiasInscriptas = materiasInscriptas.join(", ");
    console.log(`${alumno} está inscripto en ${cantidadClases} clases (${materiasInscriptas}).`);
}


console.log("A)")
informacionMateria("quimica");
informacionMateria("fisica");
informacionMateria("matematicas");
informacionMateria("programacion");
informacionMateria("logica");
console.log("---------------------------------------")

console.log("B)")
informacionAlumno("Pedro");
informacionAlumno("María");
informacionAlumno("Juan");
informacionAlumno("Cofla");
console.log("---------------------------------------")

