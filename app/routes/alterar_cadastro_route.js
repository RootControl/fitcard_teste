module.exports = function(app){
    // ALTERAR OS DADOS DE UM ESTABELECIMENTO NO SISTEMA
    app.get('/alterar-cadastro/:cadastro_id', function(req, res){
        let id = req.params.cadastro_id;
        app.app.controllers.alterar_cadastro_controller.altera_cadastro(id, app, req, res);
    })

     // ATUALIZAR OS DADOS CADASTRADOS
     app.post('/atualizar-cadastro', function(req, res){
        app.app.controllers.alterar_cadastro_controller.atualizar_cadastro(app, req, res);
    })
}