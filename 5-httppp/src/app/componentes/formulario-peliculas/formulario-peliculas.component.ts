import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../entidades/Pelicula';
import { PeliculaService } from '../../servicios/pelicula.service';
import { Router } from '@angular/router';
import { ListadoPeliculasComponent } from '../listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
  
})
export class FormularioPeliculasComponent implements OnInit {
  
  public peli:Pelicula;
  

  constructor(public peliServicio:PeliculaService,
              public listado:ListadoPeliculasComponent,
              public router:Router) { 
               this.peli = new Pelicula(0,"","","","");
  }

  ngOnInit() {
    
  }

   irFormulario(){
     this.router.navigate(["/listado"]);
   }


  insertar(){
      this.peli.id =0;
     this.peliServicio.insertarPelicula(this.peli).subscribe(
                                  data =>{
                                      //if(data.headers.status == 201) this.irFormulario();
                                      
                                      
                                      console.log(data);
                                  },
                                  error =>{
                                      console.log(error);
                                      this.resetFormulario();
                                      this.irFormulario();  
                                      
                                  }
                                )
                                
  }



  resetFormulario(){
    this.peli.id=0;
    this.peli.titulo="";
    this.peli.genero="";
    this.peli.director="";
    this.peli.anio=""
  }
}
