import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/services/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  articulos!:Articulo[];

  constructor(private articuloServicio:ArticuloService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerArticulo();
    this.articuloServicio.obtenerListaArticulo().subscribe( res => console.log(res));
  }

  private obtenerArticulo(){
    this.articuloServicio.obtenerListaArticulo().subscribe(dato =>{
      this.articulos = dato;
    });
  }

  actualizarArticulo(Cod_barras:string){
    this.router.navigate(['actualizar-articulo', Cod_barras]);

  } 

  /*actualizarArticulo(){
    this.router.navigate(['/', 'actualizar-articulo']);
  }*/

  registrarArticulo(){
    this.router.navigate(['/', 'registro-articulo']);
  }

  verGrafica(){
    this.router.navigate(['/', 'grafica'])
  }

}
