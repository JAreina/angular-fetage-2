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



}
