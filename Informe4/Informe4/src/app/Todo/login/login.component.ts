import { Component, OnInit } from '@angular/core';

//importo login.service.ts donde esta la funcion
import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


//parte logica del componente login

export class LoginComponent implements OnInit {

  Registro_Academico: string="";
  password: string="";

  usuariolog: any={
    Registro_Academico: "",
    password: ""
  }

  constructor(private ServicioLogin:LoginService) { }
  ngOnInit(): void {
    this.inicio_sesion()

  }

  //funciones
  inicio_sesion(){
    this.ServicioLogin.Consultar().subscribe(datos=>{
      console.log(datos)
      console.log("Hola")
    },
    
    datos => console.log("Error")

    )
  }

}
