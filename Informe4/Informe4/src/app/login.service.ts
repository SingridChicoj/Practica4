import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private servicio:HttpClient) { }

  Consultar():Observable<any>{
    return this.servicio.get(environment.servidor)
  }
}
