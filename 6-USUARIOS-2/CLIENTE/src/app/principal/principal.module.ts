import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from '../componentes/menu/menu.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { Pagina1Component } from '../componentes/principal/pagina1/pagina1.component';
import { Pagina2Component } from '../componentes/principal/pagina2/pagina2.component';
import { Pagina3Component } from '../componentes/principal/pagina3/pagina3.component';
import { PerfilComponent } from '../componentes/principal/perfil/perfil.component'
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
    
    { path: 'principal/pagina1', component: Pagina1Component },
    { path: 'principal/pagina2', component: Pagina2Component },
    { path: 'principal/pagina3', component: Pagina3Component },
    { path: 'principal/perfil', component: PerfilComponent }
 
  
  
];


/*
ng generate component /componentes/principal/perfil --module /principal/principal

*/


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule


  ],
  declarations: [ 
    PrincipalComponent,
    MenuComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    PerfilComponent],

    bootstrap: [AppComponent]
})
export class PrincipalModule { }
