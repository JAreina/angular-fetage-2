const atob = require('atob')

const modelo = require('./modelo');

exports.basicAutenticacion = function(req,res,next){

	  let autorizacion = req.headers.authorization;
	   
	  console.log(autorizacion)
	   if(!autorizacion){
		   //res.sendStatus(403);
           //return;
           return new Promise(function(resolve,reject){
               reject()
           })
	   }
	 let base64 = autorizacion.split(' ')[1]; //basic espacio  ...
	 console.log(base64)
	 let decodificado = atob(base64);
	 console.log(decodificado)
	 let trozos = decodificado.split(":");
	 let login = trozos[0];
	 let pw = trozos[1];

	 console.log(login);
     console.log(pw)
     
// añadir a la peticion correo y password
     // comprar si existe en mongo

    let promesa = modelo.buscar(login,pw)
   return  promesa;
   
}




