const host = "http://localhost:8000";

window.addEventListener("load", ()=> {formasPago(1)});

// ----------------------------------------------------------------------------
// Script para mostrar la lista de tarjetas en la forma de pago (GET)

let totalTarjetas=0;
function formasPago(usuarioId){
    fetch(`${host}/formasPago/${usuarioId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let formasPagoDiv= document.getElementById("listaTarjetas")
        
        let innerHTML="";
        for(i=0; i<json.length; i++){
          innerHTML +=/* html */
            `<div class="cajaTarjeta">
            <label for="tarjeta_${i}" >${json[i].numero_tarjeta}</label>
            <input type="radio" id="tarjeta_${i}" name="tarjeta" value="${json[i].id}" />
            </div>`;
        }
        innerHTML+=`<button onclick="seleccionarTarjeta()">Pagar con esta tarjeta</button>`;
        
        totalTarjetas=json.length;
        

        formasPagoDiv.innerHTML=innerHTML;
    }).catch(function(error){
        console.log(error);
    });
}

function seleccionarTarjeta(){
    for (i=0; i<totalTarjetas; i++){
        let seleccionada=document.getElementById(`tarjeta_${i}`)
        if(seleccionada.checked){
            localStorage.setItem("tarjeta", json[i].id);
        }
    }
}