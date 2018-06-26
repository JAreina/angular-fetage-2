class Usuario {
    

     constructor(_id,id,nombre,correo,pass,direccion,telefono){
          this._id = _id;
          this.id=id;
          this.nombre = nombre;
          this.correo = correo;
          this.pass = pass;
          this.direccion= direccion;
          this.telefono= telefono;
     }
     toString(){
         return `USUARIO: ${this.correo}, ${this.pass}`;
     }
}

module.exports= Usuario;