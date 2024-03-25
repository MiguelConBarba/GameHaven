
const logo_menu = document.getElementById("logo_menu");
const barralateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

main

menu.addEventListener("click",()=>{
    barralateral.classList.toggle("max-barra-lateral");
    if(barralateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display ="block";
        menu.children[1].style.display ="none";
    }

    else{

        menu.children[0].style.display ="none";
        menu.children[1].style.display ="block";

    }

    if(window.innerWidth<=320){
        barralateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});


palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

});

logo_menu.addEventListener("click",()=>{
    barralateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});



