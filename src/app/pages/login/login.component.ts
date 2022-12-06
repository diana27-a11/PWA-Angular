import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuario/usuario';
import { Token } from '@angular/compiler';
import { UsuarioServiceComponent} from 'src/app/services/usuario/usuario-service.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService:UsuarioServiceComponent, private router:Router) { }

  ngOnInit(): void {

  }
  
  loginUsuario(){
    this.usuarioService.iniciarSesion(this.usuario).subscribe(dato => {
      localStorage.setItem("token", dato.toString());
      console.log("click a iniciar sesion");
      this.listaArticulos();
      var token = dato;

    }, error => console.log(error)
    )
  }

    listaArticulos(){
      this.router.navigate(['/articulo']);
    }

    mostrarGrafica(){
      this.router.navigate(['/grafica'])
    }

  onSubmit(){
     this.loginUsuario();
   }

}
