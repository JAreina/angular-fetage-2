import { Injectable } from '@angular/core';

import { Pelicula } from '../entidades/Pelicula';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionService } from './configuracion.service';
@Injectable({
	providedIn: 'root'
})
export class PeliculaService {
	arryPeliculas: Pelicula[] = [];

	constructor(private http: HttpClient, private config: ConfiguracionService) {
		console.log(this);
	}

	getPeliculas(): Observable<Pelicula[]> {
		return this.http.get<Pelicula[]>(this.config.url + '/peliculas');
	}

	buscarPelicula(id: number): Observable<any> {
		return this.http.get(this.config.url + '/peliculas/' + id);
	}

	insertarPelicula(pelicula: Pelicula): Observable<any> {
		return this.http.post(this.config.url + '/peliculas', pelicula,{responseType:'text'});
	}
	modificarPelicula(pelicula: Pelicula): Observable<any> {
		return this.http.put(this.config.url + '/peliculas/' + pelicula.id, pelicula,{responseType:'text'});
	}

	borrarPelicula(pelicula: Pelicula): Observable<any> {
		return this.http.delete(this.config.url + '/peliculas/' + pelicula.id,{responseType:'text'});
	}
}
