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
	constructor(
		private http: HttpClient,
		private cfg: ConfiguracionService,
		private loginService: LoginService,
		private sesionService: SesionService
	) {
		let pedido = new Pedido();
		this.sesionService.add('pedido', pedido);
	}

	addDetalle(detalle: Detalle) {
		// recuperarpedido de la sesion
		let pedido = this.sesionService.get('pedido');

		pedido.addDetalle(detalle);
	}

	public eliminarDetalleDelPedido(detalle: Detalle) {
		let pedido = this.sesionService.get('pedido');

		pedido.eliminarDetalle(detalle);
	}
}
