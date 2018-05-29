import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio1Service } from '../../servicios/servicio1.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
      suma:number;
 
  constructor(public router:Router,
              public servicio1:Servicio1Service) {
                console.log("crea PAGINA 1")
               }

  ngOnInit() {
    this.suma = this.servicio1.sumar(3333,666);
  }
  navega(){
    this.router.navigate(["pagina2"]);
  }
}
