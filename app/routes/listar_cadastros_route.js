module.exports = function(app){
    // MOSTRA A PÁGINA LISTANDO TODOS OS ESTABELECIMENTOS
    app.get('/listar-estabelecimentos', function(req, res){
        app.app.controllers.listar_cadastros_controller.read_cadastros(app, req, res);
    })

    // DELETA UM ESTABELECIMENTO DO SISTEMA
    app.get('/deletar-cadastro/:cadastro_id', function(req, res){
        let id = req.params.cadastro_id;
        app.app.controllers.listar_cadastros_controller.delete_cadastro(id, app, req, res);
    })
}