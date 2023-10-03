/* 
    Considerando el HTML y CSS sugerido, realizar lo siguiente:
        1. Cambiar la imagen.
		    • tip: por atributo | el id de la imagen es "imagenPortada"
	    2. Cambiar enlace de "contactar"  
		    • tip: por atributo o por propiedad del objeto de la etiqueta html
	    3. Cambiar subtitulo "notebook" por un título de modelo que inventes.
	    4. Cambiar titulo "venta de computadoras" por un título más real que 
           inventes.
	    5. Cambiar Estilo del título principal. Darle color, tamaño, etc.
	    6. Cambiar el párrafo por un texto real. Se puede googlear.
	    7. Crear el precio. Crear HTML y aplicar un precio.
	    8. Botón de especificaciones, aplicarle un evento "click" para que 
           despliegue las especificaciones.
	    9. Form de “mantenerme informado”, tomar el valor al hacer clic para 
           enviar su información luego
*/

function primerPunto() {
    const img = document.querySelector("#imagenPortada");
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk527ffbD9BwLXmeR0IsDrJ-JmsPz8RLTiGGRfjOFH6SeXiuXhpDxUBpUPHfp_feGSGM&usqp=CAU");
}

function segundoPunto() {
    const a = document.querySelector("#contacto");
    a.href = "https://www.google.com";
    a.setAttribute("target", "_blank");
}

function tercerPunto() {
    const h2 = document.querySelector("#titulo");
    h2.textContent = "Notebook Dell Inspiron 3515";
}

function cuartoPunto() {
    const h1 = document.querySelector("h1");
    h1.textContent = "SmartTech";
}

function quintoPunto() {
    const h1 = document.querySelector("h1");
    h1.style.color = "#1F4172";
    h1.style.textAlign = "center";
    h1.style.fontSize = "70px";
}

function sextoPunto() {
    const p = document.querySelector(".der > p");
    const text =
    `
    Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.
        <h3>Pantalla con gran impacto visual</h3>
        <p>Su pantalla LCD de 15.5" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.</p>
        <h3>Eficiencia a tu alcance</h3>
        <p>Su procesador AMD Ryzen 5 de 4 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.</p>
        <h3>Potente disco sólido</h3>
        <p>El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.</p>
        <h3>Un procesador exclusivo para los gráficos</h3>
        <p>Su placa de video AMD Radeon RX Vega 8 (Ryzen 2000/3000) convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.</p>
    `
    p.innerHTML = text;
}

function septimoPunto() {
    const p = document.querySelector(".der > p");
    const price = document.createElement("p");
    price.textContent = "$464.999";

    price.style.color = "#00a650";
    price.style.fontSize = "20px";
    price.style.margin = "20px 0";

    p.after(price);
}

function octavoPunto() {
    const spectsButton = document.querySelector("#boton");
    const spects = document.querySelector("#especificaciones > ul");
    const styles = getComputedStyle(spects);
    console.log(spects);
    console.log(styles.display);
    spectsButton.addEventListener("click", function() {
        if (styles.display === "none") {
            spects.style.display = "inline-block";
        }
        else {
            spects.style.display = "none";
        }
    });
}

function novenoPunto() {
    const email = document.querySelector("#email");
    const submit = document.querySelector('input[type="submit"]');
    submit.addEventListener("click", function() {
        alert(email.value);
    })
}

/* -------------------------------------------------------------------------- */
primerPunto();
segundoPunto();
tercerPunto();
cuartoPunto();
quintoPunto();
sextoPunto();
septimoPunto();
octavoPunto();
novenoPunto();
