import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"

//para rutas


@NgModule({
  //declaracion de componentes
  declarations: [
    AppComponent,
    LoginComponent
  ],

  //importacion de modulos
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
