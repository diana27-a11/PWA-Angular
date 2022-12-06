import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from 'src/app/services/articulo/articulo'
import { Observable } from 'rxjs';
import { ArticuloCantidad } from 'src/app/interfaces/articulo-cantidad';
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private baseURL = "https://localhost:44335/api/articulo";

  constructor(private httpClient : HttpClient) { }

  obtenerListaArticulo():Observable<Articulo[]>{
    return this.httpClient.get<Articulo[]>(`${this.baseURL}/Todos`);
  }

  obtenerArticuloId(Cod_barras:string) : Observable<Articulo>{
    return this.httpClient.get<Articulo>(`${this.baseURL}/${Cod_barras}`);
  }
  
  actualizarArticulo(Cod_barras:string, articulo:Articulo) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${Cod_barras}`, articulo);
  }

  registrarArticulo(articulo:Articulo) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, articulo);
  }
  
  mostrarGrafica(): Observable<ArticuloCantidad[]>{
    return this.httpClient.get<ArticuloCantidad[]>(`${this.baseURL}/Top`);
  }

}
