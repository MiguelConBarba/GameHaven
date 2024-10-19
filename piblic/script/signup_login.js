const signUpForm = document.querySelector('.sign-up-form');
const signInForm = document.querySelector('.sign-in-form');

// Botón donde aparecerá el nombre del usuario
const usernameText = document.getElementById('username-text');  // Span que cambia el texto

// Registro de usuario
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = signUpForm.querySelector('input[placeholder="Username"]').value;
    const email = signUpForm.querySelector('input[placeholder="Email"]').value;
    const password = signUpForm.querySelector('input[placeholder="Password"]').value;

    if (username && email && password) {
        // Guardar datos en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        // Mostrar alerta de éxito
        alert('¡Te has registrado exitosamente!');
        
        // Limpiar los campos de entrada después del registro
        signUpForm.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Inicio de sesión de usuario
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = signInForm.querySelector('input[placeholder="Username"]').value;
    const password = signInForm.querySelector('input[placeholder="Password"]').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Mostrar alerta de inicio de sesión exitoso
        alert(`¡Bienvenido de nuevo, ${username}!`);
        
        // Limpiar los campos de entrada después del inicio de sesión
        signInForm.reset();
        
        // Iniciar sesión y actualizar el botón con el nombre de usuario
        loginUser(username);

        // Redireccionar a la página del catálogo
        window.location.href = 'catalogo.html';
    } else {
        alert('Username o password incorrectos.');
    }
});

// Función para iniciar sesión y actualizar el botón de login
function loginUser(username) {
    localStorage.setItem('loggedInUser', username);  // Guardar el usuario que inició sesión
    updateUsernameButton(username);  // Actualizar el botón con el nombre de usuario
}

// Función para actualizar el botón con el nombre de usuario
function updateUsernameButton(username) {
    if (usernameText) {
        // Actualizar el contenido del span con el nombre del usuario
        usernameText.textContent = username;  
        console.log("Nombre de usuario actualizado: " + username);  // Para depurar
    }
}

// Verificar si hay un usuario conectado al cargar la página
function checkLoggedInUser() {
    const loggedInUsername = localStorage.getItem('loggedInUser');
    if (loggedInUsername) {
        updateUsernameButton(loggedInUsername);  // Mostrar el nombre del usuario en el botón
    }
}

// Comprobar si hay un usuario ya conectado al cargar la página
window.onload = checkLoggedInUser;