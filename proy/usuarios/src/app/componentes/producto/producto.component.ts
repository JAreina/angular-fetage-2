import { Component, OnInit } from '@angular/core';
import { Producto } from '../../entidades/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  public  producto: Producto;
  

  constructor() { }

  ngOnInit() {
  }

}
