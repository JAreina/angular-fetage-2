let atob = require("atob");
let usuariosNegocio = require("../negocio/usuariosNegocio");

exports.basicAuthentication = function(request, response){

    let authorization = request.headers.authorization;
    console.log("AUTORIZACION" +authorization);
    
    if(!authorization){
        return new Promise( function(resolve,reject){
            reject({"NO-AUTH": authorization});
        });
    }

    let base64 = authorization.split(" ")[1];
    //npm install btoa
    let decodificado = atob(base64);
    let cachos = decodificado.split(":");
    let login = cachos[0];
    let pw = cachos[1];


     console.log(login +" LOGIN")
     console.log(pw + " PW")
    return usuariosNegocio.buscarPorLoginYPassword(login, pw);

}
/*
exports.basicAuthentication = function(request, response){

    return new Promise( function(resolve, reject){

        let authorization = request.headers.authorization;
        console.log(authorization);
        
        if(!authorization){
            reject();
        }
    
        let base64 = authorization.split(" ")[1];
        //npm install btoa
        let decodificado = atob(base64);
        let cachos = decodificado.split(":");
        let login = cachos[0];
        let pw = cachos[1];
    
        usuariosNegocio.buscarPorLoginYPassword(login, pw)
        .then( usr => resolve(usr) )
        .catch( error => reject(error) ) ;         
    });
}
*/


