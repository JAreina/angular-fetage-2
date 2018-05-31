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
   
  constructor(private peliServ: PeliculaService) { }

  ngOnInit() {
    this.arryPeliculas = [];
        this.arryPeliculas=  this.peliServ.getPeliculas();
        console.log(this.arryPeliculas)
  }

  getPeliculas(){
       this.arryPeliculas = this.peliServ.getPeliculas();
       console.log("vista listado ddddddddddd");
       console.log(this.arryPeliculas);
       return this.arryPeliculas;
  }



  
}
