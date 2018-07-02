import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient,
              private cfg:ConfiguracionService,
              private loginService:LoginService) {
                console.log(this.crearObjHeader("anonimo","anonimoPass"));
               }


              crearObjHeader(usuario:string,pass:string):HttpHeaders{

                return new HttpHeaders({
                  Authorization: "Basic "+btoa(usuario+":"+pass) 
                  })
               }


  public insertar(usuario:Usuario):Observable<any>{
    //
    return this.http.post(this.cfg.url+"/usuarios", 
                                        usuario, 
                                        { responseType : 'text',headers:this.crearObjHeader("anonimo","anonimoPass")} );
  }

  public modificar(usuario:Usuario):Observable<any>{
    return this.http.put(this.cfg.url+"/usuarios/"+usuario._id,
                         usuario,
                         { headers : this.loginService.getCabeceraAuth() } );
  }

  public borrar(usuario:Usuario):Observable<any>{
    return null;
  }

  public listarUsuarios():Observable<any>{
    return this.http.get(this.cfg.url+"/usuarios");
  }

  public comprobarSiElLoginExiste(login:string):Observable<any>{
    return this.http.get(this.cfg.url+"/logins/"+login);
  }

}
