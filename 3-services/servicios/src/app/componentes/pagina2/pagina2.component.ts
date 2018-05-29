import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Servicio2Service } from '../../servicios/servicio2.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
  
})
export class Pagina2Component implements OnInit {
  datos1:string;
   datos2:string;

  constructor(public route:ActivatedRoute,
              public servicio2: Servicio2Service) { 
                console.log("crea PAGINA 2")
              }

  ngOnInit() {

    // dos maneras obtener parametros de la url 
    this.datos1 = this.route.snapshot.paramMap.get('datos1');
    this.datos2 = this.route.snapshot.params['datos2'];
   
  }

}
