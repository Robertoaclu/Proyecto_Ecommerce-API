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
        let carritoDiv = document.getElementById("carrito");
        
        let innerHTML = "<div class=`carritoLista``>";
        for(i=0; i<json.length; i++){
            innerHTML +=/*html*/ 
                `<div>
                    <img src="${json[i].foto}" alt="Zapatilla 01" />
                </div>
                <div>
                    <h3>${json[i].nombre}</h3>
                    <p>${json[i].descripcion_corta}</p>
                    <p>${json[i].precio}<i class="bi bi-currency-euro"></i></p>
                </div>
                <div>
                    <button class="menos" onclick="menos(${json[i].id})">➖</button>
                    <span class="total" id="total_${json[i].id}">${json[i].cantidad}</span>
                    <button class="mas" onclick="mas(${json[i].id})">➕</button>
                </div>`;
        }

        innerHTML += "</div>";

        let precioTotalProductos;
        for(i=0; i<json.length; i++){
            precioTotalProductos += json[i].cantidad*json[i].precio;
        }

        innerHTML +=/*html*/ `<div class="resumen">
        <p id="resumenP">Resumen del pedido<p>
        <p>Continua con el proceso de compra para seleccionar el método de pago</p>
        <h3>${precioTotalProductos}<i class="bi bi-currency-euro"></i></h3>
        <button class="boton" onClick="location.href='formasPago.html'">Proceder al pago</button>
        </div>`;

        carritoDiv.innerHTML=innerHTML;
     }).catch(function(error){
        console.log(error);
     });
}