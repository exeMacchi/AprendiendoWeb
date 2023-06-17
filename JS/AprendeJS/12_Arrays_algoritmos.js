/* 
	En una biblioteca queremos saber qué libro es el que más y menos páginas tiene.
	Por suerte, no hay dos libros con el mismo número de páginas.
	Necesitamos que la función reciba un array de números, sin ordenar, y que
	devuelva un array de dos posiciones con el índice del libro con menos páginas
	y el índice del libro con más páginas.
*/

function minAndMaxPages(books) {
	let minAndMax = [0, 0];
	let min = books[0];
	let max = books[0];
	for (let i = 1; i < books.length; i++) {
		if (books[i] < min) {
			min = books[i];
			minAndMax[0] = i;
		}
		
		if (books[i] > max) {
			max = books[i];
			minAndMax[1] = i;
		}
	}
	return minAndMax;
}