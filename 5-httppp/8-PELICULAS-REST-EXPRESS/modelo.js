
let peliculas = [];
let contador =3;



// peliculas pruebas
peliculas.push({
    "id":1,
    "titulo":"titulo 1",
    "director":'director 1',
    "genero":'genero 1',
    "anio":'2001'
},
{
    "id":2,
    "titulo":"titulo 2",
    "director":'director 2',
    "genero":'genero 2',
    "anio":'2002'
},
{
    "id":3,
    "titulo":"titulo 3",
    "director":'director 3',
    "genero":'genero 3',
    "anio":'2003'
}
);





exports.listarPeliculas = function() {
    return peliculas;
};

exports.buscarPelicula = function(id) {
    for(let i =0;i<peliculas.length;i++){
        let pelicula = peliculas[i];
        if(pelicula.id == id){
            return pelicula;
        }
    }
    return null;
};

exports.modificarPelicula = function(pelicula) {

    if(pelicula.titulo || pelicula.titulo.trim()== ''){
        return "TITULO OBLIGATORIO";
    }
    for(let i =0;i<peliculas.length;i++){
 


        if(peliculas[i].id == pelicula.id){
            peliculas[i]= pelicula;
            return "OK";
        }
    }
    return null;
};

exports.borrarPelicula = function(id) {
    for(let i =0;i<peliculas.length;i++){
        if(peliculas[i].id == id){
            peliculas.splice(i,1);
            return "OK";
        }
   
    }
    return null;
};

exports.insertarPelicula = function(pelicula) {
        
    if(pelicula.director.trim()!=''){
        contador++;
        pelicula.id = contador;
        peliculas.push(pelicula);
        return 'OK';
    }
    
    
};