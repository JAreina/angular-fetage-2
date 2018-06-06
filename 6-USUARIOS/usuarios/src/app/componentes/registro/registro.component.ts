import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import {Usuario}  from '../../modelos/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   usuario: Usuario;

  constructor(private usuarioServ: UsuarioService,
              private router : Router) { }

  ngOnInit() {
    this.usuario = new Usuario(null,null);
  }


  registrar(){
   
    console.log("REGISTRA"+ this.usuario)
    this.usuarioServ.registrar(this.usuario).subscribe(
                              data =>{
                                console.log("ir a condiciones ")
                                this.router.navigate(['condiciones'])
                          },error =>{
                                console.log(error)
                          })
}


}