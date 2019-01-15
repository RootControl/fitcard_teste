// ALTERA OS DADOS DO ESTABELECIMENTO
module.exports.altera_cadastro = function(id, app, req, res){
    let conn = app.config.dbConn();
    let cadastro_model = new app.app.models.cadastroDAO(conn);

    cadastro_model.read_one_cadastro(id, function(error, result_cad){
        if (error) { console.log("Erro ao atualizar o estabelecimento"); console.log(error) }
        cadastro_model.read_categorias(function(error, result){
            if (error) { console.log("Erro"); console.log(error) }
            res.render('alterar_cadastro', { cadastro: result_cad, categoria: result });
        })
    })
}

// ATUALIZAR OS DADOS NO BANCO
module.exports.atualizar_cadastro = function(app, req, res){
    let cadastro = req.body;

    let conn = app.config.dbConn();
    let cadastro_model = new app.app.models.cadastroDAO(conn);

    cadastro_model.update_cadastro(cadastro, function (error, result) {
        if (error) {
            console.log("Erro ao atualizar o cadastro.");
            console.log(error);
        }
        cadastro_model.read_cadastros(function(error, result){
            if (error) { console.log("Erro"); console.log(error) }
            res.render('lista_cadastros', { cadastro: result });
        })
    });    
}