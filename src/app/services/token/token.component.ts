import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from './token';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  private baseURL = "https://localhost:44335/api/login";

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

 // obtenerToken(token:Token):Observable<Object> {
   //   return this.httpClient.post(`${this.baseURL}/permiso`, token);
      
//  }
   logOut(){
    localStorage.removeItem('token');
   }
 

}
