import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import {Usuario}  from '../../modelos/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   usuario: Usuario;
  mensaje: string;
  deshabilita: boolean = true;

  constructor(private usuarioServ: UsuarioService,
              private sesionServ: SesionService,
              private router : Router) { }

  ngOnInit() {
    this.usuario = new Usuario(null,null,null,null);
  }


  registrar(){
   
    console.log("REGISTRA"+ this.usuario)
    this.usuarioServ.registrar(this.usuario).subscribe(
                              data =>{

                                console.log("correo al registrarse"+data)

                                // AÑADIR USUARIO A SESION
                              this.sesionServ.add("usuario",this.usuario);


                                // REENVIAR A PAGINA CONDICIONES 
                                console.log("ir a condiciones ")
                                this.router.navigate(['condiciones'])
                          },error =>{
                            this.mensaje = error.error;
                                console.log(error)
                          })
}

   esLogin(){
   console.log("comprueba login");
   this.usuarioServ.esLogin(this.usuario).subscribe(data =>{
             this.mensaje = data.mensaje;
             console.log("DATA " +data.status )
              
             if(data.status == 404){
               this.deshabilita = false;
             }else if(data.status == 200){
              this.deshabilita = true;
             }


   },error =>{
    this.mensaje = error.mensaje;
    console.log(error)
   })
   }

}