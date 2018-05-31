import { Injectable } from '@angular/core';

import { Pelicula } from '../entidades/Pelicula';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {


   arryPeliculas: Pelicula[] = [];

  constructor(private http: HttpClient) { }


 getPeliculas():any{
   let url:string = "http://localhost:3999/peliculas";

     this.http.get<Pelicula[]>(url)
                   .subscribe(
                   
                   data => {   // data is already a JSON object
                       console.log(data);
                      this.arryPeliculas= data;
                     return data;
                       
                 }, error =>{
                         console.log(error)
                  });
   

                  //return this.arryPeliculas;             
 }


 
}


