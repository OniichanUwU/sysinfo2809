var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//Esto solo realiza autenticacion pero aún no tiene seguridad
router.post('/login',(req,res,next)=>{
  //console.log(req.body.email , req.body.passwd,);
  usuario.login(req.body.email , req.body.passwd, (error,data)=>{
    if(data){
      res.send('Login correcto');
      //recupera la sesión
      ses = req.session;
      console.log(ses.id);
      //Crear la sesion
    }else{
      res.json(error);
    }
  });
});

module.exports = router;
