class Usuario {
    

     constructor(_id,id, correo,pass){
         this._id = _id;
        this.id=id;
         this.correo = correo;
         this.pass = pass;
     }
     toString(){
         return `USUARIO: ${this.correo}, ${this.pass}`;
     }
}

module.exports= Usuario;