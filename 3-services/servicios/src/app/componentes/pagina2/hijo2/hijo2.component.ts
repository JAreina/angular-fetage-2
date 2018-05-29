import { Component, OnInit } from '@angular/core';
import { Servicio2Hijo2Service } from '../../../servicios/servicio2hijo2.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {

  constructor(public servicio2Hijo: Servicio2Hijo2Service) {
    console.log("crea HIJO 2")
   }

  ngOnInit() {
  }

}
