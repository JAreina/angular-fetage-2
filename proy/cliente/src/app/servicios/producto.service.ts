import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { LoginService } from '../servicios/login.service';
import { Observable } from 'rxjs';
import { Producto } from '../entidades/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient,
               private cfg:ConfiguracionService,
              private loginService: LoginService) { }


 listar(): Observable<any>{
   let cabeceras : HttpHeaders= this.loginService.getCabeceraAuth();
  return this.http.get(this.cfg.url+"/productos",{headers: cabeceras});
 }

 listarPorCategoria(categoria:string): Observable<any>{
  let cabeceras : HttpHeaders= this.loginService.getCabeceraAuth();
  return this.http.get(this.cfg.url+"/productos/categorias/"+categoria,{headers: cabeceras});
 }
}
