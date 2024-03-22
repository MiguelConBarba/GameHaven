let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
let product = document.getElementsByClassName("item");

function cargar(item) {
    quitarBordes();
    mostrador.style.width = "80%";
    seleccion.style.width = "600px";
    seleccion.style.height = "500px";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid #73f851";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = item.getElementsByTagName("h4")[0].innerHTML;

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;



}
function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "solid #e8ffe634";
    }
}