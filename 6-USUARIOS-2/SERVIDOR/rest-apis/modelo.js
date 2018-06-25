const Usuario = require('./Usuario');
//modelo 
/*arr = [];

arr.push(
    new Usuario(1,"a@a.com","111"),
    new Usuario(2,"b@b.com","222")
)*/
let id =0;


const conexion = require('./conexionMongo');
const conexion1 = require('./miConexion');
const dbName = 'usuariosBD';

const mongo = require("mongodb")


//console.log(conexion1)

exports.buscar = (correo,pass)=>{

   let promesa = new Promise ((resolve,reject)=>{
        let bd = conexion.getConexion();
        let base = bd.db(dbName);


        // resultado consulta a mongo es una PROMESA 
    let resultadoConsulta = base.collection("usuarios")
        .findOne({correo:correo,pass:pass})
        console.log( "BUSCADO : "+ resultadoConsulta);

        /// 
        resultadoConsulta.then(
            (datos)=>{
                console.log("MODELO BUSCAR : "+datos)
                 if(datos != null){
                    resolve({status: 200, datos: datos});
                 }else{
                     resolve({status:404, mensaje: "NO REGISTRADO"})
                 }
                 //resolve({status: 200, datos: datos});
            }
        ).catch((err)=>{

               reject({status: 500, mensaje: "error r interno"})
        });
   })
 
     return promesa;
}


function insertar(usuario,resolve,reject){
    let bd = conexion.getConexion();
    let base = bd.db(dbName);
    let resultadoConsulta = base.collection("usuarios").insertOne(usuario)

    resultadoConsulta
    .then(
        datos =>{
            console.log(datos)
            if(datos !=null){
             resolve({status:200, mensaje: "REGISTRADO CORRECTAMENTE"})
            }else{
             resolve({status: 400, mensaje:"CORREO Y PASSWORD OBLIGATORIOS"})
            }
        
        }
    ).catch(err=>{
           reject({status: 500, mensaje:err})
    });

}




exports.registrar =(usuario)=>{
      
    
    return new Promise((resolve,reject)=>{
      
      if( (usuario.correo=='' || usuario.pass =='') 
         || (!usuario.correo || !usuario.pass)){
          reject({status: 404, mensaje: "CORREO Y PASSWORD OBLIGATORIOS"})
          return;
      }
      id++;
      usuario.id = id;
     
      let bd = conexion.getConexion();
      let base = bd.db(dbName);

        if(usuario._id != null){
            usuario._id = undefined;
        }
        if(usuario.nombre == undefined) usuario.nombre = "";


          // COMPROBAR SI YA EXISTE EN MONGO EL USUARIO
       
       
       
       /*   let siExiste = buscar(usuario.correo, usuario.pass);


           siExiste.then(
                    datos =>{
                        if(datos != null){
                            resolve({status:200, mensaje: "REGISTRADO"})
                        }else {
                            // insertarlo no existe
                            console.log("no existe")
                         insertar(usuario);
                         resolve({status:200, mensaje: "insertado"})

                        }
                    }        
                     
           ).catch(
                 error =>{
                     
                 }
           )
                
*/

   insertar(usuario,resolve,reject)






    })// promesa 
   

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
    let cursor = base.collection("usuarios").find({}).limit(5).toArray();
    console.log("CURSOR"+ cursor)
    
    return cursor; // promesa
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


exports.esLogin = (l)=>{
    let promesa = new Promise ((resolve,reject)=>{
        let bd = conexion.getConexion();
        let base = bd.db(dbName);
  console.log(l)

        // resultado consulta a mongo es una PROMESA 
    let resultadoConsulta = base.collection("usuarios").findOne({correo:l})
        console.log( "BUSCADO : "+ resultadoConsulta);

        /// 
        resultadoConsulta.then(
            (datos)=>{
                 if(datos != null){
                    resolve({status: 200, mensaje: "CORREO YA REGISTRADO"});
                 }else{
                     reject({status:404, mensaje: "CORREO NO REGISTRADO"})
                 }
                    
            }
        ).catch((err)=>{

               reject({status: 500, mensaje: "error servidor"})
        });
   })
 
     return promesa;
}