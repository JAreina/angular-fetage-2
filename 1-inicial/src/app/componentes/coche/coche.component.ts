import { Component, OnInit } from '@angular/core';
import {Coche}  from '../../entidades/coche';
@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
   
   
   public coches :Coche[];
   public coche : Coche;
   

  constructor(  ) { 
     
    }
   ngOnInit(){}

  


}
