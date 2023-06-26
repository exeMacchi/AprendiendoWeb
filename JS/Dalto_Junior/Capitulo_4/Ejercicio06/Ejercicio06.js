/*
	Ejercicio 6: crear una función para inscribir un alumno a una clase según
	una condición:
		• Si ya hay 20 alumnos anotados en la materia, negarle la inscripción.
		• Si hay menos de 20 alumnos anotados en la materia, añadirlo en el
		  listado de alumnos.
*/

const materias = {
    fisica: ["Pérez", "Pedro", "Pepito", "Cofla", "María"],
    programacion: ["Martínez", "Pedro", "Juan", "Pepito"],
    logica: ["Rodríguez", "Pedro", "Juan", "Cofla", "María"],
    quimica: ["Hernández", "Pepito", "Cofla", "María"]
}

function inscribirAlumno(nombreAlumno, materia) {
    alumnosTotalesMateria = materias[materia].length - 1;
    if (alumnosTotalesMateria < 20) {
        materias[materia].push(nombreAlumno);
    }
    else {
        alert(`No es posible inscribir a ${nombreAlumno} a la materia ${materia} ` + 
              "porque no hay cupo en la comision.");
    }
}

inscribirAlumno("Gonzales", "quimica");
