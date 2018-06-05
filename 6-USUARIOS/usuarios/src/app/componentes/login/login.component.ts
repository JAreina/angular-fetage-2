import { Component, OnInit } from '@angular/core';
import {Usuario}  from '../../modelos/Usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioServ: UsuarioService,
    private router : Router) { }

  ngOnInit() {
    this.usuario = new Usuario(null,null);
  }
  login(){
       this.usuarioServ.login(this.usuario).subscribe(
         data =>{
          this.router.navigate(['principal'])
         },
         error =>{
             console.log(error)
         }
       )
  }
}
