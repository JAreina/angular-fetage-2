import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfiguracionService } from './configuracion.service';
import { LoginService } from '../servicios/login.service';
import { Observable } from 'rxjs';
import { Producto } from '../entidades/Producto';
import { Pedido } from '../entidades/Pedido';
import { Detalle } from '../entidades/Detalle';
import { SesionService } from './sesion.service';

@Injectable({
	providedIn: 'root'
})
export class PedidoService {
	pedido: Pedido;

	constructor(
		private http: HttpClient,
		private cfg: ConfiguracionService,
		private loginService: LoginService,
		private sesionService: SesionService
	) {
		 this.pedido = new Pedido();
		this.sesionService.add('pedido', this.pedido);
	}

	addDetalle(detalle: Detalle) {
		// recuperarpedido de la sesion
		 this.pedido = this.sesionService.get('pedido');

         this.pedido.addDetalle(detalle);
          console.log(this.pedido);
	}

	public eliminarDetalleDelPedido(detalle: Detalle) {
	    this.pedido = this.sesionService.get('pedido');

         this.pedido.eliminarDetalle(detalle);
    

	}
	public getPedido(){
		
		return this.sesionService.get('pedido');
	}




	insertarPedidoEnBD(): Observable<any>{
		this.pedido = this.sesionService.get('pedido');

		let cabeceras : HttpHeaders= this.loginService.getCabeceraAuth();
  return this.http.post(this.cfg.url+"/pedido",this.pedido,
                             {responseType: "text",headers: cabeceras});
	}
}
