const login = (email, passwd, callback) => {
  var error = '';
  var bd_data = ''; //Simula la inf de BD
  if(email == "joe@doe.com" && passwd == "1234"){
    //Consulta en BD info faltante
    bd_data = {
      'email':email,
      'depto':"Ventas",
      'phone':"5512345678"
    }
  }else{
      error = {'mensaje':"Credenciales incorrectas"}
  }
    callback(error,bd_data);
} //const login = function

exports.login = login ;
