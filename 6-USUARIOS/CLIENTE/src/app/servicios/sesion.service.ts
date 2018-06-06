import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sesion:any[]=[];

  constructor() { }

   public add(clave:string,obj:any):void{
          
         this.sesion[clave]=obj;
         console.log(obj)
   }
   public get(clave:string):any{
     
       return this.sesion[clave];
   }



}
