/*
	Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición
	de la palabra "JavaScript" en la matriz y devolver su posición como un array
	de dos elementos: el índice de la fila y el índice de la columna. Si no se 
	encuentra la palabra, se debe devolver [-1, -1]
*/

//---------------------------- Solución número 1 ---------------------------- //
function findJavaScriptOne(matrix) {
	let posiciones = [-1, -1];
 	matrix.forEach( (fila, iFila) => {
 		fila.forEach( (cadena, iColumna) => {
 			if (cadena === "JavaScript") {
 				posiciones[0] = iFila;
 				posiciones[1] = iColumna;
 				return posiciones;
 			}
 		})
 	})
    return posiciones;
}

//---------------------------- Solución número 2 ---------------------------- //
function findJavaScriptTwo(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === "JavaScript") {
				return [i, j];
			}
		}
	}
	return [-1, -1];
}

const matrix = [
	["HTML", "CSS", "JavaScript"],
	["Java", "C++", "Python"],
	["Ruby", "Go", "C#"]
];

let positionOne = findJavaScriptOne(matrix);
let positionTwo = findJavaScriptTwo(matrix);
console.log(positionOne);
console.log(positionTwo);
