let express = require('express');


let router = express.Router();

router.get("/usuarios/credenciales",buscarPorLogin);



function buscarPorLogin(req,res,next){
    res.send('USUARIOS CREDENCIALES ');
}

module.exports = router;