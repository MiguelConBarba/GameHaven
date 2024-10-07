/////////// FUNCIONALIDAD ABRIR/CERRAR CARRITO ///////////
const BtnCart = document.querySelector('.container-cart-icon')
const ContainerCartProductos = document.querySelector('.container-cart-products')

BtnCart.addEventListener('click', () => {
    ContainerCartProductos.classList.toggle('hidden-cart')
})
///////////////////////////////////////


///////////FUNCIONALIDADES///////////

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')
const productList = document.querySelector('.container-items')

// VARIABLES
let allProducts = []
const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#contador-productos')
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


//FUNCION extraer info
productList.addEventListener('click', e => {

    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.name-product').textContent,
            price: product.querySelector('.price').textContent
        }

        //FUNCION sumar cantidad de un mismo producto (incluye el if(exits))
        const exits = allProducts.some(product => product.title === infoProduct.title ) 
        console.log(exits);
        
        if (exits) {
            const products = allProducts.map(product =>{
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product
                } else {
                    return product
                }
            })
            allProducts = [...products]
        } else {
            allProducts = [...allProducts, infoProduct]
        }

        // showHTML() muestra los productos en el carrito
        showHTML()
        
    }        
})

//FUNCION eliminar elemento del carrito
rowProduct.addEventListener('click', (e) =>{
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement
        const title = product.querySelector('.titulo-producto-carrito').textContent

        allProducts = allProducts.filter(
            product => product.title !== title)
            
            console.log(allProducts);
        showHTML()
    }
})


//FUNCION crear el espacio del producto en el carrito
const showHTML = () => {

    //FUNCION si el carrito esta vacio mostrar mensaje especial
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden')
        rowProduct.classList.remove('hidden')
        cartTotal.classList.remove('hidden')
    }

    // rowProduct.innerHTML = '' Evita que se innereen mal los productos   
    rowProduct.innerHTML = ''

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {        
        const containerProducts = document.createElement('div')
        containerProducts.classList.add('cart-product')

        containerProducts.innerHTML = `
        <div class="info-cart-product">
            <p class="cantidad-producto-carrito">${product.quantity}</p>
            <p class="titulo-producto-carrito">${product.title}</p>
            <p class="precio-producto-carrito">${product.price}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        `
        rowProduct.append(containerProducts)

        //FUNCION actializar valor total y la cantidad de productos mostrada
        total = total + product.quantity * parseInt(product.price.slice(1))
        totalOfProducts = totalOfProducts + product.quantity

    })

    valorTotal.innerText = `$${total}`
    countProducts.innerText = `${totalOfProducts}`
}