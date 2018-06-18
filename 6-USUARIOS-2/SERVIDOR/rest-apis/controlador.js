const modelo = require('./modelo.js')
const Usuario = require('./Usuario');


 class Controlador{
        
       static buscar(req,res,next){
        let  correo = req.query.correo;
        let pass = req.query.pass;  
         
            let respuesta=  modelo.buscar(correo,pass)
              
            respuesta
               .then((bien)=>{
                    res.status(200);
                    res.json(`REGISTRADO ${correo}: ${pass}`);
               })
               .catch((mal)=>{
                    res.status(400);
                    res.send("NO REGISTRADO");
               })
    }

    
    static registrar(req,res, next){
       // 
      
       let  usuario = req.body;
       
        let respuesta = modelo.registrar(usuario)

        respuesta
           .then((bien)=>{
            res.status(200);
            res.json(bien);
           })
           .catch((mal)=>{
            res.status(400);
            res.send(mal)
           })
        }
}

   

module.exports = Controlador;