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
                 
                    res.json(bien);
                  
               })
               .catch((mal)=>{
                   console.log("error    -- controlllador  buscar "+mal)
                    res.json(mal);
               })
    }

    
    static registrar(req,res, next){
       // 
      
       let  usuario = req.body;
       
        let respuesta = modelo.registrar(usuario)

        respuesta
           .then((bien)=>{
           //res.status(200);
            res.json(bien);
           })
           .catch((mal)=>{
            //res.status(500);
            res.json(mal)
           })
        }

    static modificar(req,res,next){
            let  usuario = req.body;
            console.log(usuario)
       
            let respuesta = modelo.modificar(usuario)
             console.log(respuesta)
            respuesta
               .then((bien)=>{
                   console.log(bien)
                res.status(200);
                res.json(bien);
               })
               .catch((mal)=>{
                res.status(500);
                res.send(mal)
               })
           
        }

    static borrar(req,res,next){
        let  usuario = req.body;
        console.log(usuario)
   
        let respuesta = modelo.borrar(usuario)
         console.log(respuesta)
        respuesta
           .then((bien)=>{
               console.log(bien)
            res.status(200);
            res.json(bien);
           })
           .catch((mal)=>{
            res.status(500);
            res.send(mal)
           })
    }

    static listar(req,res,next){
       
   
        let respuesta = modelo.listar()
        
           // devuelve una promesa 

        
        respuesta
           .then((bien)=>{
               console.log(bien)
            res.status(200);
            res.json(bien);
           })
           .catch((mal)=>{
            res.status(500);
            res.send(mal)
           })
          
    }

    static buscarPorId(req,res,next){
        let  usuario = req.body;
        console.log(usuario)
   
        let respuesta = modelo.buscarPorId(usuario)
         console.log(respuesta)
        respuesta
           .then((bien)=>{
               console.log(bien)
            res.status(200);
            res.json(bien);
           })
           .catch((mal)=>{
            res.status(500);
            res.send(mal)
           })
    }




    }

   

module.exports = Controlador;