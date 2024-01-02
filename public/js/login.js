const host = "http://localhost:8000";


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

            window.location.href = '/html/index.html';
        }).catch(function (error) {
            console.log(error);
        });
}