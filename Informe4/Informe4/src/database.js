var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'practicasiniciales-p4',
    user: "root",
    password: "",
    port: "3306"
});

module.exports = connection;