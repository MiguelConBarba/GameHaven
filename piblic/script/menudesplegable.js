const logo_menu = document.getElementById("logo_menu");
const barralateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelectorAll("main");
const search = document.getElementById("search");
const noResults = document.querySelector('#no-results');

// Evento al hacer clic en el menú
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

    } else {
        spans.forEach((span) => {
            span.classList.remove("oculto");
        });
    }
});

// Evento al hacer clic en el logo del menú
logo_menu.addEventListener("click", () => {
    // Alternar el tamaño de la barra lateral y los elementos principales
    barralateral.classList.toggle("mini-barra-lateral");
    main.forEach((element) => {
        element.classList.toggle("min-main");
    });
    
    // Alternar la visibilidad de los spans
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });

    if (window.innerWidth <= 320) {
        search.style.visibility = "hidden";
    }
});

// Evento del modo oscuro
palanca.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

