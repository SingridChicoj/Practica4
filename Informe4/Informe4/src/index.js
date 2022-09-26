var express = require("express");
var bp = require("body-parser")
var mysql = require("mysql");
var app = express();
var connection = require("./database")


app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

var id_curso_aprobado = 1


app.use(express.static(path.join(__dirname, "src\app\home")))


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.
  

//pagina principal
app.get("/api/", function(req, res){

    
    res.sendFile(__dirname + "\app\home\home.component.html")

    //res.send({"Mensaje": "Todo bien"})
    res.send(__dirname)

})

//endpoint login
app.get("/login/:user/:password", function(req, res){
    //let = "DELETE FROM cursosaprobados WHERE (`idcursosaprobados` = "+3+")"

    
    //alamaceno usuario y contraseña en variables
    var usuario = req.params.user
    var password = req.params.password

    

    //Inserta los datos de la tabla credenciales en una lista
    connection.query("SELECT * from credenciales", function(error, results, fields){
        if(error) throw error;

        let lista = []


        function logArray(element, index, array){
            console.log(elem.contrasena)

            lista.push(element)


        }
        results.forEach(logArray)


        var bandera = false
        
        //recorre la lista hasta encontrar
        for(var i = 0; i<=lista.length-1; i++){
            console.log(lista[i].carnet)

            if(lista[i].contrasena == password && lista[i].carnet == usuario){
                bandera = true
            }
            

        }

        //results.forEach(result => {
//
        //    if(result.carnet == parseInt(usuario) && result.contrasena == parseInt(password)) {
        //        console.log("correcto")
        //        res.send({"Mensaje": "Todo bien"})
        //        return true;
//
        //    }
//
        //    return false;
        //});

        if(bandera){
            console.log("entra al if")
            res.send({"Mensaje": "Todo bien"})
        } else {
            res.send({"Mensaje": "Usuario incorrecto"})
        }

    })
    


    //imprimir todos los datos de tabla cursos
    //connection.query("SELECT * from cursos", function(error, results, fields){
    //    if(error) throw error;
//
    //    results.forEach(result => {
    //        console.log(result)
    //    });
//
    //});

    

    //connection.query("SELECT * from cursosaprobados", function(error, results, fields){
//
    //    if(error) throw error;
//
    //    console.log(results)
    //})



    

});

//Endppint para registrar usuarios
app.post("/registrar", function(req, res){
    console.log(req.body) //informacion que se manda desde angular
    //req.body esta en formato json


    //Creo el curso aprobado
    var num = getRandomIntInclusive(1,3)
    var curso = 0

    if(num == 1){
        curso = 771
    } else if(num == 2){
        curso = 796
    } else if (num == 3){
        curso = 962
    };

    //let cursoaprobado = "INSERT INTO cursosaprobados (idcursosaprobados, idcurso, punteo) VALUES("+id_curso_aprobado+", "+curso+", "+0+")"
//
    //
//
    //connection.query(cursoaprobado, function(err, result, filed){
    //    if(err) throw err
    //    console.log(result);
//
//
    //})

    //crear el objeto usuario
    let usuarionuevo = "INSERT INTO credenciales (carnet, 1apellido, 2apellido, 1nombre, 2nombre, contrasena, email, idcursosaprobados) VALUES("+req.body.registro+", '"+req.body.apellido+"', NULL, '"+req.body.nombre+"', NULL, '"+req.body.contraseña+"', '"+req.body.correo+"', NULL)"

    

    //luego lo inserta
    connection.query(usuarionuevo, function(err, result, filed){
        if(err) throw err
        //console.log(result);

    })

    id_curso_aprobado+=1




    //mostrar datos de una tabla
    connection.query("SELECT * from credenciales", function(error, results, fields){

        if(error) throw error;

        console.log(results)
    })




    res.send({mensaje: "Todo bien"})

});



app.put("/actualizar/:registro/:curso/:punteo", function(req, res){
    res.json({mensaje: 'actualizando: ' + req.params.registro })

    //actualizar un usuario
    //connection.query("UPDATE credenciales SET idcursosaprobados = "+1+" and "+2+" WHERE carnet=202010814", function(error, results) {
    //    if(error) throw error;
//
    //   console.log("Actualizado")
    //console.log(results)
    //})

    //Busco el carnet actual y extraigo el id del curso aprobado
    connection.query("SELECT * from credenciales", function(error, results, fields){

        if(error) throw error;

        
        results.forEach(result => {
            if(result.carnet == parseInt(req.params.registro)){

                //agregar for que recorra los 3 cursos asignados
                    //if(primera iteracion == 1) --> guardo idcurso primera columna
                    //elif(segunda iteracion == 2) --> guardo idcurso segunda columna
                    //elif(tercera iteracion == 3) --> guardo id curso tercera columna

                var idcurso = result.idcursosaprobados

                //recorro los datos de la tabla curso hasta encontrar nombre que corresponda al parametro enviado
                //que se quiere actualizar nota, y extraigo su idcurso
                connection.query("SELECT * from cursos", function(error, results, fields){
                    if(error) throw error;

                    results.forEach(result => {
                        if(result.nombre == req.params.curso){
                            var idcursoactual = result.idcursos

                            //Recorro los datos de la tabla cursoaprobados y si coincide el id de una columna
                            //y tiene el mismo id del curso que quiero actualizar
                            connection.query("SELECT * from cursosaprobados", function(error, results, fields){
                                if(error) throw error;
            
                                results.forEach(result => {
                                    //Al encontrarlo actualizo el punteo con la nota enivada como parametro
                                    if(result.idcursosaprobados == idcurso && result.idcurso == idcursoactual){

            
                                        connection.query("UPDATE cursosaprobados SET punteo = "+req.params.punteo+" WHERE idcursosaprobados= "+idcurso+"", function(error, results){
                                            if(error) throw error;
            
                                            console.log(results)
                                        })
            
            
                                    };
                                })
                            })






                            
                        };

                    })

                   

                });







            };
        })
    })



    //connection.query("SELECT * from cursos", function(error, results, fields){
    //    if(error) throw error;
//
    //    results.forEach(result => {
    //        console.log(result)
    //    });
//
    //});



})



app.listen(3000, function(){
    console.log("App listening on port 3000")
    connection.connect(function(err){
        if(err) throw err;
        console.log("Database connected!")

    })

});







