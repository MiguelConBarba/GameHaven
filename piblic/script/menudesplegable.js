const logo_menu = document.getElementById("logo_menu");
const barralateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelectorAll("main");
const search = document.getElementById("search");
const noResults = document.querySelector('#no-results');

// Función para plegar la barra lateral
function plegarBarraLateral() {
    barralateral.classList.add("mini-barra-lateral");
    main.forEach((element) => {
        element.classList.add("min-main");
    });
    spans.forEach((span) => {
        span.classList.add("oculto");
    });
    if (menu.children[0].style.display === "block") {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    if (window.innerWidth <= 320) {
        search.style.visibility = "hidden";
    }
}

// Plegar la barra lateral automáticamente después de 5 segundos
setTimeout(plegarBarraLateral, 5000);


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

    // Toggle class on header elements (login button and cart)
    const loginBtn = document.querySelector('.new-login-btn');
    const cartIcon = document.querySelector('.icon-cart');
    
    if (body.classList.contains('dark-mode')) {
        loginBtn.classList.add('dark-mode');
        cartIcon.classList.add('dark-mode');
    } else {
        loginBtn.classList.remove('dark-mode');
        cartIcon.classList.remove('dark-mode');
    }
});

