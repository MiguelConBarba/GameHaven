// Seleccionar el botón de login y el texto del botón
const loginButton = document.querySelector(".login-link-container a");
const loginText = document.querySelector(".login-text"); // Seleccionamos el span que contiene el texto "login"
const menuButton = document.querySelector(".menu"); // Botón para abrir/cerrar la barra lateral
const barralateral = document.querySelector(".barra-lateral"); // La barra lateral

// Función para manejar el estado del texto del botón de login
function handleLoginButtonText() {
    if (barralateral.classList.contains("mini-barra-lateral") || window.innerWidth <= 320) {
        // Ocultar el texto si la barra está cerrada o si la ventana es pequeña
        loginText.style.display = "none";
    } else {
        // Mostrar el texto si la barra está abierta y la ventana es suficientemente grande
        loginText.style.display = "inline";
    }
}

// Evento para controlar la barra lateral al hacer clic en el botón del menú
menuButton.addEventListener("click", () => {
    // Alternar entre las clases de la barra lateral
    barralateral.classList.toggle("mini-barra-lateral");

    // Llamamos a la función para manejar el texto del botón de login
    handleLoginButtonText();
});

// Controlar el cambio de tamaño de la ventana
window.addEventListener("resize", () => {
    handleLoginButtonText(); // Verificar si el texto debe mostrarse o no cuando cambia el tamaño de la ventana
});

// Llamada inicial para configurar el estado del botón de login al cargar la página
document.addEventListener("DOMContentLoaded", handleLoginButtonText);
    