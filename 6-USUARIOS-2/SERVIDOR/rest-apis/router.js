let express = require('express');
let router = express.Router();
const Controlador = require('./controlador');

router.get('/', (req,res,next)=>res.send("hola"))
router.get("/usuarios/login",Controlador.buscar);
router.post("/usuarios/registro",Controlador.registrar);
router.put("/usuarios/modificar",Controlador.modificar);
router.delete("/usuarios/borrar",Controlador.borrar);
router.get("/usuarios/listar",Controlador.listar);
router.post("/usuarios/buscarPorId",Controlador.buscarPorId);
router.get("/login/:l",Controlador.esLogin);

module.exports = router;