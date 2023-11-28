const host = "http://localhost:8000";

window.addEventListener("load", mostrarCarrito(1)); // De momento pondremos la compra 1 hasta que tengamos las compras

// ----------------------------------------------------------------------------
// Script para mostrar la lista de productos de la compra (GET)

function mostrarCarrito(compraId) {
    fetch(`${host}/carrito/${compraId}`)
    .then (function(response){
        return response.json();
    })
    .then(function(json){
        let carritoDiv = document.getElementById("carritoLista");
        
        let innerHTML = "<div>";
        for(i=0; i<json.length; i++){
            innerHTML += 
            `<div>
                <div>
                    <img src="${json[i].foto}" alt="Zapatilla 01" />
                </div>
                <div>
                    <h3>${json[i].nombre}</h3>
                    <p>${json[i].descripcion_corta}</p>
                    <p>${json[i].precio}</p>
                </div>
                <div>
                    <button class="menos" onclick="menos(${json[i].id})">➖</button>
                    <span class="total" id="total_${json[i].id}">${json[i].cantidad}</span>
                    <button class="mas" onclick="mas(${json[i].id})">➕</button>
                </div>
            </div>`;
        }


        innerHTML += `</div>`;
     }).catch(function(error){
        console.log(error);
     });
}