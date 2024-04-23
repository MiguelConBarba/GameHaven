let contraseña = document.getElementById("contraseña-inp")
let confirmacion = document.getElementById("contraseña-confirm-inp")
let borde = document.getElementsByClassName("borde")
let boton = document.getElementById("boton")

const basededatos = [
    {
        usuario: "1",
        contraseña: "1234"
    }
]

boton.addEventListener("click", () =>{
        console.log("CLCIk")
        if (basededatos[0].usuario == "2"){
            alert("EXISTE")
        }else{
            alert("NO EXISTE")
        }      
})

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var togglePassword = document.getElementById("togglePassword");

    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = '<ion-icon name="eye"></ion-icon>';
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = '<ion-icon name="eye-off"></ion-icon>';
    }
}

function toggleConfirmPasswordVisibility() {
    var ConfirmpasswordInput = document.getElementById("ConfirmpasswordInput");
    var toggleConfirm = document.getElementById("toggleConfirm");

    if (ConfirmpasswordInput.type == "password") {
        ConfirmpasswordInput.type = "text";
        toggleConfirm.innerHTML = '<ion-icon name="eye" id="confirmEye"></ion-icon>';
    } else {
        ConfirmpasswordInput.type = "password";
        toggleConfirm.innerHTML = '<ion-icon name="eye-off"></ion-icon>';
    }
}