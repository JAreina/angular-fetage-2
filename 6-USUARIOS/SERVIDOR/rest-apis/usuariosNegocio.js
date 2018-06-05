const Usuario = require('./Usuario');


let correo;
let pass;
arr = [];

arr.push(
    new Usuario("a@a.com","111"),
    new Usuario("b@b.com","222")
)
let usuario;
 class UsuarioNegocio{
        
       static buscarPorLogin(req,res,next){

           if(typeof arr == 'undefined'){
                arr = [];
           }
                   
        correo = req.query.correo;
         pass = req.query.pass;
         usuario = new Usuario(correo,pass);

         if(usuario){
            //comprobar que este registrado
               if(UsuarioNegocio.estaRegistrado(usuario)){
                   res.status(200);
                   res.json(`USUARIO YA REGISTRADO ${correo}: ${pass}`);
               }else{
                
                   UsuarioNegocio.registrarUsuario(req,res,next);
               }
         }
        
    }
//   localhost:2000/usuarios/credenciales?correo=juan@juan.com&pass=aaa
    static registrarUsuario(req,res,next){
         
          arr.push = usuario;
         
         console.log(`REGISTRADO: ${usuario.toString()}`);
         console.log(arr)
         res.status(200);
          res.json("REGISTRADO CORRECTAMENTE");
    }

    static estaRegistrado(usu){
        for(var i =0; i<arr.length; i++){
           // console.log( arr[i].correo + " ESTA REGISTRADO ")
            if(arr[i].correo == usu.correo){
                console.log( arr[i].correo + " ESTA REGISTRADO ")
                  return true;
            }
    
        }
        return false;   
    }


    static login(req,res, next){
        usuario = req.body;
        if(UsuarioNegocio.estaRegistrado(usuario)){
            req.json("BIENBENIDA");
        }
          
    }
}

       

module.exports = UsuarioNegocio;