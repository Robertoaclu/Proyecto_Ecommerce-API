const host = "http://localhost:8000";

window.addEventListener("load", formasPago());

// ----------------------------------------------------------------------------
// Script para mostrar la lista de tarjetas en la forma de pago (GET)

function formasPago(usuarioId){
    fetch(`${host}/forma-pago/${usuarioId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let formasPagoDiv= document.getElementById("formasPago")

        let innerHTML="<div>";
        for(i=0; i<json.length; i++){
            innerHTML +=
            `<div id="">
                <p>${json[i].id}</p>
            </div>`;
        }
        <button class="boton" onClick="location.href='html/finalizar-pedido.html'">Pagar con esta tarjeta</button>
        innerHTML += "</div>";

        formasPagoDiv.innerHTML=innerHTML;
    }).catch(function(error){
        console.log(error);
    });
}

function tarjetaPago(){
    localStorage.setItem("tarjeta", )
}