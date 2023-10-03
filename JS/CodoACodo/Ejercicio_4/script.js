/*
    Ejercicio 4: crear una función que nos permitirá agregar productos que 
    necesitemos: 
        • Crear un array vacío, que se irá llenando de una lista de productos, 
          deberemos usar un bucle para que nos vaya preguntando qué producto agregar. 
          Sólo dejará de hacer el bucle cuando le digamos que no queremos seguir 
          agregando productos.

        • Dentro del bucle, crear un objeto llamado "producto" con las siguientes 
          propiedades:
            - Nombre
            - Precio
            - Stock

        • Cada producto se ingresará en un array vacío, la función terminará al 
          retornar un ARRAY DE OBJETOS.
          
        • Recorrer el array de objetos utilizando los métodos aprendidos.
*/

function main() {
    const products = createProducts();
    showProducts(products);
}

function createProducts() {
    const products = [];
    let i = 1;
    while (true) {
        const product = {};
        productInformation(product, i);
        products.push(product);

        if (!confirm("¿Agregar otro producto?")) {
            break;
        }

        i++;
    }
    return products;
}

function productInformation(product, i) {
    const name = prompt(`Nombre del producto ${i}: `);
    const price = prompt(`Precio del producto ${i}: `);
    const stock = Number(prompt(`Stock del producto ${i}: `));

    product.name = name;
    product.price = price;
    product.stock = stock;
}

function showProducts(products) {
    const mainStructure = document.createElement("main");
    const h1 = document.createElement("h1");
    h1.textContent = "Productos";
    mainStructure.appendChild(h1);

    const fragment = document.createDocumentFragment();
    for (const product of products) {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <p>${product.stock}</p>
        `;
        fragment.appendChild(div);
    }
    mainStructure.appendChild(fragment);
    document.body.appendChild(mainStructure);
}

/*----------------------------------------------------------------------------*/
main();
