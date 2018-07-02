import { Component, OnInit } from '@angular/core';
import { Producto } from '../../entidades/producto';
import { ProductosService } from '../../servicios/productosService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public productos:Producto[];
  public categoria:String;

  constructor( private productosService:ProductosService) {
    productosService.listarProductos()
      .subscribe( productos => this.productos=productos,
                  error => console.log(error) );
  }

  ngOnInit() {
  }
  
  public buscar():void{

  }

}
