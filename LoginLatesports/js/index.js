// Toggle Form
const container = document.querySelector(".container");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons = [...document.querySelectorAll(".form-icon")];
const spans = [...document.querySelectorAll(".form-box .top span")];
const section = document.querySelector("section");

spans.map((span) => {
  span.addEventListener("click", (e) => {
    const color = e.target.dataset.id;
    container.classList.toggle("active");
    section.classList.toggle("active");
    document.querySelector(":root").style.setProperty("--custom", color);
  });
});

Array.from(inputs).map((input) => {
  icons.map((icon) => {
    icon.innerHTML = `<img src="./Screenshot_6.jpg" alt="" />`;

    icon.addEventListener("click", () => {
      const type = input.getAttribute("type");
      if (type === "password") {
        input.setAttribute("type", "text");
        icon.innerHTML = `<img src="./images/Screenshot_6.jpg" alt="" />`;
      } else if (type === "text") {
        input.setAttribute("type", "password");
        icon.innerHTML = `<img src="./images/Screenshot_6.jpg" alt="" />`;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var registeredEmail = "";
  var registeredPassword = "";

  var registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function(event) {
      event.preventDefault();

      registeredEmail = document.getElementById("registeredEmail").value;
      registeredPassword = document.getElementById("registeredPassword").value;
      
      alert("Registro exitoso, ahora puedes inicar sesion")
      container.classList.toggle("active");
    section.classList.toggle("active");

   
  });

  var loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function(event) {
    event.preventDefault();

   
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    
    if (loginEmail.trim() === "" || loginPassword.trim() === "") {
        alert("Por favor, ingresa correo electrónico y contraseña.");
        return;
    }

    
    var registeredEmail = document.getElementById("registeredEmail").value;
    var registeredPassword = document.getElementById("registeredPassword").value;

    if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
        
        alert("Inicio de sesión exitoso");

        
        window.location.href = "Latesports/news.html";
    } else {
        // Las credenciales son inválidas, mostrar un mensaje de error
        alert("Correo electrónico o contraseña incorrectos");
    }
});
});




