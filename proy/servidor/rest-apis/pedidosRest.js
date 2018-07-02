let express = require('express');
let negocioPedidos = require('../negocio/pedidosNegocio.js');

let router = express.Router();


router.post('/pedido', insertar)
       .get('/pedidos/usuarios/usuario',listarPedidosPorUsuario)
       .get('/pedidos/pedido/:id',listarPedidoPorId)






exports.router = router;
/**
 * logica de control
 * 
 * 
 */

function insertar(request, response){
    let pedido = request.body;
    negocioPedidos.insertar(pedido)
    .then( rs => {
        response.json(rs);
    })
    .catch( error => {
        response.status(error.status);
        response.json(error);
    });  
}

function listarPedidosPorUsuario(request,response){


    let usuario = request.body.usuario;
    negocioPedidos.listarPedidosPorUsuario(usuario)
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