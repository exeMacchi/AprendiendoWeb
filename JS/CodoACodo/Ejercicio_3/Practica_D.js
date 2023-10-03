/*
    Crear una función que calcule un descuento del 15% según el precio que se 
    envíe, se debe invocar y almacenar en una variable para que luego se indique 
    por consola: "El costo final con descuento es de $ …" 
    (El desafío de pensar cuántos parámetros se deben pasar y luego que cálculo 
    debe hacerse dentro de la función).
*/

function main() {
    const initialCost = 1000;
    const discount = 15;
    const finalCost = calculateFinalCost(initialCost, discount);
    console.log(`El costo final con descuento es de \$${finalCost}`);
}

function calculateFinalCost(price, discount) {
    let finalDiscount = calculateDiscount(discount);
    return price * finalDiscount;
}

function calculateDiscount(discount) {
    return (100 - discount) / 100;
}

/* -------------------------------------------------------------------------- */
main();
