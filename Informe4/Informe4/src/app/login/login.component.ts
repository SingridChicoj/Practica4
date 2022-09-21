import { Component, OnInit } from '@angular/core';


import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


//parte logica

export class LoginComponent implements OnInit {

  constructor(private ServicioLogin:LoginService) { }

  ngOnInit(): void {
    this.ServicioLogin.Consultar().subscribe(datos=>{
      console.log(datos)
    })

  }

}
