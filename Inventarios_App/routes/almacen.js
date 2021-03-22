var express = require('express');
var router = express.Router();
var session = require('express-session');
var checkAutorizacion = require('../autorizacion/general')

router.get('/alta',checkAutorizacion,(req,res,next)=>{ //Metemos la revision de credenciales
  var ses = req.session;
  res.render("almacen/frmAlta",{user : ses.userdata, token : ses.token});
});
router.get('/baja',(req,res,next)=>{
  var ses = req.session;
  res.render("almacen/frmBaja");
});
router.get('/reporte',(req,res,next)=>{
  var ses = req.session;
  res.render("almacen/frmReporte");
});


module.exports = router;
