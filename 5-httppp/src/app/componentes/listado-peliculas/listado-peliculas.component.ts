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
<<<<<<< HEAD
        this.arryPeliculas=[];
         this.arryPeliculas = this.getPeliculas();
         console.log("vista listado ");
       console.log(this.arryPeliculas);
=======
    this.arryPeliculas = [];
        this.arryPeliculas=  this.peliServ.getPeliculas();
        console.log(this.arryPeliculas)
>>>>>>> 95db6ff3a17d2fba4f684a7c2f2fe75bde0ca0db
  }

  getPeliculas(){
       this.arryPeliculas = this.peliServ.getPeliculas();
       console.log("vista listado ddddddddddd");
       console.log(this.arryPeliculas);
       return this.arryPeliculas;
  }



<<<<<<< HEAD
  
=======
  getPelis(){
    let observable;
  
  }
>>>>>>> 95db6ff3a17d2fba4f684a7c2f2fe75bde0ca0db
}
