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
   public mensaje : any;

  constructor(private peliServ: PeliculaService,
               private router: Router) {
      this.arryPeliculas=[]; 
         this.getPeliculas();
        console.log(this.arryPeliculas)
   }

  ngOnInit() {
    //this.arryPeliculas = [];
     this.mensaje = null;
  
       if( localStorage.getItem("mensaje")){
         this.mensaje = localStorage.getItem("mensaje");
            if(this.mensaje)
            setTimeout(()=>{
              this.borrarMensaje();
            },2000)
       }

   
  }


  borrarMensaje(){
     this.mensaje = "";
     localStorage.removeItem("mensaje");
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
       //this.borrarMensaje();
  }
}
