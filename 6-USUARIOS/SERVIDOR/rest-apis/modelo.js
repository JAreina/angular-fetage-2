const Usuario = require('./Usuario');
//modelo 
arr = [];

arr.push(
    new Usuario("a@a.com","111"),
    new Usuario("b@b.com","222")
)

exports.buscar = (correo,pass)=>{
    if(typeof arr == 'undefined'){
        arr = [];
   }
           
  
   usuario = new Usuario(correo,pass);

 if(usuario){
    //comprobar que este registrado
       if(estaRegistrado(usuario)!=null){
           return 'ya registrado'
       }else{
        
           registrarUsuario(usuario);
       }
 }
}

function registrarUsuario(usuario){
         
    arr.push = usuario;
   
   console.log(`REGISTRADO: ${usuario.toString()}`);
   console.log(arr)
   return "registrado"
}


exports.estaRegistrado = (usu)=>{
    for(var i =0; i<arr.length; i++){
       // console.log( arr[i].correo + " ESTA REGISTRADO ")
        if(arr[i].correo == usu.correo){
            console.log( arr[i].correo + " ESTA REGISTRADO ")
              return arr[i];
        }

    }
    return null;   
}