document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const loginMessage = document.querySelector('#loginMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.querySelector('#loginEmail').value;
        const password = document.querySelector('#loginPassword').value;

        let userFound = false;
        let foundKey = null;

        // Check if the user exists in localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const userData = JSON.parse(localStorage.getItem(key));

            if (userData.email === email && userData.password === password) {
                userFound = true;
                foundKey = key;
                break;
            }
        }

        if (!email || !password) {
            loginMessage.textContent = 'Please fill in all fields';
            loginMessage.style.color = 'red';
        } else if (userFound) {
            // Create a new user with existing data
            const userData = JSON.parse(localStorage.getItem(foundKey));
            const newUser = { ...userData };

            // Remove the old user data
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const storedData = JSON.parse(localStorage.getItem(key));

                if (isEqual(storedData, newUser)) {
                    localStorage.removeItem(key);
                }
            }

            // Function to check object equality
            function isEqual(obj1, obj2) {
                return JSON.stringify(obj1) === JSON.stringify(obj2);
            }

            // Save the updated user data
            localStorage.setItem(foundKey, JSON.stringify(newUser)); // Use foundKey to update existing user data

            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Account does not exist or incorrect password.';
            loginMessage.style.color = 'red';
        }
    });
});


/* Replace with your JS Code 
(Leave empty if not needed) */
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }


  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const sign_in_btn2 = document.querySelector("#sign-in-btn2");
  const sign_up_btn2 = document.querySelector("#sign-up-btn2");
  sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
  });
  sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
  });
  sign_up_btn2.addEventListener("click", () => {
      container.classList.add("sign-up-mode2");
  });
  sign_in_btn2.addEventListener("click", () => {
      container.classList.remove("sign-up-mode2");
  });            