let mysql = require('mysql');

let connect = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'jack',
        password: 'jack',
        database: 'fitcard'
    });
}

if (connect){
    console.log('Conectado com o banco.');
}
else {
    console.log('Não foi possível conectar com o banco.');
}

module.exports = function(){
    return connect;
}