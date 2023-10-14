/*
    6. Se deberá usar alguna promesa para obtener la información sobre películas
       y filtrar por las que tienen una calificación mayor a 7. 
*/

const peliculas = [
    {
        id: 1,
        titulo: "Career Girls",
        director: "Mike Leigh",
        genero: "Drama",
        anio: 1997,
        duracionEnMinutos: 83,
        ganoOscar: false,
        calificacionIMDB: 7.1
    },
    {
        id: 2,
        titulo: "Our Idiot Brother",
        director: "Jesse Peretz",
        genero: "Comedia",
        anio: 2011,
        duracionEnMinutos: 90,
        ganoOscar: false,
        calificacionIMDB: 6.4
    },
    {
        id: 3,
        titulo: "Liebestraum",
        director: "Mike Figgis",
        genero: "Horror",
        anio: 1991,
        duracionEnMinutos: 112,
        ganoOscar: true,
        calificacionIMDB: 6
    },
    {
        id: 4,
        titulo: "Summer and Smoke",
        director: "Peter Glenville",
        genero: "Drama",
        anio: 1961,
        duracionEnMinutos: 118,
        ganoOscar: false,
        calificacionIMDB: 6.9
    },
    {
        id: 5,
        titulo: "Axed",
        director: "Ryan Lee Driscoll",
        genero: "Thriller",
        anio: 2012,
        duracionEnMinutos: 84,
        ganoOscar: false,
        calificacionIMDB: 3.7
    },
    {
        id: 6,
        titulo: "The Mist",
        director: "Frank Darabont",
        genero: "Sci-Fi",
        anio: 2007,
        duracionEnMinutos: 126,
        ganoOscar: true,
        calificacionIMDB: 7.1
    },
    {
        id: 7,
        titulo: "Tom and Huck",
        director: "Peter Hewitt",
        genero: "Aventura",
        anio: 1995,
        duracionEnMinutos: 97,
        ganoOscar: false,
        calificacionIMDB: 5.5
    },
    {
        id: 8,
        titulo: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        genero: "Aventura",
        anio: 2003,
        duracionEnMinutos: 401,
        ganoOscar: true,
        calificacionIMDB: 8.9
    },
    {
        id: 9,
        titulo: "Doctor Strange",
        director: "Scott Derrickson",
        genero: "Accion",
        anio: 2016,
        duracionEnMinutos: 115,
        ganoOscar: true,
        calificacionIMDB: 7.5
    },
    {
        id: 10,
        titulo: "The Last Lovecraft: Relic of Cthulhu",
        director: "Henry Saine",
        genero: "Horror",
        anio: 2009,
        duracionEnMinutos: 78,
        ganoOscar: false,
        calificacionIMDB: 5.6
    }
]

/**
 * Filtrar un array de objetos de películas según una calificación como condición.
 * @param {Array} movies Array de objetos
 * @param {Number} calification Calificación
 * @returns {Array} Array filtrado
 */
function filterMovies(movies, calification) {
    const filteredMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i]?.calificacionIMDB > calification) {
            filteredMovies.push(movies[i]);
        }
    }
    return filteredMovies;
}

/**
 * Promesa que retorna como respuesta las películas filtradas según una calificación
 * como condición
 * @param {Array} movies Array de películas
 * @param {Number} calification Calificación
 * @returns {Promise} Promesa
 */
function returnFilteredMovies(movies, calification) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const filteredMovies = filterMovies(movies, calification);
            if (filteredMovies) {
                res(filteredMovies);
            }
            else {
                rej("Algo ha salido mal :(");
            }
        }, 5000);
    });
}

/**
 * Función asincrónica que retorna un array de películas filtradas según una
 * calificación como condición.
 * @param {Array} movies Array de películas
 * @param {Number} calification Calificación
 * @returns {Array} Array con las películas filtradas
 */
async function findMovies(movies, calification) {
    try {
        const filteredMovies = await returnFilteredMovies(movies, calification);
        return filteredMovies;
    }
    catch (err) {
        console.log(err.message);
    }
}

/**
 * Crear los /<div> que contengan la información de las películas filtradas.
 * @param {Array} filteredMovies Array de películas
 * @returns {DocumentFragment} DocumentFragment
 */
function createFragment(filteredMovies) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < filteredMovies.length; i++) {
        const title = document.createElement("h2");
        title.textContent = filteredMovies[i].titulo;

        const director = document.createElement("h3");
        director.textContent = filteredMovies[i].director;

        const genre = document.createElement("p");
        genre.textContent = `• Género: ${filteredMovies[i].genero}`;

        const year = document.createElement("p");
        year.textContent = `• Año de estreno: ${filteredMovies[i].anio}`;

        const duration = document.createElement("p");
        duration.textContent = `• Duración: ${filteredMovies[i].duracionEnMinutos} minutos`;

        const oscar = document.createElement("p");
        oscar.textContent = filteredMovies[i].ganoOscar ?
                            "• Ganó el Óscar" : 
                            "• No ganó el oscar";

        const calification = document.createElement("p");
        calification.textContent = `• Calificación IMDB: ${filteredMovies[i].calificacionIMDB}`;

        const div = document.createElement("div");
        div.classList.add("movie-container");
        div.append(title);
        div.append(director);
        div.append(genre);
        div.append(year);
        div.append(duration);
        div.append(oscar);

        fragment.append(div);
    }
    return fragment;
}


findMovies(peliculas, 7)
    .then(filteredMovies => {
        const fragment = document.createDocumentFragment();
        const h1 = document.createElement("h1");
        h1.textContent = "Películas con calificación superior a 7";
        fragment.append(h1);
        fragment.append(createFragment(filteredMovies));
        document.body.append(fragment);
    })
    .catch(err => console.error(err.message));

