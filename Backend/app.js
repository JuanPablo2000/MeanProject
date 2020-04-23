'use strict'

var express=require('express');
var bodyparser=require('body-parser');

var app=express();

var proyect_routes=require('./routes/proyect');


//MIDLEWARES Capa que se ejecuta antes de que se ejecute el controlador
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//RUTAS

app.use('',proyect_routes);

module.exports=app;
