const BtnCart = document.querySelector('.container-icon')
const ContainerCartProductos = document.querySelector('.container-cart-products')

BtnCart.addEventListener('click', () => {
    ContainerCartProductos.classList.toggle('hidden-cart')
})