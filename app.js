const express = require(`express`);
const app = express();
const mysql = require("mysql2");

app.use(express.static('public'));
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





app.get("/hello", (request, response) => {
    response.send({message:"hello world!"});
});

app.listen(8000, () => {
    console.log("API up and running!");
});