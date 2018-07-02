let pedido = require("../entidades/pedido.js").pedido;


exports.insertar = function(pedido){

    /*if( typeof pedido._id != 'undefined' ){

         return new Promise(function(resolve,reject){
            reject( { status: 400, texto: 'No se puede insertar con _id' });
         })
           
    }*/

    if ( !pedido.codigo || pedido.codigo.trim()=='' ||
         !pedido.direccion  || pedido.direccion.trim()==''
          ){

            return new Promise(function(resolve,reject){
                reject( { status: 400, texto: 'datos incorrectos' });
             })
            
    }

     pedido = new Pedido(pedido);

    // devuelve promesa 


    return new Promise(function(resolve,reject){
        pedido.save()
        .then(
            rs =>{
                resolve( { status: 200, texto:'pedido insertado' });
            }
        ).catch(error => { 
            reject({ status: 500, texto: 'Ay mamá',error:error });
        });
    })
   
  
}


exports.listarPedidosPorUsuario = (usuario)=>{
return new Promise(function(resolve,reject){
  pedido.find({"usuario": usuario})
  .then(pedidos =>{
      resolve({status: 200, pedidos: pedidos})
  })
  .catch(error =>{
    reject({ status: 500, texto: 'NO SE HAN LISTADO los pedidos',error:error });
  })
})
}



exports.listarPedidoPorId = (id)=>{
    return new Promise(function ( resolve, reject){
        pedido.find({"_id": id})
        .then(pedido =>{
            resolve({status: 200, pedido: pedido})
        })
        .catch(error =>{
            reject({ status: 500, texto: 'no hay pedido',error:error });
          })
    })
}