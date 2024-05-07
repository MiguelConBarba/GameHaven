const mostrador = document.getElementById("mostrador");
const seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
let product = document.getElementsByClassName("item");

function cargar(item) {
    quitarBordes();
    seleccion.style.width = "300px";
    seleccion.style.margin = "300px 0 0 0";
    seleccion.style.height = "fit-content";
    seleccion.style.opacity = "1";
    mostrador.style.margin = " 40px 0 8vmax -60px";
    mostrador.style.gap = "4px";
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
    mostrador.style.margin = " 40px 40px 8vmax 60px";
    mostrador.style.gap = "20px";
    quitarBordes();
}
function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "solid #e8ffe634";
    }
}

function adjustGridColumns() {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');
    const grid = document.querySelector('.mostrador');

    const toggleGridColumns = (mq) => {
        if (mq.matches) {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';

        } else {
            grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
    };

    toggleGridColumns(mediaQuery);
    mediaQuery.addListener(toggleGridColumns);
}

adjustGridColumns();