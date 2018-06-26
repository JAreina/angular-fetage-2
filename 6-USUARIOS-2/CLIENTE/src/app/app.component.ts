import { Component } from '@angular/core';
import { SesionService } from './servicios/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private sesionServ:SesionService){
    this.sesionServ.add("usuario",{correo:"anonimo",pass:"anonimo"})
    //console.log(sesionServ.get("usuario"));
  }
}
