
const logo_menu = document.getElementById("logo_menu");
const barralateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelectorAll("main");

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
        main.forEach((element)=>{
            element.classList.add("min-main");
        })
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
        let sliderName=window.location.href.split("#")[1];
        window.location="#"+sliderName
    }
});


palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

});

logo_menu.addEventListener("click",()=>{
    barralateral.classList.toggle("mini-barra-lateral");
    console.log(window.location.href)
    main.forEach((element)=>{
        element.classList.toggle("min-main");
    })
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
    let sliderName=window.location.href.split("#")[1];
    window.location="#slider1"
});



