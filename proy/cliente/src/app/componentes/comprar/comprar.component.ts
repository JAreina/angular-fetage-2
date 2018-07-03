import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';
import { Pedido } from '../../entidades/Pedido';
import { SesionService } from '../../servicios/sesion.service';
import { Usuario } from '../../entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {


  fecha :string = new Date().toLocaleString();
  tc: string = "";
   pedido: Pedido;
    usuario : Usuario;

  constructor(private pedidoService: PedidoService,
                private sesionService: SesionService,
              private router: Router) { }

  ngOnInit() {
    this.recuperarPedido();
  }

   recuperarPedido(){
       this.pedido = this.sesionService.get('pedido');
       this.usuario = this.sesionService.get('usuario');
   }


  comprar(){
    this.pedido.usuario = this.usuario;
    this.pedido.usuario.tc = this.tc;
    this.pedido.fecha = this.fecha;
    this.pedido.codigo = "1";
    this.sesionService.add('pedido',this.pedido);

     this.pedidoService.insertarPedidoEnBD().subscribe(
       insertadoPedido =>{
             console.log("GUARDADO PEDIDO"+insertadoPedido)
             this.sesionService.add("pedido",{}); // vaciar pedido
             this.router.navigate(['inicio']);
       }, 
       error =>{
              console.log(error )
       }
     )
  }
}
