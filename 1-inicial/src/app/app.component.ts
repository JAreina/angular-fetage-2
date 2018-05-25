import { Component } from '@angular/core';
import { Libro } from './entidades/libro';
import {CocheComponent}  from './componentes/coche/coche.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CocheComponent]
})
export class AppComponent {
  title : string = 'COCHES 6000';
  arr:number[]=[];
  bool: boolean = false;
  cadena: string= "angularrrrrr";

  public libro:Libro;
  ;

   constructor(public coche:CocheComponent){
    this.libro = new Libro("1","quijote","cercantes","234545454")
     this.llenarArray(this.arr);
     
   }

 

  llenarArray(arr){
    for(let i =0; i<100;i++){
      arr[i]= i;
    }
    
  }
 
   
   
}
