import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/Usuario';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	constructor(private http: HttpClient) {}

	login(usuario): Observable<any> {
		console.log('servicio login ');
		//console.log(usuario.correo);

          let header = new HttpHeaders({
			Authorization: "Basic "+btoa(usuario.correo+":"+usuario.pass) 
		  })



		return this.http.get(`http://localhost:2000/usuarios/login`,
	                       {headers:header});
	}

	registrar(usuario): Observable<any>{
		let header = new HttpHeaders({
			Authorization: "Basic "+btoa("registro") 
		  })
		return this.http.post(`http://localhost:2000/usuarios/registro`,usuario, 
		                       {responseType:'text',headers:header});
	}

	esLogin(usuario:Usuario):Observable<any>{

		let header = new HttpHeaders({
			Authorization: "Basic "+btoa("hola") 
		  })
		return this.http.get(`http://localhost:2000/login/${usuario.correo}`,{headers:header});
	}
}
