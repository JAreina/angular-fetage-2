import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CondicionesComponent } from './componentes/condiciones/condiciones.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {UsuarioService} from './servicios/usuario.service'
import {SesionService} from './servicios/sesion.service';

import {PrincipalModule} from './principal/principal.module'

const routes: Routes = [
 
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'condiciones', component: CondicionesComponent },
  

  { path: '*', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    RegistroComponent,
    CondicionesComponent,
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,FormsModule,
    PrincipalModule
    
  ],
  providers: [UsuarioService,SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
