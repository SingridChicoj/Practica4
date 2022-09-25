import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importacion de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"

//para rutas


import { HomeComponent } from './home/home.component';

import { RegistroComponent } from './registro/registro.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicarComponent } from './publicar/publicar.component';
import { ComentarComponent } from './comentar/comentar.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';


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
