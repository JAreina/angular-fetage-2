import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../servicios/pelicula.service';
import { Pelicula } from '../../entidades/Pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

   arryPeliculas : Pelicula[];
   
  constructor(private peliServ: PeliculaService, private http:Http) { }

  ngOnInit() {
    this.arryPeliculas = [];
         this.getPeliculas();
  }

  getPeliculas(){
       this.arryPeliculas = this.peliServ.getPeliculas();
  }



  getPelis(){
    let observable = this.http.get("url");
    observable.
  }
}
