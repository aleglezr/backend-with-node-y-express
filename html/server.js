const express = require('express');
const app = express();

/*Definir una ruta inicial para que sea esta la
que responda con un documento HTML y luego la función
manejadora que recibe 2 argumentos uno con la información de
la petición y otro con lo necesario para la respuesta*/
app.get('/',function(req,res){
  res.sendFile('index.html',{
    root: __dirname
  });
  // res.send(__dirname);
});

app.listen(3000);
