var mongoose = require('mongoose');
let Usuario = require('./usuario.js').Usuario;
let Producto = require('./producto.js').Producto;


// definir esquema
let Esquema = mongoose.Schema;
let esquemaPedido = new Esquema({
    //_id: Esquema.Types.ObjectId,
    codigo: String,
    fecha :String,
    total: Number,
    direccion: String,
    usuario: Usuario.schema,
    detalle: [
        {cantidad : Number,
        precio : Number,
         producto : Producto.schema}
    ]
    
})



// obtener modelo

exports.Pedido= mongoose.model("pedidos",esquemaPedido);