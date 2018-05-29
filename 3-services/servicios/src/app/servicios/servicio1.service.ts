import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {

    constructor() { 
        console.log("SERVICIO 1")
    }

    sumar(a:number,b:number):number{
        return a+b;
    }
}