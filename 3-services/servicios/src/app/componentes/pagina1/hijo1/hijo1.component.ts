import { Component, OnInit } from '@angular/core';
import { Servicio1Hijo1Service } from '../../../servicios/servicio1hijo1.service';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {

  constructor(public servicio1Hijo1: Servicio1Hijo1Service) { 
    console.log("crea HIJO 1")
  }

  ngOnInit() {
  }

}
