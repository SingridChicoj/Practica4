import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from "./login/login.component"

const routes: Routes = [
    //rutas de la pagina

    { path:"", redirectTo:"/", pathMatch: "full" },
    { path:"login", component: LoginComponent} //ruta con componente

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}