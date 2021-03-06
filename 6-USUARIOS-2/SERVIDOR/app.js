const express = require('express');
var bodyParser = require('body-parser');
const conexion = require('./rest-apis/conexionMongo')
const app = express();
const basicAutenticacion = require('./rest-apis/basicAutenticacion')

// CONEXION A MONGO
conexion.conectar();


const router = require('./rest-apis/router');

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(function(req, res, next) {
	// Website you wish to allow to connect

	// req.path '
	console.log(req.path);
	//console.log(req.url);
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type, Authorization');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	//res.setHeader('Access-Control-Allow-Credentials', false);
	 //-------------------
	 
	 let metodo = req.method;

	 if(metodo == "OPTIONS"){
		 console.log("opciones")
		 next();
		 return;
	 }
	 // basic autorizacion
	let promesa =  basicAutenticacion.basicAutenticacion(req,res,next)
	  promesa
	  .then(usuario =>{
			console.log(usuario)

			req.usuario = usuario;
			next();
		
			
		
		})
		.catch(err=>{
			console.log(err)
			res.sendStatus(403)
		})
	// Pass to next layer of middleware
	
});

app.use('/',router);

app.listen(2000, function() {
	console.log('http://localhost:2000');
});
