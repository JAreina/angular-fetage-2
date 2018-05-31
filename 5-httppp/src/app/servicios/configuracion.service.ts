import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
   url:string = "http://localhost:3999";


  constructor() { }
}
