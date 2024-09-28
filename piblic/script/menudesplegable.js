const logo_menu = document.getElementById("logo_menu");
const barralateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelectorAll("main");
const search = document.getElementById("search");
const noResults = document.getElementById('#no-results')
const loginButton = document.querySelector(".login-link-container a");

menu.addEventListener("click", () => {
    barralateral.classList.toggle("max-barra-lateral");
    if (barralateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    } else {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }

    if (window.innerWidth <= 320) {
        barralateral.classList.add("mini-barra-lateral");
        main.forEach((element) => {
            element.classList.add("min-main");
        });
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
        // Ocultar el botón de login en la vista compacta
        loginButton.classList.add("oculto");

        let sliderName = window.location.href.split("#")[1];
        window.location = "#" + sliderName;
    } else {
        // Mostrar el botón de login nuevamente cuando se expande
        loginButton.classList.remove("oculto");
    }
});

palanca.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

logo_menu.addEventListener("click", () => {
    // Alternar el tamaño de la barra lateral y los elementos principales
    barralateral.classList.toggle("mini-barra-lateral");
    main.forEach((element) => {
        element.classList.toggle("min-main");
    });
    
    // Alternar la visibilidad de los spans (incluyendo login)
    spans.forEach((span) => {
        span.classList.toggle("oculto");
        // La visibilidad del texto "no-results" se mantiende 
        noResults.forEach((span) =>{
            span.classList.toggle("oculto")
        })    
    });
   
    loginButton.classList.toggle("oculto");

    // Forzar la navegación a una sección específica
    let sliderName = window.location.href.split("#")[1];
    window.location.hash = "#slider1";

    window.innerWidth <= 320 ? search.style.visibility = "hidden" : null;
});
