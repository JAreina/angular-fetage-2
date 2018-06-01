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

		let id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.peli = JSON.parse(localStorage.getItem('peliModificar'));
		}
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
			},
			(error) => {
				console.log(error);
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
        localStorage.removeItem("peliModificar");
			},
			(error) => {
				console.log(error);
			}
		);
  }
  
  borrar(){
    this.peliServicio.borrarPelicula(this.peli).subscribe(
			(data) => {
				//if(data.headers.status == 201) this.irFormulario();
				console.log(data);
				this.resetFormulario();
				this.irListado();

        console.log(data);
        localStorage.removeItem("peliModificar");
			},
			(error) => {
				console.log(error);
			}
		);
  }

  cancelar(){
    this.irListado();
  }
}
