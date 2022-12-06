import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptService implements HttpInterceptor{

  constructor(private router:Router) { 
    
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let request = req;

    console.log("ya estoy en el intercept")
    console.log(request);

    if(token){
      request = req.clone({
        setHeaders: {
          Autorization: `Bearer ${token}`
        }

      });
      console.log("metodo ")
    }

    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse) => {
        console.log("chin ")
        if(err.status === 401 || err.status === 403){
       //   this.appComponent.logOut();
       console.log("el backend me respondio feo");
          this.router.navigateByUrl('/login');
        }throw new Error(err.message);
      })
    );
  }
}
