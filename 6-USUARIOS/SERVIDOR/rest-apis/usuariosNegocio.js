const modelo = require('./modelo.js')
const Usuario = require('./Usuario');

let correo;
let pass;

let usuario;
 class UsuarioNegocio{
        
       static buscarPorLogin(req,res,next){
            usuario = req.body;
            let respuesta=  modelo.buscar(correo,pass)
                
            if(respuesta== "ya registrado"){
                res.status(200);
                res.json(`USUARIO YA REGISTRADO ${correo}: ${pass}`);
            }
            if(respuesta == 'registrado'){
                res.status(200);
                res.json("REGISTRADO CORRECTAMENTE");
            }
        
    }

    


    static login(req,res, next){
       // 
       correo = req.query.correo;
       pass = req.query.pass;  

        let usuario = new Usuario(correo,pass)
        let usu = modelo.estaRegistrado(usuario)
        if( usu !=null){
            res.status(200);
            res.json(usu);
        }else{
            res.status(400);
            res.json('{"mensaje": "NO REGISTRADO"}')
        }
          
    }
}

   

module.exports = UsuarioNegocio;