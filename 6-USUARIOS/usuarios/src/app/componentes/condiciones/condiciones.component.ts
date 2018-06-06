import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.component.html',
  styleUrls: ['./condiciones.component.css']
})
export class CondicionesComponent implements OnInit {

   public chequeado:boolean;

  constructor(private router : Router) { }

  ngOnInit() {
    this.chequeado = false;
  }

   estaChequeado(){
     this.chequeado = this.chequeado;
     console.log(this.chequeado)
   }




  aceptarCondiciones(){
    console.log(this.chequeado)
     if(this.chequeado){

           // REGISTAR USUARIO 


           // ENTRAR EN SU PAGINA
         this.router.navigate(['principal']);
     }
  }
}
