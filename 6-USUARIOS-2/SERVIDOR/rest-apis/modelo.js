const Usuario = require('./Usuario');
//modelo 
arr = [];

arr.push(
    new Usuario(1,"a@a.com","111"),
    new Usuario(2,"b@b.com","222")
)
let id =3;


const conexion = require('./conexionMongo');
const dbName = 'usuariosBD';


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
      
      if( (usuario.correo=='' || usuario.pass =='') 
         || (!usuario.correo || !usuario.pass)){
          reject("CORREO Y PASSWORD OBLIGATORIOS")
          return;
      }
      id++;
       usuario.id=id;
       console.log(conexion);

       // guardar el registro en base datos 

       conexion.then(
           (err,db)=>{
            const base = db.db(dbName);
            base.collection("usuarios").insertOne(usuario,(err,r)=>{
                console.log(r)
                resolve("REGISTRADO")
            })
           }

       ).catch();

       // arr.push = usuario;
        //console.log(arr)
        
    })
   

}


