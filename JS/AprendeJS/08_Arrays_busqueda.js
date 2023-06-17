/* 
	Crear una función que reciba un array de palabras que devuelva true si todas
	las palabras terminan en 'a' y false si al menos una palabra no termina con
	la letra 'a'. Usar el método de string endsWith() para resolverlo.
*/
function acabanEnA(words) {
	return words.every(word => word.endsWith("a") );
}