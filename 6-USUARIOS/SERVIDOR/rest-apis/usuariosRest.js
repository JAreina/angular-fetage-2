let express = require('express');
let router = express.Router();
const UsuarioNegocio = require('./usuariosNegocio');


router.get("/usuarios/login",UsuarioNegocio.login);
router.post("/usuarios/registro",UsuarioNegocio.buscarPorLogin);




module.exports = router;