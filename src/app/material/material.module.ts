import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})

export class MaterialModule { }
