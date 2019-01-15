let app = require('./config/server.js');

let port = 3000;

app.listen(port, function(){
    console.log('Server rodando na porta ', port);
})