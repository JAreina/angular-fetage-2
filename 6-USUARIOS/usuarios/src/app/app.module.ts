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
import {SesionService} from './servicios/sesion.service';
import { MenuComponent } from './componentes/menu/menu.component';
import { Pagina1Component } from './componentes/principal/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/principal/pagina2/pagina2.component';
import { Pagina3Component } from './componentes/principal/pagina3/pagina3.component'

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'condiciones', component: CondicionesComponent },
  
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: '*', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    RegistroComponent,
    CondicionesComponent,
    PrincipalComponent,
    MenuComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule,FormsModule
  ],
  providers: [UsuarioService,SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
