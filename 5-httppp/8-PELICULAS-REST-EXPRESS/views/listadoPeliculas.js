$(inicializar);

var idPeli = null;

function inicializar(){
    $('#botonNuevo').click(actualizar);
    $('#botonActualizar').click(getPeliculas);
    getPeliculas();

     let filas = $('#tableBody');
     console.log(filas)
    $('#botonInsertar').click(procesarFormulario);
    

    // evento buscar pelicula;
     //$('#tableBody').click(buscarPelicula);

    //BUSCAR EN LOCALsTORAGE Y EN COOKIES
    let localS=  localStorage.getItem("insertado");
    
    let cook = getCookie("insertadaCOOKIE");

    //alert(`LOCALSTORAGE: ${localS}\nCOOKIES: ${cook}`)
     

    // BUSCAR PELICULA 
    let peliBuscada = localStorage.getItem("peliculaBuscada");
    //localStorage.clear();
    if(peliBuscada)
           console.log(peliBuscada)

     if(peliBuscada != null){
         let p = JSON.parse(peliBuscada);
           mostrarPeliBuscada(p);
     }
     // CANCELAR 
     $('#botonCancelar').click(cancelar);
    
     //MODIFICAR PELICULA 
     $('#botonModificar').click(modificar);
    /*inicio de formulario hml */

    // borrar  pelicula 
    $('#botonBorrar').click(borrar);
    //boton vaciar formulario 
    $('#botonVaciar').click(reset)
}

function cancelar(){
    window.location = "/listadoPeliculas.html";
}

function borrar (){
    pelicula = {};
    console.log("  DATOS DEL FORMULARIO --------------")
    $("#formulario [campo]").each(function(){
        pelicula[this.id] = this.value;
    }) ;

   

    console.log(pelicula);


    $.ajax({
        url: '/peliculas/'+pelicula.id,
        type: 'delete',
        contentType: 'application/json',
        data: JSON.stringify(pelicula)
        
}).done(verListado).fail(procesarError2)
}


function modificar(){
    console.log("MODIFCIA PELICULA CLIENTE") ;

    // HACER PETICION AJAX 
    console.log("procesar formulario")
    pelicula = {};
    console.log("  DATOS DEL FORMULARIO --------------")
    $("#formulario [campo]").each(function(){
        pelicula[this.id] = this.value;
    }) ;

   

    console.log(pelicula);


    $.ajax({
        url: '/peliculas/'+pelicula.id,
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(pelicula)
        
}).done(verListado).fail(procesarError2)
 
    
}





function mostrarPeliBuscada(p){
    // buscar campos del formulario y mostrar 
    console.log(p)

     idPeli = p.id;

   /**
    * MOSTRAR 1 FORMA 
   
    $('#titulo').val(p.titulo);
    $('#director').val(p.director);
    $('#genero').val(p.genero);
    $('#anio').val(p.anio);
 */

   // MOSTRAR 2 FORMA 
    for(clave in p){
        $(`#${clave}`).val(p[clave])
    }
}




let url = "http://localhost:3999"//NO HACE FALTA PONER ESTO
function getPeliculas(){
    // ajax DEPRECATED
    /*$.ajax({
        url:url+"/peliculas",
        success: rellenarTabla,
        error: procesarError

    });*/
     $.ajax({url: '/peliculas'})
            .done(rellenarTabla)
            .fail(procesarError)
            .always(ok)
    
}


function buscarPelicula(e){
    console.time("buscarpelicula")
    console.log("hecho click")
   // let elemento = e.target;
   let elemento = e;
    //console.log($(elemento).text())

    $.ajax({url: '/peliculas/'+elemento})
            .done(verPeliculaBuscada)
            .fail(procesarError)
            .always(ok)
            console.timeEnd("buscarpelicula")
}


function verPeliculaBuscada(peli){
    //let pelii = JSON.parse(peli);
    
    localStorage.setItem("peliculaBuscada",JSON.stringify(peli));
    
    /* mostrarla en la tabla 
    let arry= [];
    arry.push(peli);
    rellenarTablaJQUERY(arry);
    console.log("PELI YA BUSCADA Y MOSTRADA ")*/
    window.location= "/formularioPeliculas.html"
}




// listadoPeliculas.html
function rellenarTabla(datos){
   console.log(datos)
   let data = JSON.stringify(datos);
   console.log(data)
   //document.getElementById('tabla').innerHTML = datos[0].titulo;
   //pintarTabla(datos,'table');
   rellenarTablaJQUERY(datos)

}

function ok(){
    console.log("HECHO")
}

function procesarError(error){
    console.log(error);
}





/* RELLENAR TABLA CON JQUERY  listadoPeliculas.html*/
function rellenarTablaJQUERY(datos){
    let tabla = $('#tableBody')
    tabla.html('');
    console.log(tabla);
    for(var i = 0; i<datos.length; i++){
          let peli = datos[i];
          $(
          "<tr onclick='buscarPelicula("+peli.id+")'>"+
          "<td>"+peli.id+"</td>"+
          "<td>"+peli.titulo+"</td>"+
          "<td>"+peli.director+"</td>"+
          "<td>"+peli.genero+"</td>"+
          "<td>"+peli.anio+"</td>"+
          "</tr>").appendTo(tabla);
    }
}
function actualizar(){
    
    window.location = "/formularioPeliculas.html";
    reset();
}

function reset(){
    localStorage.removeItem("peliculaBuscada");
    idPeli=null;
    $("#formulario [campo]").val('')
}


/* FORMULARIO PELICULAS ************************************/



function procesarFormulario(){
    console.log("procesar formulario")
    pelicula = {};
    console.log("  DATOS DEL FORMULARIO --------------")
    $("#formulario [campo]").each(function(){
        pelicula[this.id] = this.value;
    }) ;



    console.log(pelicula);


    $.ajax({
        url: '/peliculas',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(pelicula)
        
}).done(verListado).fail(procesarError2)






}




function verListado(mensa){
    console.log("guardado ver LISTADO")
    console.log("MENSAJE :"+ mensa);

    
    // PASAR mENSAJE A LA VISTA DEL LISTADO y guardarlo en el cliente
    //window.location="/listadoPeliculas.html?mensaje="+mensa;
    
    // pasar  emensaje por una cookie
    setCookie("insertadaCOOKIE",mensa,100)

    // session storage o local storage
    localStorage.setItem("insertado", mensa);


    $("#mensaje").html(`<p> ${mensa}</p>`);


    //session storage // SE BORRA AL CERRAR PESTAÑA
    sessionStorage.setItem("SESION","hola")
    window.location="/listadoPeliculas.html";
}


function procesarError2(error){
    console.log("procesar error insertar ")
   // window.location="/listadoPeliculas.html"
}



// establecer cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// OBTENER COOKIE
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}