const Usuario = require('./Usuario');
//modelo 
arr = [];

arr.push(
    new Usuario(1,"a@a.com","111"),
    new Usuario(2,"b@b.com","222")
)
let id =3;


const conexion = require('./conexionMongo');
const conexion1 = require('./miConexion');
const dbName = 'usuariosBD';




console.log(conexion1)

exports.buscar = (correo,pass)=>{
     let bd = conexion.getConexion();
     let base = bd.db(dbName);


     // resultado es una PROMESA 
    let resultado = base.collection("usuarios").findOne({correo:correo,pass:pass})
      console.log( "BUSCADO : "+ resultado);
     return resultado;
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
       //console.log(conexion1);

       // guardar el registro en base datos 

       conexion1.then(
           (db)=>{
            const base = db.db(dbName);
            base.collection("usuarios").insertOne(usuario,(err,r)=>{
                console.log(r)
                resolve("REGISTRADO")
            })
           }

       ).catch((err)=>{
        reject("CORREO Y PASSWORD OBLIGATORIOS")
           console.log(err)
       });

       // arr.push = usuario;
        //console.log(arr)
        
    })
   

}


