const signupContainer = document.querySelector('#addUsr');
const loginContainer = document.querySelector('#login');
const toggleToLoginBtn = document.querySelector('#toggleToLogin');
const toggleToSignupBtn = document.querySelector('#toggleToSignup');




document.addEventListener('DOMContentLoaded', function () {
    
    toggleToSignupBtn.addEventListener('click', function () {
        loginContainer.classList.add('hide');
        loginContainer.classList.remove('show');
        signupContainer.classList.add('show');
        signupContainer.classList.remove('hide');
    });

    toggleToLoginBtn.addEventListener('click', function () {
        signupContainer.classList.add('hide');
        signupContainer.classList.remove('show');
        loginContainer.classList.add('show');
        loginContainer.classList.remove('hide');
    });
});
