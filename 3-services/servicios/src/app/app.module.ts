import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina2/:datos1/:datos2', component: Pagina2Component },
  { path: '*', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
