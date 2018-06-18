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
    sesionServ.add("usuario",{correo:"pedro",pass:"passs"})
    console.log(sesionServ.get("usuario"));
  }
}
