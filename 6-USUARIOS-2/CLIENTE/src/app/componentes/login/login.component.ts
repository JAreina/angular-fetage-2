import { Component, OnInit } from '@angular/core';
import {Usuario}  from '../../modelos/Usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
   mensaje: string;



  constructor(private usuarioServ: UsuarioService,
              private router : Router,
              private sesion : SesionService) { }

  ngOnInit() {
    this.usuario = new Usuario(null,null,null,null);
  }
  login(){
       this.usuarioServ.login(this.usuario).subscribe(
         data =>{
               // añadir a sesion 
                this.sesion.add("usuario",this.usuario);
                console.log(data)
                this.mensaje = data;
               // navegar a su pagina 
               //if(this.mensaje == "BIENBENIDA")
                     this.router.navigate(['principal'])
         },
         error =>{
           // credenciales incorrectas 
             this.mensaje= error.error;
            // console.log(error)
         }
       )
  }
}
