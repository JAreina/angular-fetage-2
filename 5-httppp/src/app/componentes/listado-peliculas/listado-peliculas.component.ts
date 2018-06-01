import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../servicios/pelicula.service';
import { Pelicula } from '../../entidades/Pelicula';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

   arryPeliculas : Pelicula[];
   peli: Pelicula;

  constructor(private peliServ: PeliculaService,
               private router: Router) {
      this.arryPeliculas=[]; 
         this.getPeliculas();
        console.log(this.arryPeliculas)
   }

  ngOnInit() {
    //this.arryPeliculas = [];
        
  }

  getPeliculas(){
       this.peliServ.getPeliculas().subscribe(
         
        data => {  
                console.log(data);
                console.log(this)
                this.arryPeliculas= data;
       }, error =>{
          console.log(error)
   });
;
       console.log("vista listado ddddddddddd");
       console.log(this.arryPeliculas);
       
  }

  crearOModificarPeli(){
     this.router.navigate(["/formulario"]);
  }

  

  modificarPelicula(pelicula){
       console.log(pelicula);
       //guardar objeto a modificar en localStorage
       localStorage.setItem("peliModificar",JSON.stringify(pelicula));

       this.router.navigate(["/formulario/",pelicula.id]);
  }
}
