let express = require('express');
let router = express.Router();
const UsuarioNegocio = require('./usuariosNegocio');


router.get("/usuarios/registro",UsuarioNegocio.buscarPorLogin);
router.post("/usuarios/login",UsuarioNegocio.login);




module.exports = router;