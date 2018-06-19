import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	constructor(private http: HttpClient) {}

	login(usuario): Observable<any> {
		console.log('servicio login ');
		//console.log(usuario.correo);
		return this.http.get(`http://localhost:2000/usuarios/login?correo=${usuario.correo}&pass=${usuario.pass}`);
	}

	registrar(usuario): Observable<any>{
		return this.http.post(`http://localhost:2000/usuarios/registro`,usuario, {responseType:'text'});
	}
}
