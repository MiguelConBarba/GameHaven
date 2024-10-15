// Obtener el email de la URL
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

// Mostrar el mensaje con el email
const emailMessage = document.getElementById('email-message');
emailMessage.textContent = `We will send you the product keys to your email: ${email} in a maximun place of 3 days`;
