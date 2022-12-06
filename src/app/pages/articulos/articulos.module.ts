import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ActualizarArticuloComponent } from './actualizar/actualizar-articulo.component';
import { RegistroArticuloComponent } from './registrar/registro-articulo.component';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
  
    ActualizarArticuloComponent,
       RegistroArticuloComponent,
       GraficaComponent
  ],
  imports: [
    MaterialModule,
    FormsModule
  ],
  exports: [
  ]
})
export class ArticulosModule { }
