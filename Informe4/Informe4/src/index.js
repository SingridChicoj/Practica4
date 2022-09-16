var express = require("express");
var mysql = require("mysql");
var app = express();
var connection = require("./database")

app.get("/", function(req, res){
    console.log("hello")
    connection.query("SELECT * from cursos", function(error, results, fields){
        if(error)
            throw error;
        
        results.forEach(result => {

            console.log(result);
            
        });


    })
    
    res.send("hey there!")

});

app.listen(3000, function(){
    console.log("App listening on port 3000")
    connection.connect(function(err){
        if(err) throw err;
        console.log("Database connected!")

    })

});

