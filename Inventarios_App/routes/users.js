var express = require('express');
var router = express.Router();
var usuario = require('../models/user');
var jwt =  require('jsonwebtoken');
//Login
router.get('/', function(req, res, next) {
  res.render('frmLogin');
});
//Esto solo realiza autenticacion pero aún no tiene seguridad
router.post('/login',(req,res,next)=>{
  //console.log(req.body.email , req.body.passwd,);
  usuario.login(req.body.email , req.body.passwd, (error,data)=>{
    if(data){
      //res.send('Login correcto');
      //Recupera la sesión
      ses = req.session;
      console.log("Ses.Id: "+ ses.id);
      //Crea la sesion
      ses.userdata = data;
      console.log(ses);
      const payload = {datos:data};

      const clave = process.env.SECRETO || 'dios1234'; //En la vida se ponen claves en codigo!! Obtener desde ENV
      console.log("Clave: " + clave);
      const token = jwt.sign(payload,clave,{expiresIn:60*5});
      ses.token = token;

      res.redirect('/');
    }else{
      res.json(error);
    }
  });
});

router.get('/logout',(req,res,next)=>{
  req.session.destroy((falla)=>{
    if(falla){
      res.send(501,"error");
    }else{
      res.redirect('/');
    }
  });
});

module.exports = router;
