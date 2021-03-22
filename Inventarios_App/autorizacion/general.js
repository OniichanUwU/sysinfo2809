//Va a ser una ruta intermedia para checar credenciales
var express = require('express');
const rutaAutorizada = express.Router();
var jwt = require('jsonwebtoken');

rutaAutorizada.use((req,res,next)=>{//use genera los midlewers
  var token = req.session.token;
  var clave = process.env.SECRETO || 'dios1234';
  if(token){
    jwt.verify(token,clave,(err,decoded)=>{
      if(err) res.json({'mensaje':"Token inválido"});
      if(decoded) next();
    });
  }else{
    res.json({'mensaje':"No hay token, inicia sesión"});
  }
});

module.exports = rutaAutorizada;
