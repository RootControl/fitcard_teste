let express = require('express'); 
let consign = require('consign');
let body_parser = require('body-parser');
let app = express(); 

app.set('view engine', 'ejs'); 
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(body_parser.urlencoded({extended:true}));

consign().include('app/routes')
        .then('config/dbConn.js')
        .then('app/models')
        .then('app/controllers')
        .into(app);

module.exports = app;