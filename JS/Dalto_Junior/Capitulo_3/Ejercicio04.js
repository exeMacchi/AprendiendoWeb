/* 
    Ejercicio 4: un cliente entra a una tienda de celulares para comprarse uno 
    nuevo. De todos los modelos que hay disponibles en la tienda, prefiere ver 
    las cualidades y comportamientos de cada uno para decidir cuál quiere comprar.

    A. Crear una clase para mostrar las características de los celulares. Cada
       celular debe tener color, peso, resolución de pantalla, resolución de 
       camara y memoria ram. Además, cada celular debe poder prender, reinciar,
       apagar, tomar fotos y grabar audio.

    B. Implementar una clase para los celulares de alta gama, los cuales tienen
       mejores caracteristicas: pueden grabar en cámara lenta, tienen reconocimiento
       facial y una cámara extra.
*/

class Celular {
    // Propiedades
    #color;
    #peso;
    #resolucionPantalla
    #resolucionCamara;
    #memoriaRam;
    encendido;


    // Constructor
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
        this.#color = color;
        this.#peso = peso;
        this.#resolucionPantalla = resolucionPantalla;
        this.#resolucionCamara = resolucionCamara;
        this.#memoriaRam = memoriaRam;
        this.encendido = false;
    }


    // Getters
    get color() { return this.#color; }
    get peso() { return this.#peso; }
    get resolucionPantalla() { return this.#resolucionPantalla; }
    get resolucionCamara() { return this.#resolucionCamara; }
    get memoriaRam() { return this.#memoriaRam; }


    // Métodos
    prender() { 
        if (!this.encendido) {
            console.log("Prendiendo dispositivo móvil.");
            this.encendido = true;
        }
        else {
            console.log("El celular ya está encendido.");
        }
    }

    reiniciar() { 
        if (this.encendido) {
            console.log("Reiniciando dispositivo móvil");
        }
        else {
            console.log("No se puede reinciar el celular porque no está encendido");
        }
    }

    apagar() { 
        if (this.encendido) {
            console.log("Apagando dispositivo móvil");
            this.encendido = false;
        }
        else {
            console.log("El celular ya se encuentra apagado.");
        }
    }

    tomarFoto() { 
        if (this.encendido) {
            console.log("Tomando fotografía...");
        }
        else {
            console.log("No se puede tomar la fotografía porque el celular " + 
                        "se encuentra apagado.");
        }
    }

    grabarVideo() { 
        if (this.encendido) {
            console.log("Grabando video...");
        }
        else {
            console.log("No se puede grabar video porque el celular se " + 
                        "encuentra apagado.");
        }
    }

    toString() {
        return `Color: ${this.#color}\n` +
               `Peso: ${this.#peso} Kg\n` +
               `Resolución de pantalla: ${this.#resolucionPantalla}\n` +
               `Resolución de cámara: ${this.#resolucionCamara} megapíxeles\n` +
               `Memoria RAM: ${this.#memoriaRam}Gb\n`;
    }
}

class CelularAltaGama extends Celular {
    // Propiedades
    #resolucionCamaraExtra;

    // Constructor
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam,
                resolucionCamaraExtra) {
        super(color, peso, resolucionPantalla, resolucionCamara, memoriaRam);
        this.#resolucionCamaraExtra = resolucionCamaraExtra;
    }

    // Getters
    get resolucionCamaraExtra() {return this.#resolucionCamaraExtra; }

    // Métodos
    grabarVideoCamaraLenta() {
        if (this.encendido) {
            console.log("Grabando video en cámara lenta...");
        }
        else {
            console.log("No se puede grabar video en cámara lenta porque " +
                        "el celular se encuentra apagado.");
        }
    }

    reconocimientoFacial() {
        if (this.encendido) {
            console.log("Iniciando reconocimiento facial...");
        }
        else {
            console.log("No se puede iniciar el reconocimiento facial porque " +
                        "el celular se encuentra apagado.");
        }
    }

    toString() {
        return super.toString() +
               `Resolución cámara extra: ${this.#resolucionCamaraExtra} megapíxeles`;
    }
}


const celularEstandar = new Celular("Azul", 1.5, "HD", 16, 2);
celularEstandar.prender();
celularEstandar.tomarFoto();
celularEstandar.reiniciar();
celularEstandar.grabarVideo();
celularEstandar.apagar();
console.log(celularEstandar.toString());

const celularGamaAlta = new CelularAltaGama("Rojo", 1.8, "Full HD", 16, 4, 32);
celularGamaAlta.prender();
celularGamaAlta.tomarFoto();
celularGamaAlta.reiniciar();
celularGamaAlta.grabarVideo();
celularGamaAlta.grabarVideoCamaraLenta();
celularGamaAlta.apagar();
console.log(celularGamaAlta.toString());

