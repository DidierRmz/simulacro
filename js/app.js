function autenticar() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    fetch("http://localhost:3000/users").then(r => r.json()).then(d => {


        let resultado = d.filter(function (element) {
            return element.email == email.value && password.value == element.password;
        });

        if (resultado.length > 0) {
            console.log("Correo y contraseña correcto");
            localStorage.setItem("autenticado", "si");
            location.href = "./index.html";
        } else {
            console.log("Correo y contraseña incorrecto");
        } 
        
        console.log(resultado);
    })
}