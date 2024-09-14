const productos = [
    {
        id: 1,
        titulo: "Assassin's Creed Valhalla",
        imagen: "../piblic/img/catalogo img/Assasins creed ps4.jpg",
        precio: 20.00
    },
    {
        id: 2,
        titulo: "FC24 - PS5",
        imagen: "../piblic/img/catalogo img/ps5 fc24.jpg",
        precio: 20.00
    },
    {
        id: 3,
        titulo: "Grand Theft Auto V - PS4",
        imagen: "../piblic/img/catalogo img/GTA5 ps4.jpg",
        precio: 20.00
    },
    {
        id: 4,
        titulo: "CYBERPOWERPC PC gaming",
        imagen: "../piblic/img/catalogo img/pc 1.jpg",
        precio: 2600.00
    },
    {
        id: 5,
        titulo: "Wyvern Gaming PC",
        imagen: "../piblic/img/catalogo img/pc 2.jpg",
        precio: 1000.00
    },
    {
        id: 6,
        titulo: "Skytech Gaming PC",
        imagen: "../piblic/img/catalogo img/pc3.jpg",
        precio: 800.00
    },
    {
        id: 7,
        titulo: "Overwatch",
        imagen: "../piblic/img/catalogo img/overwatch.jpeg",
        precio: 12.99
    },
    {
        id: 8,
        titulo: "HALO: Infinite",
        imagen: "../piblic/img/catalogo img/halo infinite.jpeg",
        precio: 12.99
    },
    {
        id: 9,
        titulo: "Starcraft 2",
        imagen: "../piblic/img/catalogo img/starcraft 2.jpeg",
        precio: 12.99
    },
    {
        id: 10,
        titulo: "Final Fantasy VII",
        imagen: "../piblic/img/catalogo img/final fantasy vii.jpeg",
        precio: 12.99
    }
];

let carrito = [];
let productoSeleccionado = null;

// Referencias a los elementos del DOM
const contenedorProductos = document.querySelector('#contenedor-productos');
const contenedorCarrito = document.querySelector('#contenedor-carrito');
const totalCarrito = document.querySelector('#total');
const addCartButton = document.querySelector('#addcart'); // Asegúrate de que el botón exista en el HTML

// Cargar productos en el catálogo
function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <div class="contenedor-foto">
                <img src="${producto.imagen}" alt="">
            </div>
            <p class="descripcion">${producto.titulo}</p>
            <span class="precio">$${producto.precio.toFixed(2)}</span>
            <button class="seleccionar-producto" data-id="${producto.id}">
                Seleccionar Producto
            </button>
        `;
        contenedorProductos.appendChild(div);
    });

    // Añadir evento para seleccionar productos
    document.querySelectorAll('.seleccionar-producto').forEach(btn => {
        btn.addEventListener('click', seleccionarProducto);
    });
}

// Seleccionar el producto al hacer clic
function seleccionarProducto(event) {
    const productoId = parseInt(event.target.dataset.id);
    productoSeleccionado = productos.find(p => p.id === productoId);
    console.log(`Producto seleccionado: ${productoSeleccionado.titulo}`);
}

// Agregar producto seleccionado al carrito
function agregarProductoSeleccionadoAlCarrito() {
    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        renderCarrito();
        alert(`El producto ${productoSeleccionado.titulo} ha sido añadido al carrito.`);
        productoSeleccionado = null; // Limpiar la selección
    } else {
        alert('No has seleccionado ningún producto.');
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(event) {
    const productoId = parseInt(event.target.dataset.id);
    carrito = carrito.filter(producto => producto.id !== productoId);
    renderCarrito();
}

// Renderizar el carrito
function renderCarrito() {
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <div class="contenedor-foto">
                <img src="${producto.imagen}" alt="">
            </div>
            <p class="descripcion">${producto.titulo}</p>
            <span class="precio">$${producto.precio.toFixed(2)}</span>
            <button class="carrito-producto-eliminar" data-id="${producto.id}">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        `;
        contenedorCarrito.appendChild(div);
    });

    // Actualizar total del carrito
    calcularTotal();

    // Event listener para eliminar del carrito
    document.querySelectorAll('.carrito-producto-eliminar').forEach(btn => {
        btn.addEventListener('click', eliminarDelCarrito);
    });
}

// Calcular el total del carrito
function calcularTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalCarrito.innerText = `$${total.toFixed(2)}`;
}

// Evento para agregar al carrito con el botón global
if (addCartButton) {
    addCartButton.addEventListener('click', agregarProductoSeleccionadoAlCarrito);
}

// Cargar los productos al iniciar
cargarProductos();
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cart = []; // Array para almacenar los productos añadidos

// Función para manejar la adición de productos al carrito
function addToCart(event) {
    const button = event.currentTarget;
    const item = button.closest('.item');
    
    const productId = item.getAttribute('data-id');
    const productName = item.querySelector('.descripcion').textContent;
    const productPrice = item.querySelector('.precio').textContent;
    
    // Crear un objeto de producto
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
    };
    
    // Añadir el producto al carrito
    cart.push(product);
    
    // Mostrar mensaje de éxito
    alert('Producto añadido al carrito');
    
    // Opcional: actualizar la vista del carrito aquí si es necesario
}

// Asignar el evento de clic a todos los botones
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});