import { Component, OnInit } from '@angular/core';
import {Coche}  from '../../entidades/coche';
import {ServicioCoche} from '../../servicios/coche.servicio';
import {ServicioCarroceria} from '../../servicios/carroceria.servicio';





@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  providers:[ServicioCoche]
})
export class CocheComponent implements OnInit {
   
   
   public coches :Coche[]=[];
   public coche : Coche;
   public carroceria : string[];
   
   private servicioCoche = new ServicioCoche();
   private servicioCarrocerias = new ServicioCarroceria();
  

  constructor( ) { 
    
    this.coches = this.servicioCoche.listar();
    this.carroceria = this.servicioCarrocerias.listar();
      
    }
   ngOnInit(){}

  
    buscar(id){
      
      console.log(id)
         this.coche = this.servicioCoche.buscar(id);
         
         console.log(this.coche)
    }

    insertar(){
      //this.coche = new Coche(this.coche.id,this.coche.marca,this.coche.modelo,this.coche.potencia,this.coche.carroceria));
       this.coche = new Coche(null,null,null,null,null)
        this.servicioCoche.insertar(this.coche);
      
      
    }
    guardar(){

      console.log(this.carroceria);
      this.servicioCoche.guardar(new Coche(this.coche.id,this.coche.marca,this.coche.modelo,this.coche.potencia,this.coche.carroceria));
    }

    modificar(){
      console.log("HAS CLICK EN MODIFICAR")
      this.servicioCoche.modificar(new Coche(this.coche.id,this.coche.marca,this.coche.modelo,this.coche.potencia,this.coche.carroceria));

    }
    borrar(){
      this.servicioCoche.borrar(new Coche(this.coche.id,this.coche.marca,this.coche.modelo,this.coche.potencia,this.coche.carroceria));
       this.vaciar();
    }

    vaciar(){
      this.coche.id=0;
      this.coche.marca="";

      this.coche.modelo ='';
      this.coche.potencia='';
      this.coche.carroceria='';
    }
    cancelar(){
      this.coche=null;
    }
}
