/*
    7. Usar una API, tomar la información y mostrarla en el HTML usando DOM.
*/

async function fetchData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/alpha?codes=ar");
        const data = await response.json();

        console.log(data);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

function createHeader(data) {
    const h1 = document.createElement("h1");
    h1.textContent = data[0].altSpellings[2];

    const img = document.createElement("img");
    img.setAttribute("src", data[0].flags.svg);
    img.setAttribute("alt", data[0].flags.alt);

    const figure = document.createElement("figure");
    figure.append(img);

    const header = document.createElement("header");
    header.classList.add("header-container");
    header.append(h1);
    header.append(figure);

    return header;
}

function createMain(data) {
    const capital = document.createElement("p");
    capital.innerHTML = `<span class="bold">Capital</span>: ${data[0].capital[0]}`;

    const population = document.createElement("p");
    population.innerHTML = `<span class="bold">Población</span>: ${data[0].population}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="bold">Área</span>: ${data[0].area} km2`;

    const continent = document.createElement("p");
    continent.innerHTML = `<span class="bold">Continente</span>: ${data[0].region}`;

    const language = document.createElement("p");
    language.innerHTML = `<span class="bold">Idioma oficial</span>: ${data[0].languages.spa}`;

    const borders = document.createElement("p");
    borders.innerHTML = `<span class="bold">Países fronterizos</span>: ${data[0].borders.join(", ")}`;

    const main = document.createElement("main");
    main.append(capital);
    main.append(population);
    main.append(area);
    main.append(continent);
    main.append(language);
    main.append(borders);

    return main;
}


fetchData()
    .then(data => {
        const fragment = document.createDocumentFragment();
        fragment.append(createHeader(data));
        fragment.append(createMain(data));
        document.body.append(fragment);
    })
    .catch(err => console.error(err));
