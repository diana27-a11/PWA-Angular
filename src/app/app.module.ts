import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosModule } from './pages/articulos/articulos.module';
import { ListaArticuloComponent } from 'src/app/pages/articulos/listar/lista-articulo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioServiceComponent } from './services/usuario/usuario-service.component';
import { TokenComponent } from './services/token/token.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtinterceptService } from './services/token/jwtintercept.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ListaArticuloComponent,
    LoginComponent,
    UsuarioServiceComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticulosModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtinterceptService,
      multi:true,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
