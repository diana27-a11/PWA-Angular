import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-usuario-service',
  templateUrl: './usuario-service.component.html',
  styleUrls: ['./usuario-service.component.css']
})
export class UsuarioServiceComponent implements OnInit {

  private baseURL = "https://localhost:44335/api/login";

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  iniciarSesion(usuario:Usuario):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/permiso`, usuario);
  }

}
