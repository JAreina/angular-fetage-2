import { Component, OnInit } from '@angular/core';
import { Producto } from '../../entidades/Producto';
import { ProductoService } from '../../servicios/producto.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public productos:Producto[] = [];
  public categoria: String;
  public mensaje: string;
  constructor(private productoService:ProductoService) { }

  ngOnInit() {
  }


  listar():void{
     this.productoService.listar() 
     .subscribe( todos => {
     this.productos = todos;
     },
     error => { this.mensaje = 'Credenciales incorrectas'} );
  }
}
