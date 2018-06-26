import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Usuario } from '../../../modelos/Usuario';
import { SesionService } from '../../../servicios/sesion.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario;
  mensaje: string;
  deshabilita: boolean;

  constructor(private usuarioServ: UsuarioService,
             private sesion: SesionService) { 

    this.usuario = this.sesion.get("usuario");
    this.usuarioServ.buscarUsuario(this.usuario).subscribe(
      data =>{
            // añadir a sesion 
            
             console.log(data)
             
            // this.usuario = data.toString();
            // navegar a su pagina 
            
      },
      error =>{
        // credenciales incorrectas 
          this.mensaje= error.error;
         // console.log(error)
      }
    );

  }

  ngOnInit() {
  }

  modificar(){
    // hacer update de los datos nuevos 
    this.usuarioServ.modificar(this.usuario).subscribe(
      data =>{
        console.log(data)
      },
      error =>{
        this.mensaje= error.error;
      }
    )
  }
}
