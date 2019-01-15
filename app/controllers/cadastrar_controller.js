// TELA DE CADASTRO
module.exports.tela_cadastro = function(app, req, res){
    let conn = app.config.dbConn();
    let cadastros_model = new app.app.models.cadastroDAO(conn);

    // MOSTRA AS CATEGORIAS QUE ESTÃO NO BANCO
    cadastros_model.read_categorias(function(error, result){
        if (error) { console.log("Erro"); console.log(error) }
        res.render('cadastro', { erros: {}, cadastro: {}, categoria: result });
    })
}

// SALVA OS DADOS NO BANCO
module.exports.create_cadastro = function(app, req, res){
    let cadastro = req.body;

    let conn = app.config.dbConn();
    let cadastro_model = new app.app.models.cadastroDAO(conn);

    cadastro_model.create_cadastro(cadastro, function (error, result) {
        if (error) {
            console.log("Erro ao fazer o cadastro.");
            console.log(error);
        }
        res.redirect('/');
    });    
}