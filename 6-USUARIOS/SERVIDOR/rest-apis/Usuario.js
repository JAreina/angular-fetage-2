class Usuario {
    

     constructor(id, correo,pass){
        this.id=id;
         this.correo = correo;
         this.pass = pass;
     }
     toString(){
         return `USUARIO: ${this.correo}, ${this.pass}`;
     }
}

module.exports= Usuario;