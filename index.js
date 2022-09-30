const express = require('express');
const routesCategoria = require('./routeCategoria');

const app = express();

console.log('teste de github');

app.use('/', routesCategoria);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO');
});