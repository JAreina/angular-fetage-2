let Pedido = require("../entidades/pedido.js").Pedido;


exports.insertar = function(pedido,usuario){

    if( pedido.usuario._id != usuario._id ){

         return new Promise(function(resolve,reject){
            reject( { status: 403, texto: 'USUARIO NO VALIDO' });
         })
           
    }

    if ( 
         !pedido.direccion  || pedido.direccion.trim()==''
          ){

            return new Promise(function(resolve,reject){
                reject( { status: 400, texto: 'datos incorrectos' });
             })
            
    }

     pedido = new Pedido(pedido);

    // devuelve promesa 
  // generar codigo en servidor 
       pedido.codigo = "PED-"+Math.round(Math.random()*10000);
       pedido.total = calcularTotalPedido(pedido);


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

function calcularTotalPedido(pedido){
    let total= 0;
    for (let i =0; i< pedido.detalle.length; i++){
      total += pedido.detalle[i].cantidad * pedido.detalle[i].precio;
    }
    
    return total;
  }

exports.listarPedidosPorUsuario = (usuarioId,usuario)=>{

    if(id != usuario._id){
        return new Promise(function(resolve,reject){
            reject({ status: 403, texto: 'SOLO LISTAR TUS PEDIDOS' });
        });
    }
return new Promise(function(resolve,reject){
  Pedido.find({"usuario._id": usuarioId})
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