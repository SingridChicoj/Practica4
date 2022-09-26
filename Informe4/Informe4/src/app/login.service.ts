import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //ruta del apirest (Nodejs)
  url="/api"

  constructor(private servicio:HttpClient) { }

  //mando esta funcion al componente login
  Consultar():Observable<any>{
    return this.servicio.get<any>(this.url)
  }
  
}
