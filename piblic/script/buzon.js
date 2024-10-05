document.getElementById('message').addEventListener('input', function() {
    this.style.height = 'auto'; // Restablece el alto
    this.style.height = (this.scrollHeight) + 'px'; // Ajusta el alto según el contenido
});