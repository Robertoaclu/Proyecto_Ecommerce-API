const host = "http://localhost:8000";

window.addEventListener("load", mostrarCarrito());

// ----------------------------------------------------------------------------
// Script para mostrar la lista de productos de la compra (GET)

function mostarCarrito() {
    let innerHTML = "";
    fetch(`${host}/carrito/${compraId}`)
}