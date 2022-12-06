import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticuloComponent } from 'src/app/pages/articulos/listar/lista-articulo.component';
import { ActualizarArticuloComponent } from './pages/articulos/actualizar/actualizar-articulo.component';
import { GraficaComponent } from './pages/articulos/grafica/grafica.component';
import { RegistroArticuloComponent } from './pages/articulos/registrar/registro-articulo.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'articulo', component:ListaArticuloComponent},
  {path: '', redirectTo:'articulo', pathMatch:'full'},
  {path: 'actualizar-articulo/:id', component:ActualizarArticuloComponent},
  {path: 'registro-articulo', component:RegistroArticuloComponent},
  {path: 'grafica', component:GraficaComponent},
  {path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
