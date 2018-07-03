import { Component, OnInit } from '@angular/core';
import { Producto } from '../../entidades/Producto';
import { ProductoService } from '../../servicios/producto.service';
import { SesionService } from '../../servicios/sesion.service';
import { Pedido } from '../../entidades/Pedido';
import { Detalle } from '../../entidades/Detalle';
@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: [ './inicio.component.css' ]
})
export class InicioComponent implements OnInit {
	public productos: Producto[];
	public categoria: string;
	public mensaje: string;
	public pedido: Pedido;
	public detalle: Detalle;

	constructor(private productoService: ProductoService, 
		private sesionService: SesionService) {
			this.productos = [];
			this.listar();
		}

	ngOnInit() {
		
		//  this.pedido=  this.sesionService.get("pedido");
		//console.log(this.pedido)
	}

	listar(): void {
		this.productoService.listar().subscribe(
			(todos) => {
				console.log(todos);
				this.productos = todos;
			},
			(error) => {
				this.mensaje = 'no hay productos';
			}
		);
	}


	// por categoria 
	buscarProductos(): void{
		this.productoService.listarPorCategoria(this.categoria)
		.subscribe(
			(productos)=>{this.productos = productos},
			(err)=>{console.log(err)}
			
		)
	}
}
