import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';
import { Pedido } from '../../entidades/Pedido';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  public pedido : Pedido;
  
  constructor(private pedidoService: PedidoService) { 


    this.pedido = pedidoService.getPedido();
  }

  ngOnInit() {
  }


   calcularTotalPedido(){
     let total= 0;
     for (let i =0; i<this.pedido.detalle.length; i++){
       total += this.pedido.detalle[i].cantidad * this.pedido.detalle[i].precio;
     }
     this.pedido.total = total.toString();
     return total;
   }


}
