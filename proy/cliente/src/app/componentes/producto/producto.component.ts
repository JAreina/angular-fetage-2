import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../entidades/Producto';
import { PedidoService } from '../../servicios/pedido.service';
import { Detalle } from '../../entidades/Detalle';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  @Input() public  producto: Producto ;
   detalle : Detalle;
   

  constructor(private pedidoServ: PedidoService) { 
    this.detalle = new Detalle();
    this.detalle.cantidad = 0;
  }

  ngOnInit() {
  }

 public addProductoAlPedido(){
         this.pedidoServ.addDetalle(new Detalle(this.detalle.cantidad,
                                    this.producto.precio,
                                  new Date().toLocaleDateString(),
                                   this.producto));

                                   alert("AÑADIDO PRODUCTO "+this.producto.nombre);
  }


  public eliminarProductoDelPedido(){

  }
}
