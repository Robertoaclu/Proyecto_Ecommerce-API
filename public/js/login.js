window.addEventListener("load", () => {
    const logout = document.getElementById("usuario");
    if (localStorage.getItem("nombre")) {
        logout.innerHTML =/*html*/
            `<a href="/html/index.html">${localStorage.getItem("nombre")}</a>
            <a id="logout" onclick="cerrarSesion()">Logout</a>`;
    } else {
        logout.innerHTML =/*html*/ `<a id="logout" href="/html/login.html">Login</a>`;
    }
});

function registroUsuario() {
    const nombreUsuario = document.getElementById(`newName`).value;
    const apellidosUsuario = document.getElementById(`newSurname`).value;
    const emailUsuario = document.getElementById(`newEmail`).value;
    const passUsuario = document.getElementById(`newPassword`).value;

    if (nombreUsuario && apellidosUsuario && emailUsuario && passUsuario) {
        fetch(`${host}/registro`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombreUsuario,
                apellidos: apellidosUsuario,
                email: emailUsuario,
                password: passUsuario
            })
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (json) {
                alert(json.message);
                if (json.message === `User added`) {
                    window.location.href = '/html/login.html';
                }
            }).catch(function (error) {
                console.log(error);
            });
    } else {
        alert(`Required information is missing`);
    }
}


function iniciarSesion() {
    const email = document.getElementById(`logEmail`).value;
    const password = document.getElementById(`logPassword`).value;

    fetch(`${host}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            console.log(json[0].id);
            alert(`logged in`);
            localStorage.setItem("usuarioId", json[0].id);
            localStorage.setItem("nombre", json[0].nombre);

            window.location.href = '../index.html';
        }).catch(function (error) {
            console.log(error);
        });
}


function cerrarSesion() {
    localStorage.removeItem("usuarioId");
    localStorage.removeItem("nombre");
    window.location.href = '/html/login.html';
}