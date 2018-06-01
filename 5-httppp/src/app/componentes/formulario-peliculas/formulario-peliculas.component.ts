import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../entidades/Pelicula';
import { PeliculaService } from '../../servicios/pelicula.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListadoPeliculasComponent } from '../listado-peliculas/listado-peliculas.component';

@Component({
	selector: 'app-formulario-peliculas',
	templateUrl: './formulario-peliculas.component.html',
	styleUrls: [ './formulario-peliculas.component.css' ]
})
export class FormularioPeliculasComponent implements OnInit {
	public peli: Pelicula;

  public estaHabilitadoInsertar:boolean;
  public estaHabilitadoModificar:boolean;


  public mensaje:any;

	constructor(
		public peliServicio: PeliculaService,
		public listado: ListadoPeliculasComponent,
		public router: Router,
		public route: ActivatedRoute
	) {
		this.peli = new Pelicula(0, '', '', '', '');
	}

	ngOnInit() {
		// HAY PARAMETROS EN LA URL ?

		let id =this.route.snapshot.paramMap.get('id');
		if (id) {
      this.estaHabilitadoModificar= false;
      this.estaHabilitadoInsertar= true;
      //  FORMA UNO GUARDAR EN LOCALSTORAGE 
      //this.peli = JSON.parse(localStorage.getItem('peliModificar'));
      

      // FORMA DOS buscar pelicula a traves del servicio pelicula
       let id2 = parseInt(id);
      this.peliServicio.buscarPelicula(id2).subscribe(
        data =>{
          this.peli= data;
        },
        error =>{
          console.log(error)
        }
      )
		}else{
      this.estaHabilitadoModificar= true;
      this.estaHabilitadoInsertar= false;
    }

    // si hay mensaje 

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
	

	irListado() {
		this.router.navigate([ '/listado' ]);
	}

	insertar() {
    

		this.peli.id = 0;
		this.peliServicio.insertarPelicula(this.peli).subscribe(
			(data) => {
				//if(data.headers.status == 201) this.irFormulario();
				console.log(data);
				this.resetFormulario();
				this.irListado();

        console.log(data);
        this.mensaje = data;
        localStorage.setItem("mensaje",this.mensaje);
			},
			(error) => {
        console.log("TITULO ES OBLIGATORIO");
        console.log(error);
        this.mensaje = error;
        localStorage.setItem("mensaje",this.mensaje);
        setTimeout(()=>{
          this.borrarMensaje();
        },2000)
			}
		);
	}

	resetFormulario() {
		this.peli.id = 0;
		this.peli.titulo = '';
		this.peli.genero = '';
		this.peli.director = '';
		this.peli.anio = '';
	}

	modificar() {

    
       

      this.peliServicio.modificarPelicula(this.peli).subscribe(
        (data) => {
          //if(data.headers.status == 201) this.irFormulario();
          console.log(data);
          this.resetFormulario();
          this.irListado();
  
          console.log(data);
          this.mensaje = data;
          localStorage.setItem("mensaje",this.mensaje);
          localStorage.removeItem("peliModificar");
        },
        (error) => {
          //console.log("TITULO ES OBLIGATORIO");
          console.log(error);
          this.mensaje = error.error;
          localStorage.setItem("mensaje",this.mensaje);
          setTimeout(()=>{
            this.borrarMensaje();
          },2000)
        });
   
		
  }
  
  borrar(){
    this.peliServicio.borrarPelicula(this.peli).subscribe(
			(data) => {
				//if(data.headers.status == 201) this.irFormulario();
				console.log(data);
				this.resetFormulario();
        this.irListado();
        this.mensaje = data;
        localStorage.setItem("mensaje",this.mensaje);
        console.log(data);
        localStorage.removeItem("peliModificar");
			},
			(error) => {
        console.log(error);
        this.mensaje = error;
        localStorage.setItem("mensaje",this.mensaje);
			}
		);
  }

  cancelar(){
    this.irListado();
  }
}
