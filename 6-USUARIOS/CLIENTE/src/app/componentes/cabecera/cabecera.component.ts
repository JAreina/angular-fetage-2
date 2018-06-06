import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public cabecera = "user app"
  public noMostrar:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
