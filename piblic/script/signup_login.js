const signupForm = document.querySelector('#form');
const signupMessage = document.querySelector('#signupMessage');
const loginMessage = document.querySelector('#loginMessage');

const toggleButton = document.querySelector('#toggleToSignup');
const toggleButton2 = document.querySelector('#toggleToLogin');


let isRedirected = false;
let initialData = JSON.stringify(localStorage);

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
const nombre = document.querySelector('#nombre').value;
const apellido = document.querySelector('#apellido').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

    const passwordLength = password.length;


    const userKey = `user_${Date.now()}`;

    const userData = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        timestamp: new Date().getTime()
    };
    if (!nombre || !apellido || !email || !password) {
        signupMessage.textContent = 'Please fill in all fields';
        signupMessage.style.color = 'red';
    }
        else if(passwordLength < 8) {
        signupMessage.textContent = 'Pasword must be at least 8 characters';
        signupMessage.style.color = 'red';
        }
        else{
        localStorage.setItem(userKey, JSON.stringify(userData));
        signupMessage.textContent = 'User registered sucessfully';
        signupMessage.style.color = 'green';
        }
    

});

toggleButton.addEventListener('click', function (event) {
    event.preventDefault();

    loginMessage.textContent = '';
}
)

toggleButton2.addEventListener('click', function (event) {
    event.preventDefault();

    signupMessage.textContent = '';
}
)


function checkLocalStorageChanges() {
    setInterval(function () {
        if (!isRedirected && JSON.stringify(localStorage) !== initialData) {
            isRedirected = true;
            setTimeout(function () {
                window.location.href = "../pages/catalogo.html";
            }, 1000);
        }
    }, 1000);
}

checkLocalStorageChanges();