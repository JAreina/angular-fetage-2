import { Usuario } from 'src/app/entidades/usuario';
import { Detalle } from './Detalle';

export class Pedido {
	constructor(
		public _id: string = undefined,
		public codigo: string = null,
		public fecha: string = null,
		public direccion: string = null,
		public usuario: Usuario = null,
		public detalle: Detalle[] = []
	) {}

	addDetalle(detalle: Detalle) {
		this.detalle.push(detalle);
	}

	public eliminarDetalle(detalle: Detalle) {}
}
