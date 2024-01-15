const changeImage = () => {
    const img = document.querySelector("#imagenSeleccionada");
    const inputFile = document.querySelector("#imagenUsuario");
    inputFile.addEventListener("change", () => {
        const file = inputFile.files[0];
        if (file) { 
            // Verificar que se seleccionó un archivo
            const reader = new FileReader();

            // Asignar la imagen cargada al atributo src de la etiqueta img.
            reader.onload = (e) => {
                img.src = e.target.result;
            };

            // Leer el contenido del archivo como una URL de datos.
            reader.readAsDataURL(file);
        }
    });
}

export default changeImage;
