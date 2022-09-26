import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Todo/login/login.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"

//para rutas


import { HomeComponent } from './Todo/home/home.component';

import { RegistroComponent } from './Todo/registro/registro.component';
import { PublicacionesComponent } from './Todo/publicaciones/publicaciones.component';
import { PublicarComponent } from './Todo/publicar/publicar.component';
import { ComentarComponent } from './Todo/comentar/comentar.component';
import { ComentariosComponent } from './Todo/comentarios/comentarios.component';
import { InfoUsuarioComponent } from './Todo/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './Todo/editar-usuario/editar-usuario.component';
import { DashboardComponent } from './Todo/dashboard/dashboard.component';


@NgModule({
  //declaracion de componentes
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    PublicacionesComponent,
    PublicarComponent,
    ComentarComponent,
    ComentariosComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent,
    DashboardComponent
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
