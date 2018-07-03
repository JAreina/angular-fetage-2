let express = require('express');
let negocioPedidos = require('../negocio/pedidosNegocio.js');

let router = express.Router();


router.post('/pedido', insertar)
       .get('/pedidos/usuarios/:id',listarPedidosPorUsuario)
       .get('/pedidos/pedido/:id',listarPedidoPorId)






exports.router = router;
/**
 * logica de control
 * 
 * 
 */

function insertar(request, response){
    let pedido = request.body;
    let usuario = request.usuario;
    console.log(usuario + "..............................usuario ")
    negocioPedidos.insertar(pedido,usuario)
    .then( rs => {
        response.json(rs);
    })
    .catch( error => {
        response.status(error.status);
        response.json(error);
    });  
}

function listarPedidosPorUsuario(request,response){


    let usuarioId = request.params.id;
    negocioPedidos.listarPedidosPorUsuario(usuarioId,request.usuario)
    .then(lista=>{
        response.json(lista);
    })
    .catch(error=>{
        response.status(error.status);
        response.json(error);
    })

}

function listarPedidoPorId(request, response){
    let id = request.params.id;
    negocioPedidos.listarPedidoPorId(id)
    .then(pedido =>{
              response.json(pedido)
    })
    .catch(error=>{
        response.status(error.status);
        response.json(error);
    })

}