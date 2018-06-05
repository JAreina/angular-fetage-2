class Usuario {
    

     constructor( correo,pass){
         this.correo = correo;
         this.pass = pass;
     }
     toString(){
         return `USUARIO: ${this.correo}, ${this.pass}`;
     }
}

module.exports= Usuario;