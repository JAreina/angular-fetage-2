const express = require('express');
const servidor = express();
const peliculas = require('./modelo.js');
var bodyParser = require('body-parser')
const path = require("path");

   //localhost:4999/index.html
  servidor.use(express.static('views'));

  // peticion get sin indicar recurso
  // http://localhost:4999
   servidor.use(bodyParser.json());


  servidor.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:2700');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});




   servidor.get("/",function(req,res){
        res.sendFile(path.join(__dirname+'/views/listadoPeliculas.html'))
   });
   /**
    * GET / peliculas 
    */
   servidor.get("/peliculas",listarPeliculas);
/**
    * GET / peliculas/ID 
    */
   servidor.get("/peliculas/:id", buscarPelicula);
 /**
    * POST  / peliculas    
    */
   servidor.post("/peliculas",insertarPelicula);
/**
    * PUT   / peliculas/ID   
    */
   servidor.put("/peliculas/:id",modificarPelicula);
/**
    * DELETE   / peliculas/ID   
    */
   servidor.delete("/peliculas/:id",borrarPelicula);

    


  

  //      LISTAR PELICULAS 
  function listarPeliculas(req,res){
  
    let pelis = peliculas.listarPeliculas();
    res.json(pelis)
   
}

// BUSCAR PELICULA 
function buscarPelicula(req,res){
    
  let id = req.params.id;
  let peliBuscada = peliculas.buscarPelicula(id);
 
  if(peliBuscada !=null){
     res.json(peliBuscada)
      
  }else{
      res.status(404);
       res.send("pelicula no encontrada");
  }
 
}
// INSERTAR PELICULA 
function insertarPelicula(req,res){
  
    let peli = req.body;
    let mensaje = peliculas.insertarPelicula(peli);

     if(mensaje == 'OK'){
        res.status(201)
        res.send("PELICULA INSERTADA OK")
     }else{
        res.status(400)
        res.send("FALLO AL INSERTAR ");
     } 
}

// MODIFICAR PELICULA
function modificarPelicula(req,res){
  
    let id = req.params.id;
    let peli = req.body;

    let mensaje = peliculas.modificarPelicula(peli);// en modelo vemos si existe esa peli

     if(mensaje == 'OK'){
        res.status(201);
        res.send("PELICULA MODIFICADA");
     }else{
        res.status(400)
        res.send("NO MODIFICADO");
     }
    

}

// BORRAR PELICULA 
function borrarPelicula(req,res){
    let id = req.params.id;
    let mensaje = peliculas.borrarPelicula(id);

    if(mensaje == 'OK'){
        res.status(201)
        res.send("bien");
     }else{
        res.status(400)
        res.send("NO BORRADO");
     }
}

servidor.listen(3999, function () {

    console.log('http://localhost:3999');
  });
