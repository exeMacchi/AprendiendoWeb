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

// Función de filtrado
function filterMovies(movies, calification) {
    const filteredMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i]?.calificacionIMDB > calification) {
            filteredMovies.push(movies[i]);
        }
    }
    return filteredMovies;
}

// Promesa
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

// Función asincrónica
async function findMovies(movies, calification) {
    try {
        const filteredMovies = await returnFilteredMovies(movies, calification);
        return filteredMovies;
    }
    catch (err) {
        console.log(err.message);
    }
}


// Resultados
console.log("A");

findMovies(peliculas, 7)
    .then(filteredMovies => console.log(filteredMovies))
    .catch(err => console.error(err.message));

console.log("B");
