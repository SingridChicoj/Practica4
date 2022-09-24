import { Component } from '@angular/core';
import {RouterModule, Routes } from "@angular/router"
import {LoginComponent } from "./login/login.component"





const routes: Routes = [
  {path: "/", component:LoginComponent}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Informe4';
  
  

}
