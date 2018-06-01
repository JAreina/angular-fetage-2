const express = require('express');


const app = express();

const router = require('./rest-apis/usuariosRest');


app.use(router);


app.listen(2000, function(){
    console.log("http://localhost:2000");
})
