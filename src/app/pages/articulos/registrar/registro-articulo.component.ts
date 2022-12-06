import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/services/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-registro-articulo',
  templateUrl: './registro-articulo.component.html',
  styleUrls: ['./registro-articulo.component.css']
})
export class RegistroArticuloComponent implements OnInit {

  articulo: Articulo = new Articulo();

  constructor(private articuloService:ArticuloService, private router:Router) { }

  ngOnInit(): void {
  }

  saveArticulo(){
    this.articuloService.registrarArticulo(this.articulo).subscribe(dato => {
      console.log(dato);
      this.listaArticulos();
    }, error => console.log(error)
   )
  }
   
  listaArticulos(){
    this.router.navigate(['/articulo']);
  }

  onSubmit(){
   this.saveArticulo();
  }

}
