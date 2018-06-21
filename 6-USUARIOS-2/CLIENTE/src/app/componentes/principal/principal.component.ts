import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { Usuario } from '../../modelos/Usuario';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario: Usuario ;

  constructor(private sesionServ : SesionService) { 

    this.usuario = this.sesionServ.get("usuario");
  }

  ngOnInit() {
  }

}
