const modelo = require('./modelo.js')
const Usuario = require('./Usuario');


 class Controlador{
        
       static buscar(req,res,next){
        let  correo = req.query.correo;
        let pass = req.query.pass;  
         
            let respuesta=  modelo.buscar(correo,pass)
              
           console.log(respuesta + "CONTROLLADOR ---BUSCAR ")


            respuesta
               .then((bien)=>{
                   console.log("CONTROLLADOR BUSCADO : "+bien)
                   if( bien != null ){
                    res.status(200);
                    res.json(`REGISTRADO ${correo}: ${pass}`);
                   }else {
                       res.status(400);
                       res.send("NO REGISTRADO");
                   }
                    
               })
               .catch((mal)=>{
                   console.log("error    -- controlllador  buscar "+mal)
                    res.sendStatus(500);
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
            res.sendStatus(500);
            //res.send(mal)
           })
        }
}

   

module.exports = Controlador;