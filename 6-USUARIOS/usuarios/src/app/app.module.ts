import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CondicionesComponent } from './componentes/condiciones/condiciones.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {UsuarioService} from './servicios/usuario.service'

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
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
    PrincipalComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule,FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
