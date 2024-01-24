
window.addEventListener("load", mostrarProductos());


function mostrarProductos() {
    fetch(`${host}/productos`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let productosDiv = document.getElementById("contentCards");

            for (i = 0; i < json.length && i < 3; i++) {
                let innerHTML = "";
                productosDiv.innerHTML +=/*html*/
                    `<div class="card">
                        <img src="${json[i].foto}" alt="Zapatilla 01" />

                        <div class="contenido">
                        <div class="top">
                            <h4>${json[i].nombre}</h4>
                            <div class="h4">${json[i].precio}<i class="bi bi-currency-euro m-color"></i></div>
                        </div>

                        <div class="valoracion">
                            <span class="m-color">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            </span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>

                        <p>${json[i].descripcion_corta}</p>
                        <div class="actions">
                            <button class="addCarrito" onClick="addCarrito(${json[i].id})">Añadir al carrito</button>
                            <a href="#" class="botonCard">Ver</a>
                        </div>
                        </div>
                    </div>`;
            }
            console.log(json)
            productosDiv.innerHTML = innerHTML;
        }).catch(function (error) {
            console.log(error);
        })
}

function addCarrito(productoId) {
    let usuarioId = localStorage.getItem("usuarioId");

    let comprobacion = localStorage.getItem("compraId");

    if (comprobacion === null) {
        fetch(`${host}/newCompra`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usuarioId: usuarioId
            })
        })
            .then(function (response) {
                return response.json();

            }).then(function (json) {
                console.log(json);
                localStorage.setItem('compraId', json.insertId);

                fetch(`${host}/newOrderProduct`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        compraId: json.insertId,
                        productoId: productoId
                    })
                })
                    .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        console.log(json);
                    }).catch(function (error) {
                        console.log(error);
                    })

            }).catch(function (error) {
                console.log(error);
            })
    } else {
        fetch(`${host} /comprobacion`, {

        })
    }
}