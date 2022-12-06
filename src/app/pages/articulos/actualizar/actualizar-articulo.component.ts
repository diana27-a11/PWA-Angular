import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/services/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-actualizar-articulo',
  templateUrl: './actualizar-articulo.component.html',
  styleUrls: ['./actualizar-articulo.component.css']
})
export class ActualizarArticuloComponent implements OnInit {

  Cod_barras!:string;
  articulo:Articulo = new Articulo();

  constructor(private articuloService:ArticuloService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Cod_barras = this.route.snapshot.params['Cod_barras'];
    this.articuloService.obtenerArticuloId(this.Cod_barras).subscribe(dato =>{
      this.articulo = dato;
    },error => console.log(error));
  }

  listaArticulos(){
    this.router.navigate(['/articulo']);
  }

  onSubmit(){
    this.articuloService.actualizarArticulo(this.Cod_barras,this.articulo).subscribe(dato => {
      this.listaArticulos();
    },error => console.log(error));
  }

}
