import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"

//para rutas

=======
import { HomeComponent } from './home/home.component';
>>>>>>> a8d81836a3e65bc3ad7a687db25d63264cc2c884

@NgModule({
  //declaracion de componentes
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
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
