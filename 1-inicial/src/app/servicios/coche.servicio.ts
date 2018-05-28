import {Coche}  from '../entidades/coche';



    
    
    export class ServicioCoche{
    
    
     
     
      
        private arryCoches:Coche[]=[];
        
        constructor(){
            let coche1 = new Coche(1,"Ferrari","100Bx","3653","coupe");
     let coche2 = new Coche(2,"Toyota","277z","3423","4 puertas");
     let coche3 = new Coche(3,"Mercedes","23I","3423","5 puertas");
    
      this.arryCoches.push(coche1);
      this.arryCoches.push(coche2);
      this.arryCoches.push(coche3);
        }
        
        
        
        public listar():Coche[]{
            return this.arryCoches;
        }

        buscar(id:any): Coche {
            
            for ( let i =0;i< this.arryCoches.length;i++){
                if(this.arryCoches[i].id==id)
                 //console.log(this.arryCoches[i])
                return this.arryCoches[i];
            }
       
          }
         public insertar(coche:Coche):void{
             
            
         }
         public guardar(coche2:Coche):void{
            
            this.arryCoches.push(coche2);
         }

         modificar(c: Coche): void{
            for ( let i =0;i< this.arryCoches.length;i++){
                if(this.arryCoches[i].id==c.id)
                 //console.log(this.arryCoches[i])
                   this.arryCoches[i]= c;
            }
            this.listar();
          }

          borrar(c: Coche): void{
            for ( let i =0;i< this.arryCoches.length;i++){
                if(this.arryCoches[i].id==c.id)
                 //console.log(this.arryCoches[i])
                   this.arryCoches.splice(i,1);
            }
            this.listar();
          }
    }