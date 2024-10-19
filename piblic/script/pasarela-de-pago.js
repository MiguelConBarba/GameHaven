document.addEventListener('DOMContentLoaded', () => {
  const totalProductosCarrito = localStorage.getItem('TotalProductosCarrito')
  const totalPrecioCarrito = localStorage.getItem('TotalPrecioCarrito')

  if (totalProductosCarrito && totalPrecioCarrito) {
      document.querySelector('.payment-summary-item-quantity').textContent = `${totalProductosCarrito}`
      document.querySelector('.payment-summary-item-price').textContent = `$${totalPrecioCarrito}`
  }

  const form = document.querySelector('.payment-form');
  const submitButton = form.querySelector('.payment-form-submit-button');

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const cardNumber = document.getElementById('card-number').value.trim();
      const expiryDate = document.getElementById('expiry-date').value.trim();
      const cvv = document.getElementById('cvv').value.trim();

      if (!email || !cardNumber || !expiryDate || !cvv) {
          alert("You must fill out all the fields");
      } else {
          // Añadir clase de carga y deshabilitar el botón
          submitButton.classList.add('loading');
          submitButton.disabled = true;

          setTimeout(() => {
              window.location.href = `thanksforyouprchs.html?email=${encodeURIComponent(email)}`;
          }, 3000)
      }
  });

  document.getElementById('email').addEventListener('input', function (e) {
    e.preventDefault();
  })

  document.getElementById('card-number').addEventListener('input', function (e) {
    e.preventDefault();
      this.value = this.value.replace(/\D/g, '');
  
      if (this.value.length > 16) {
          this.value = this.value.slice(0, 16);
      }
  });

  document.getElementById('cvv').addEventListener('input', function (e) {
    e.preventDefault();
      this.value = this.value.replace(/\D/g, '');

      if (this.value.length > 3) {
          this.value = this.value.slice(0, 3);
      }
  });
});