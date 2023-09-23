function main() {
    makeMainStructure();
    createKeyItems();
    createForm();
}

/**
 * Crear la estructura principal del body (\<main\>)
 */
function makeMainStructure() {
    const myBody = document.querySelector("body");
    const main = document.createElement("main");
    main.classList.add("grid-container");
    myBody.appendChild(main);
}

/**
 * Crear todas las tarjetas de llaves.
 */
function createKeyItems() {
    const main = document.querySelector("main");
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 20; i++) {
        let div = createGridItem(i);
        fragment.appendChild(div);
    }

    main.appendChild(fragment);
}

/**
 * Crear un formulario con un input oculto, donde un botón mostrará una alerta con 
 * toda la información de la llave cuando haga click en él.
 */
function createForm() {
    const myInput = document.createElement("input");
    myInput.setAttribute("type", "hidden");

    const myButton = document.createElement("button");
    myButton.setAttribute("type", "button");
    myButton.textContent = "Enviar";
    myButton.onclick = function() {
        if (myInput.value !== "") {
            alert(`Has seleccionado la siguiente llave:\n${myInput.value}`);
        }
        else {
            alert("No se ha seleccionado ninguna llave. Por favor, seleccione una antes de continuar.");
        }
    }

    const myForm = document.createElement("form");
    myForm.appendChild(myInput);
    myForm.appendChild(myButton);

    const main = document.querySelector("main");
    main.appendChild(myForm);
}

/*----------------------------------------------------------------------------*/

/**
 * Crear una tarjeta con la información completa de una llave.
 * @param {Number} index Índice de la tarjeta.
 * @returns Se devuelve la tarjeta con la información completa (\<div\>...\</div\>).
 */
function createGridItem(index) {
    const div = document.createElement("div");
    div.classList.add("grid-item", "flex-container");
    div.tabIndex = index; // Esto me ayuda a seleccionar una llave y que se deseleccione otras (.grid-item:focus)
    const figure = document.createElement("figure");
    figure.classList.add("flex-item");
    const img = document.createElement("img");
    img.classList.add("flex-item");
    const h2 = document.createElement("h2");
    h2.classList.add("flex-item");
    const h3 = document.createElement("h3");
    h3.classList.add("flex-item");
    const p = document.createElement("p");
    p.classList.add("flex-item");
    const key = createKey(index);

    img.setAttribute("src", key.img);
    figure.appendChild(img);
    h2.textContent = key.name;
    h3.textContent = key.model;
    p.textContent = `$${key.price}`;

    div.appendChild(figure);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);

    div.addEventListener("click", () => {
        const myInput = document.querySelector("input");
        myInput.value = key.toString();
    });

    return div;
}

/**
 * Crear y devolver un objeto 'Key' con información completa.
 * @param {Number} index Índice de la tarjeta actual que se utilizará en el nombre de la llave.
 * @returns {Key} Objeto llave con toda la información.
 */
function createKey(index) {
    let name = `Llave ${index}`;
    let model = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    let price = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    let img = "https://cdn-icons-png.flaticon.com/512/44/44793.png";
    const newKey = new Key(name, model, price, img);

    return newKey;
}

/*----------------------------------------------------------------------------*/
class Key {
    #name;
    #model;
    #price;
    #img;

    constructor(name, model, price, img) {
        this.#name = name;
        this.#model = model;
        this.#price = price;
        this.#img = img
    }

    get name() { return this.#name; }
    get model() { return this.#model; }
    get price() { return this.#price; }
    get img() { return this.#img; }

    toString() {
        return `${this.#name}\n` +
               `Modelo: ${this.#model}\n` +
               `Precio: $${this.#price}`;
    }
}
/*----------------------------------------------------------------------------*/
main();
