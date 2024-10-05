const btnCart = document.querySelector(".container-icons");
const conteinerCartProducts = document.querySelector('.container-cart-products-cerrado');
const btnCartClose = document.querySelector('.icon-close');
const logoMenu = document.querySelector('#logo_menu');  

conteinerCartProducts.classList.add('container-cart-products');

btnCart.addEventListener('click', () => {
    conteinerCartProducts.classList.toggle('icon-cart');
})
btnCartClose.addEventListener('click', () => {
    conteinerCartProducts.classList.toggle('icon-cart');
});

logoMenu.addEventListener('click', () => {
    if (conteinerCartProducts.classList.contains('container-cart-products')) {
        conteinerCartProducts.classList.remove('container-cart-products');
        conteinerCartProducts.classList.add('container-cart-products-cerrado');
    } else {
        conteinerCartProducts.classList.remove('container-cart-products-cerrado');
        conteinerCartProducts.classList.add('container-cart-products');
    }
});
