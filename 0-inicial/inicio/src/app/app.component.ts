import { Component } from '@angular/core';
import { Libro } from './entidades/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title : string = 'COCHES 6000';
  arr:number[]=[];
  bool: boolean = false;
  cadena: string= "angularrrrrr";

  public libro:Libro;
  ;

   constructor(){
    this.libro = new Libro("1","quijote","cercantes","234545454")
     this.llenarArray(this.arr);
     
   }

 

  llenarArray(arr){
    for(let i =0; i<100;i++){
      arr[i]= i;
    }
    
  }
 
   
   
}
