import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../entidades/producto';
import { Detalle } from '../../entidades/detalle';
import { PedidosService } from '../../servicios/pedidosService';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() public producto:Producto = new Producto();
  public detalle:Detalle;

  constructor(private pedidosService:PedidosService) { 
    this.detalle = new Detalle();
    this.detalle.cantidad = 1;
  }

  ngOnInit():void {
  }

  public comprar():void{
    this.detalle.precio = this.producto.precio;
    this.detalle.producto = this.producto;
    this.pedidosService.addDetallePedido(this.detalle);
  }

  public descomprar():void{

  }

}
