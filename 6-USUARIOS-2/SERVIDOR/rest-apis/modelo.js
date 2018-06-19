const Usuario = require('./Usuario');
//modelo 
arr = [];

arr.push(
    new Usuario(1,"a@a.com","111"),
    new Usuario(2,"b@b.com","222")
)
let id =0;


const conexion = require('./conexionMongo');
const conexion1 = require('./miConexion');
const dbName = 'usuariosBD';

const mongo = require("mongodb")


//console.log(conexion1)

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
      usuario.id = id;
       //BUSCAR ID MAYOR 
      /*conexion1.then((db)=>{
        const base = db.db(dbName);
        let ide=0;
        base.collection("usuarios").find({},{id:1})
                    .sort(-1).limit(1).toArray(function(err, docs) {
                        ide =docs[0];
                        console.log(docs[0])
                        usuario.id= ++ide;
                        console.log("ID MAYOR "+ide);
                    });
       
       
      })*/
       // guardar el registro en base datos 

       conexion1.then(
           (db)=>{
            const base = db.db(dbName);
            base.collection("usuarios").insertOne(usuario,(err,r)=>{
                //console.log(r)
                resolve("REGISTRADO")
            })
           }

       ).catch((err)=>{
        reject("CORREO Y PASSWORD OBLIGATORIOS")
           //console.log(err)
       });

       // arr.push = usuario;
        //console.log(arr)
        
    })
   

}


exports.modificar= (usuario )=>{
    let bd = conexion.getConexion();
    let base = bd.db(dbName);

   
    // resultado es una PROMESA 
   let resultado = base.collection("usuarios")
                        .updateOne({_id:mongo.ObjectId(usuario._id)},
                               {$set: {"correo":usuario.correo, "pass":usuario.pass}})
     console.log( "modificado : "+ resultado);
    return resultado;
}

exports.borrar= (usuario )=>{
    let bd = conexion.getConexion();
    let base = bd.db(dbName);

   
    // resultado es una PROMESA 
   let resultado = base.collection("usuarios")
                        .deleteOne({_id:mongo.ObjectId(usuario._id)},
                               {$set: {"correo":usuario.correo, "pass":usuario.pass}})
     console.log( "borrado : "+ resultado);
    return resultado;
}

exports.listar= ()=>{
    let bd = conexion.getConexion();
    let base = bd.db(dbName);
    let cursor = base.collection("usuarios").find({}).limit(5);
    console.log(cursor)
    return cursor;
}

exports.buscarPorId= (usuario )=>{
    let bd = conexion.getConexion();
    let base = bd.db(dbName);

   
    // resultado es una PROMESA 
   let resultado = base.collection("usuarios")
                        .findOne({_id:mongo.ObjectId(usuario._id)})
            console.log( "buscar por id : "+ resultado);
    return resultado;
}