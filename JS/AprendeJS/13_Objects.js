/*
	Tenemos una función que recibe dos parámetros: name y subs. Haz que la función devuelva un objeto con la siguiente información:
		• name: con el valor del parámetro name.
		• subscribers: con el valor del parámetro subs.
		• hash: con el valor de la longitud del string name multiplicado por el parámetro subs.
		• Método getStatus que devuelva la cadena "El canal de <name> tiene <subs> suscriptores.
*/

function createObject(name, subs) {
	const youtubeCreator = {
		name: name,
		subscribers: subs,
		hash: name.length * subs,
		getStatus: () => {
			return `El canal de ${name} tiene ${subs} suscriptores`;
		}
	}

	return youtubeCreator;
}

const youtubeCreator = createObject("Dani", 100);
console.log(youtubeCreator);
