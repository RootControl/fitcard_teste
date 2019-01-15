module.exports = function(app){
    // MOSTRA A PÁGINA DE CADASTRO
    app.get('/cadastrar-estabelecimento', function(req, res){
        app.app.controllers.cadastrar_controller.tela_cadastro(app, req, res);        
    })

    // SALVA OS DADOS CADASTRADOS
    app.post('/salvar-cadastro', function(req, res){
        app.app.controllers.cadastrar_controller.create_cadastro(app, req, res);
    })
}