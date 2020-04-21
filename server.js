const http = require('http');

function responderPeticion(request,response){
  response.end('Peticion recibida');
}

 let server = http.createServer(responderPeticion);

 server.listen(3000);
