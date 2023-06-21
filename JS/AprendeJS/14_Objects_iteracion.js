/*
	Tienes una función que recibe un objeto como parámetro. La función debe
	retornar un array con el nombre de las propiedades que su tipo sea boolean.
*/
// ---------------------------- Solución n° 1 ------------------------------- //
function getKeysOfBooleanValues(obj) {
	const propiedadesAndValores = Object.entries(obj);
	const propiedadesYValoresFiltradas = propiedadesAndValores.filter((propiedadAndValor) => 
										propiedadAndValor[1] === true || 
										propiedadAndValor[1] === false);
	let propiedadesFiltradas = new Array();
	for (let i = 0; i < propiedadesYValoresFiltradas.length; i++) {
		propiedadesFiltradas[i] = propiedadesYValoresFiltradas[i][0];
	}
	return propiedadesFiltradas;
}

// ---------------------------- Solución n° 2 ------------------------------- //
function getKeysOfBooleanValues(obj) {
	const propiedades = Object.keys(obj);
	const valores = Object.values(obj);

	let propiedadesFiltradas = new Array();
	let j = 0;
	for (let i = 0; i < propiedades.length; i++) {
		if (valores[i] === true || valores[i] === false) {
			propiedadesFiltradas[j] = propiedades[i];
			j++
		}
	}
	return propiedadesFiltradas;
}
