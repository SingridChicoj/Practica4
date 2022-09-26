import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import {observable} from 'rxjs';
import {ComentariosI} from '../Modelos/Comentarios'
import {Curso} from '../Modelos/Curso'
import {UsuarioI} from '../Modelos/EdicionU'
import {LoginI} from '../Modelos/Login'
import {TestI} from '../Modelos/Test'
import {Usuario} from '../Modelos/Usuario'

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  url="/api/"

  constructor(private servicio:HttpClient) { }


  home():Observable<any>{
    return this.servicio.get<any>(this.url)
  }
}