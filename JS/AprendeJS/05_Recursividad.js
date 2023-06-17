// Escribe una función que calcule la suma de los primeros n números enteros de
// forma recursiva. Por ejemplo: suma(3) => 1 + 2 + 3 = 6
function suma(n) {
    if (n <= 1) {
		return n;
	}
	else {
		return n + suma(n - 1);
	}
}

let resultado = suma(3);
console.log(resultado);


// Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
// Por ejemplo: fibonacci(6) => 8 (0, 1, 1, 2, 3, 5, 8)
function fibonacci(series, n1 = 0, n2 = 1) {
	if (series == 1) { 
		return n2; 
	}
	else {
		let n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		return fibonacci(series - 1, n1, n2);
	}
}

let serieFibonacci = fibonacci(6);
console.log(serieFibonacci);