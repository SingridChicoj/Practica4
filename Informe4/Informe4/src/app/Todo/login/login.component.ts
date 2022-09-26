import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginI } from 'src/app/Modelos/Login';
import {PrincipalService}from '../../Services/principal.service';
import { Router, RouterEvent } from '@angular/router';
import { TestI } from 'src/app/Modelos/Test';


//importo login.service.ts donde esta la funcion
//import { LoginService } from "../login.service";

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

  constructor(private api: PrincipalService, private router: Router) { }
  errorStatus: boolean = false;
  errorMsj: any ="";
  
  ngOnInit(): void {
  }

}
