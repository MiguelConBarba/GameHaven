const passwordInput = document.querySelector('#password');
const passwordStrength = document.querySelector('#password-strength');

function evaluatePasswordStrength(password) {
    const length = password.length;
    const value = password.value;
    let strength = '';

    if (length < 6) {
        passwordStrength.textContent = `password must be at least 6 characters`;
        passwordStrength.style = "color: red;";
    }
   else if (length < 8 && length >= 6) {
        strength = 'Weak';
        passwordStrength.style = "color: red;";
        passwordStrength.textContent = `Password strength: ${strength}`;
    } else if (length < 10 && length >= 8) {
        strength = 'could be better';
        passwordStrength.style = "color: orange;";
        passwordStrength.textContent = `Password strength: ${strength}`;
    } else if(length >=12) {
        strength = 'strong';
        passwordStrength.style = "color: green;";
        passwordStrength.textContent = `Password strength: ${strength}`;
    }

}

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    evaluatePasswordStrength(password);
});



document.querySelector('#toggleLoginPassword').addEventListener('click', function () {
    const passwordField = document.querySelector('#loginPassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<ion-icon name="eye-outline"></ion-icon>' : '<ion-icon name="eye-off-outline"></ion-icon>';
});

document.querySelector('#toggleSignupPassword').addEventListener('click', function () {
    const passwordField = document.querySelector('#password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<ion-icon name="eye-outline"></ion-icon>' : '<ion-icon name="eye-off-outline"></ion-icon>';
});
