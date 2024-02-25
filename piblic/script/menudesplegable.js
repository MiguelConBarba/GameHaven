
const cloud = document.getElementById("cloud");
const barralateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");

menu.addEventListener("click",()=>{
    barralateral.classList.toggle
});


palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

});

cloud.addEventListener("click",()=>{
    barralateral.classList.toggle("mini-barra-lateral");
    
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});



