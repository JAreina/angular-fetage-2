import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	constructor(private http: HttpClient) {}

	registrar(usuario): Observable<any> {
		console.log('servicio registrar ');
		console.log(usuario.correo);
		return this.http.get(`http://localhost:2000/usuarios/registro?correo=${usuario.correo}&pass=${usuario.pass}`);
	}

	login(usuario): Observable<any>{
		return this.http.post(`http://localhost:2000/usuarios/login`,usuario);
	}
}
