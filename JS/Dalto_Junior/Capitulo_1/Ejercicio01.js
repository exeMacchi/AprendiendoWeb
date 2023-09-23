// Ejercicio 1: entrás a una heladería para comprar el helado más caro posible 
// con el dinero que posees. La lista de precios es la siguiente:
// Precios:
//    Palito de helado de agua: $0.6
//    Palito de helado de crema: $1
//    Bombón helado: $1.6
//    Pote de 1/4 kg: $1.7
//    Pote de 1/2 kg: $1.8
//    Pote de 1 kg: $2.9
// Resolver:
//    A. Pedir el dinero en pantalla y mostrar el helado más caro que se puede
//       comprar.
//    B. Indicar el vuelto.

let dinero = parseFloat(prompt("¿Cuánto dinero tiene?"));
let vuelto = null;

if (dinero >= 2.9) {
    vuelto = dinero - 2.9;
    alert("Usted compró un pote de 1 kg. " + 
          `Su vuelto es $${vuelto.toFixed(2)}`);
}
else if (dinero >= 1.8) {
    vuelto = dinero - 1.8;
    alert("Usted compró un pote de 1/2 kg. " + 
          `Su vuelto es $${vuelto.toFixed(2)}`);
}
else if (dinero >= 1.7) {
    vuelto = dinero - 1.7;
    alert("Usted compró un pote de 1/4 kg. " + 
          `Su vuelto es $${vuelto.toFixed(2)}`);
}
else if (dinero >= 1.6) {
    vuelto = dinero - 1.6;
    alert("Usted compró un bombón helado. " + 
          `Su vuelto es $${vuelto.toFixed(2)}`);
}
else if (dinero >= 1) {
    vuelto = dinero - 1;
    alert("Usted compró un palito de helado de crema. " + 
          `Su vuelto es $${vuelto.toFixed(2)}`);
}
else if (dinero >= 0.6) {
    vuelto = dinero - 0.6;
    alert("Usted compró un palito de helado de agua. " + 
          `Su vuelto es $${vuelto.toFixed(2)}`);
}
else {
    alert("No puede comprar nada.")
}
