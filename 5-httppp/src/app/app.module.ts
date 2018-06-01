import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListadoPeliculasComponent } from './componentes/listado-peliculas/listado-peliculas.component';
import { FormularioPeliculasComponent } from './componentes/formulario-peliculas/formulario-peliculas.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import {FormsModule} from '@angular/forms'


import {PeliculaService} from './servicios/pelicula.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'formulario', component: FormularioPeliculasComponent },
  { path: 'formulario/:id', component: FormularioPeliculasComponent },
  { path: 'listado', component: ListadoPeliculasComponent },
  
  { path: '*', component: AppComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    FooterComponent,
    ListadoPeliculasComponent,
    FormularioPeliculasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule,FormsModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
