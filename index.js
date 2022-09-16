const express = require('express');
const routesCategoria = require('./routeCategoria');

const app = express();

app.use('/', routesCategoria);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO');
});