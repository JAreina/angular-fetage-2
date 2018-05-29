import { Component } from '@angular/core';
import { ServicioAppService } from './servicios/servicioapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'servicios';
  constructor(public servicioApp: ServicioAppService){
    console.log("crea APP-COMPOMENT")
  }
}
