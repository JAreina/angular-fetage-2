import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/Usuario';
import { SesionService } from '../servicios/sesion.service';
@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	constructor(private http: HttpClient, private sesion : SesionService) {}



   crearObjHeader(usuario:string,pass:string):HttpHeaders{

		return new HttpHeaders({
			Authorization: "Basic "+btoa(usuario+":"+pass) 
		  })
	 }




	login(usuario): Observable<any> {
		console.log('servicio login ');
		//console.log(usuario.correo);

		return this.http.get(`http://localhost:2000/usuarios/login`,
	                       {headers:this.crearObjHeader(usuario.correo,usuario.pass)});
	}



	logout(){
			let user = this.sesion.get("usuario");
			if (user){
				
			}
	}

	registrar(usuario): Observable<any>{
		let header = new HttpHeaders({
			Authorization: "Basic "+btoa("registro") 
		  })
		return this.http.post(`http://localhost:2000/usuarios/registro`,usuario, 
		                       {responseType:'text',headers:this.crearObjHeader("anonimo","anonimoPass")});
	}

	esLogin(usuario:Usuario):Observable<any>{

		let header = new HttpHeaders({
			Authorization: "Basic "+btoa(usuario.correo) 
		  })
		return this.http.get(`http://localhost:2000/login/${usuario.correo}`,{headers:header});
	}


	buscarUsuario(usuario){
		return this.http.get(`http://localhost:2000/usuarios/login`,
		{headers:this.crearObjHeader(usuario.correo,usuario.pass)});
	}



	modificar(usuario){
		return this.http.put(`http://localhost:2000/usuarios/modificar`,usuario,
		{headers:this.crearObjHeader(usuario.correo,usuario.pass)});
	}
}
