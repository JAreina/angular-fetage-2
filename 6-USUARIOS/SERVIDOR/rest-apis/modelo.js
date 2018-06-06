const Usuario = require('./Usuario');
//modelo 
arr = [];

arr.push(
    new Usuario("a@a.com","111"),
    new Usuario("b@b.com","222")
)
let id =3;

exports.buscar = (correo,pass)=>{
       if(typeof arr == 'undefined'){
        arr = [];
      }
     return new Promise((resolve,reject)=>{
           let  usuario = new Usuario(correo,pass);
            for(var i =0; i<arr.length; i++){
              
             if(arr[i].correo == usuario.correo && arr[i].pass == usuario.pass){
                 console.log( arr[i].correo + " ESTA REGISTRADO ")
                   resolve(arr[i]);
                   return;
             }
         
         }
         reject(null);
        });
  
 
}

exports.registrar =(usuario)=>{
      
    
    return new Promise((resolve,reject)=>{
      
      if(!usuario.correo || !usuario.pass){
          reject("CORREO Y PASSWORD OBLIGATORIOS")
      }
      id++;
       usuario.id=id;
        arr.push = usuario;
        console.log(arr)
        resolve("REGISTRADO")
    })
   

}


