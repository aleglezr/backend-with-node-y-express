const express = require('express');

const app = express();

app.get('/',function(req,res){
  res.send('Peticion recibida');
});

app.listen(3000);