// Node.js + Express
const express = require("express");
const app = express();
const mysql = require("mysql2");

app.use(express.static("public"));
app.use(express.json());

// -----------------------------------------------------------------------------------
// MySQL connection

const connection = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "Elitista1990",
    database: "sneaker_store",
});

connection.connect(function (error) {
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    console.log("Conectando a MySQL!!!");
});

// -----------------------------------------------------------------------------------
// Funciones útiles

function handleSQLError(response, error, result, callback) {
    if (error) {
        response.status(400).send(`error: ${error.message}`);
        return;
    }
    callback(result);
}


// -----------------------------------------------------------------------------------
// Aquí empieza la API


// ENDPOINT PARA CARRITO (GET)

app.get(`/carrito/:compraId`, function(request, response){
    connection.query(`SELECT * FROM producto
        JOIN compra_producto ON producto.id=compra_producto.productoId
        JOIN compras ON compras.id=compra_producto.compraId
        WHERE compraId= ${request.params.compraId}`, function(error, result, fields) {

        if (error){
            return console.error(`error: ${error.message}`);
        }
        response.send(result);
    });
    console.log("Listado de productos de una compraId");
})


// ENDPOINT PARA FORMA DE PAGO - MIS TARJETAS (GET)

app.get(`/forma-pago/:usuarioId`, function(request, response){
    connection.query(`SELECT * FROM tarjetas where usuarioId=${request.params.usuarioId}`,
    function(error, result, fields){
        if(error){
            return console.error(`error:${error.message}`);
        }
        response.send(result);
    })
    console.log("Listado de tarjeta del usuario correspondiente");
})





















app.get("/hello", (request, response) => {
    response.send({message:"hello world!"});
});

app.listen(8000, () => {
    console.log("API up and running!");
});