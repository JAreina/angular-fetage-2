import { Component } from '@angular/core';
import { ListadoPeliculasComponent } from './componentes/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ListadoPeliculasComponent]
})
export class AppComponent {
  title = 'PELICULAS 10000';

  constructor(public listado:ListadoPeliculasComponent){
     // this.listado.getPeliculas();
  }
}



/***
 * 
 * COMPONENTES :  cabecera
 *                menu,
 *                pie 
 * 
 * 
 * 
 * 
 * 
 */