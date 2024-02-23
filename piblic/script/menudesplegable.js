
const cloud = document.getElementById("cloud");
const barralateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");

cloud.addEventListener("click",()=>{
    barralateral.classList.toggle("mini-barra-lateral");
    
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});



