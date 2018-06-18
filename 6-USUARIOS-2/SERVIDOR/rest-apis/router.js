let express = require('express');
let router = express.Router();
const Controlador = require('./controlador');

router.get('/', (req,res,next)=>res.send("hola"))
router.get("/usuarios/login",Controlador.buscar);
router.post("/usuarios/registro",Controlador.registrar);




module.exports = router;