import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from "./Todo/login/login.component"
import { HomeComponent } from "./Todo/home/home.component"


const routes: Routes = [
    //rutas de la pagina

    { path:"", redirectTo:"/", pathMatch: "full" },
    { path:"login", component: LoginComponent}, //ruta con componente
    { path:"", component: HomeComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}