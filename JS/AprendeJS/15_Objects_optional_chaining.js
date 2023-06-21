/*
	Somos un equipo de submarinistas. Estamos explorando el fondo marino, pero
	no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. Vamos con
	un pequeño robot y funciona con un programa que recibe tres parámetros.
		• Un objeto con la información del fondo marino.
		• Una cadena de texto con el nombre del lugar que queremos explorar.
		• Una cadena de texto con el nombre del objeto que queremos encontrar.
	Si lo encontramos, el robot nos devuelve true; si no lo encuentra, nos
	devuelve false. Solo necesitamos saber si lo hemos encontrado o no, no
	necesitamos saber su valor.
*/

function searchInOcean(ocean, section, item) {
	if (ocean?.[section]?.[item]) {
		return true;
	}
	else {
		return false;
	}
}
