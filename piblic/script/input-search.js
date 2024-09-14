document.getElementById('search-input').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const catalogItems = document.querySelectorAll('.mostrador .item');

    catalogItems.forEach(item => {
        const itemName = item.querySelector('.descripcion').textContent.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


document.getElementById('search-input').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const catalogItems = document.querySelectorAll('.item');
    let hasResults = false;

    catalogItems.forEach(item => {
        const itemName = item.querySelector('p').textContent.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    const noResultsMessage = document.getElementById('no-results');
    if (hasResults) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
        noResultsMessage.classList.add('fade-in'); // Se puede añadir animación
    }
});
