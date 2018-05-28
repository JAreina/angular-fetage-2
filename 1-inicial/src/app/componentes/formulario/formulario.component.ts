import { Component, OnInit } from '@angular/core';
import {ServicioCarroceria} from '../../servicios/carroceria.servicio';
import { Coche } from '../../entidades/coche';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public carrocerias : string[];
  public coche: Coche;

  private servicioCarrocerias = new ServicioCarroceria();

  constructor() { 
       this.carrocerias= [];
       this.carrocerias = this.servicioCarrocerias.listar();
  }

  ngOnInit() {
  }

}
