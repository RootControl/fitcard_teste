// TELA LISTANDO TODOS OS ESTABELECIMENTOS
module.exports.read_cadastros = function(app, req, res){
    let conn = app.config.dbConn();
    let cadastros_model = new app.app.models.cadastroDAO(conn);

    cadastros_model.read_cadastros(function(error, result){
        if (error) { console.log("Erro"); console.log(error) }
        res.render('lista_cadastros', { cadastro: result });
    })
}

// DELETA OS DADOS (SÓ MUDA O STATUS)
module.exports.delete_cadastro = function(id, app, req, res){
    let conn = app.config.dbConn();
    let cadastro_model = new app.app.models.cadastroDAO(conn);

    cadastro_model.delete_cadastro(id, function(error, result){
        if (error) { console.log("Erro ao deletar o estabelecimento"); console.log(error) }        
        res.redirect('/listar-estabelecimentos');
    })
}