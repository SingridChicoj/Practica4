var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'practicasiniciales-p4',
    user: "root",
    password: "",
});

module.exports = connection;