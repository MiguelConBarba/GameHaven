const username = document.querySelector('#username');



function getLastItem() {
    let lastItem = null;
    let lastTimestamp = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));

        if (item.timestamp && item.timestamp > lastTimestamp) {
            lastTimestamp = item.timestamp;
            lastItem = {
                nombre: item.nombre,
                key: key,
                value: item.value,
                timestamp: item.timestamp
            };
        }
    }

    if (lastItem === null || lastItem.nombre === undefined) {
    } else {
        username.innerHTML = `<ion-icon name="person-circle-outline" class="user-pic"></ion-icon>${lastItem.nombre}`;
    }
}
getLastItem()
window.onload = checkLoggedInUser;