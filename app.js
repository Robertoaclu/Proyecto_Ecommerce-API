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
// -----------------------------------------------------------------------------------
// ENDPOINTS INDEX

app.get(`/productos`, function (req, res) {
    connection.query(`SELECT * FROM producto`, function (error, result, fields) {

        if (error) {
            return console.error(`error: ${error.message}`);
        }
        res.send(result);
    });
    console.log("Listado de todos los productos");
})

app.post('/addCarro', function (req, res) {

})




// -----------------------------------------------------------------------------------
// ENDPOINT PARA CARRITO

app.get(`/carrito/:compraId`, function (req, res) {
    connection.query(`SELECT * FROM producto
        JOIN compra_producto ON producto.id=compra_producto.productoId
        JOIN compras ON compras.id=compra_producto.compraId
        WHERE compraId= ${request.params.compraId}`, function (error, result, fields) {

        if (error) {
            return console.error(`error: ${error.message}`);
        }
        res.send(result);
    });
    console.log("Listado de productos de una compraId");
})


// -----------------------------------------------------------------------------------
// ENDPOINT PARA FORMA DE PAGO

app.get(`/formasPago/:usuarioId`, function (req, res) {
    connection.query(`SELECT * FROM tarjetas where usuarioId=${request.params.usuarioId}`,
        function (error, result, fields) {
            if (error) {
                return console.error(`error:${error.message}`);
            }
            res.send(result);
        })
    console.log("Listado de tarjeta del usuario correspondiente");
})


app.post(`/tarjetas/:usuarioId`, function (req, res) {
    let numeroTarjeta = req.body.numeroTarjeta;
    let titularTarjeta = req.body.titularTarjeta;
    let caducidadTarjeta = req.body.caducidadTarjeta;
    let codigoSeguridadTarjeta = req.body.codigoSeguridadTarjeta;
    let usuarioId = req.params.usuarioId;

    console.log(request.body.titularTarjeta, request.params);
    connection.query(`INSERT INTO tarjetas (numero_tarjeta, titular, caducidad, codigo, usuarioId) VALUES 
                    ("${numeroTarjeta}",
                    "${titularTarjeta}",
                    "${caducidadTarjeta}",
                    "${codigoSeguridadTarjeta}",
                    ${usuarioId})`,
        function (error, result, fields) {
            if (error) {
                return console.error(`error: ${error.message}`);
            }
            res.send({ message: `Card added` });
        });
    console.log("Card added to database");
});


// -----------------------------------------------------------------------------------
// ENDPOINTS PARA LOGIN

// Registro
app.post('/registro', function (req, res) {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let email = req.body.email;
    let password = req.body.password;

    connection.query(`INSERT INTO usuario (nombre, apellidos, email, password) VALUES 
                    ('${nombre}', 
                    '${apellidos}', 
                    '${email}', 
                    '${password}')`,
        function (error, result, fields) {
            if (error) {
                return console.error(`error: ${error.message}`);
            }
            res.send({ message: `User added` });
        });
    console.log("User added to database");
});


// Login
app.post('/login', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    connection.query(`SELECT * FROM usuario WHERE 
                    email = '${email}' AND password = '${password}'`,
        function (error, result, fields) {
            if (error) {
                return console.error(`error: ${error.message}`);
            }

            if (result.length == 0) {
                res.send({ message: "User not found" });
                console.log("User not found in the database");
            } else {
                res.send(result);
                console.log("User connected to the database");
                console.log(result);
            }
        });
})







// -----------------------------------------------------------------------------------

app.get("/hello", (req, res) => {
    res.send({ message: "hello world!" });
});

app.listen(8000, () => {
    console.log("API up and running!");
});