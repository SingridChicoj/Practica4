var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'btowwqgmhdu4cl3fjyew-mysql.services.clever-cloud.com',
    database: 'btowwqgmhdu4cl3fjyew',
    user: "ufiwgjimeexxkopm",
    password: "EkYvvfdh2FFnFLOoiDZ4",
    port: "3306"
});

module.exports = connection;