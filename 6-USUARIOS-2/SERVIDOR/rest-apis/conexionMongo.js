const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

//CONEXION CON  callbacks

//const dbName = 'usuarios';

let conexion = mongo.connect(url);
	

module.exports = conexion;

//CONEXION CON promesas
/*
function segundaConexion() {
	let conexion = mongo.connect(url);

	console.log(conexion);

	conexion
		.then((db) => {
			console.log('connectado a base de datos 2: ' + db.s.options.dbName);
			const base = db.db(dbName);
			return base;
            //lo devuelve al siguiente then(datos)
		})
		
		.catch((err) => {});
}*/