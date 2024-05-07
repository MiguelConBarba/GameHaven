const logo_menu = document.getElementById("logo_menu");
const barralateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelectorAll("main");
const search = document.getElementById("search");

menu.addEventListener("click", () => {
    barralateral.classList.toggle("max-barra-lateral");
    if (barralateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    else {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    if (window.innerWidth <= 320) {
        barralateral.classList.add("mini-barra-lateral");
        main.forEach((element) => {
            element.classList.add("min-main");
        })
        spans.forEach((span) => {
            span.classList.add("oculto");
        })
        let sliderName = window.location.href.split("#")[1];
        window.location = "#" + sliderName
    }
});


palanca.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

});
logo_menu.addEventListener("click", () => {
    // Toggle sidebar width and mini-main class on main elements
    barralateral.classList.toggle("mini-barra-lateral");
    main.forEach((element) => {
        element.classList.toggle("min-main");
    });
    // Toggle visibility of spans (possibly menu items)
    spans.forEach((span) => {
        span.classList.toggle("oculto"); // "oculto" likely means "hidden"
    });
    // Get current page section from URL hash (if present)
    let sliderName = window.location.href.split("#")[1];
    // Force navigation to a specific section (#slider1)
    window.location.hash = "#slider1";

    window.innerWidth <= 320 ? search.style.visibility = "hidden" : null;

});



