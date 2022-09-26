import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  url="/api"

  constructor(private servicio:HttpClient) { }


  home():Observable<any>{
    return this.servicio.get<any>(this.url)
  }
}
