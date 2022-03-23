var express = require('express') //Importamos express
var app = express(); //declaramos una app de express

var port = process.env.port || 3000; //declaramos el puerto del servidor

//primera ruta, a nivel de raiz
app.get('/', function(req,res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>')
});
//segunda ruta, JSON
app.get('/api', function(req,res){
    res.json({firstname: 'Jhon', lastname: 'Snow'});
});
//tercera ruta, parametros
app.get('/person/:id', function(req,res){
    res.send('<html><head></head><body><h1>Person: '+ req.params.id +'</h1></body></html>');
});

app.listen(port); //levantar server y ponerlo a la espera.