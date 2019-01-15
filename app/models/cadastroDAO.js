function CadastroDAO(conn){
    this._connection = conn;
}

// READ
CadastroDAO.prototype.read_cadastros = function(callback){
    let sql = 'select * from categoria natural join cadastro natural join status where status="Ativo";';
    this._connection.query(sql, callback);
}

// CREATE
CadastroDAO.prototype.create_cadastro = function(cadastro, callback){
    cadastro.status_id = 1  // o status começa Ativo
    this._connection.query('insert into cadastro set ?', cadastro, callback);
}

// DELETE (SÓ MUDA O STATUS PARA INATIVO)
CadastroDAO.prototype.delete_cadastro = function(id, callback){
    let sql = 'update cadastro set status_id = 2 where cadastro_id=' + id;
    this._connection.query(sql, callback);
}

// UPDATE
CadastroDAO.prototype.update_cadastro = function(cadastro, callback){
    this._connection.query('update cadastro set razao_social="' + cadastro.razao_social +
                                                '", nome="' + cadastro.nome +
                                                '", cnpj="' + cadastro.cnpj +
                                                '", email="' + cadastro.email +
                                                '", endereco="' + cadastro.endereco +
                                                '", cidade="' + cadastro.cidade +
                                                '", estado="' + cadastro.estado +
                                                '", telefone="' + cadastro.telefone +
                                                '", categoria_id="' + cadastro.categoria_id +
                                                '", agencia="' + cadastro.agencia +
                                                '", conta="' + cadastro.conta +
                                                '" where cadastro_id=' + cadastro.cadastro_id, callback);
}

// RETORNA TODAS AS CATEGORIAS DO BANCO
CadastroDAO.prototype.read_categorias = function(callback){
    let sql = 'select * from categoria;';
    this._connection.query(sql, callback);
}

// RETORNA UM CADASTRO ESPECÍFICO
CadastroDAO.prototype.read_one_cadastro = function(id, callback){
    let sql = 'select * from categoria natural join cadastro where cadastro_id=' + id;
    this._connection.query(sql, callback);
}


module.exports = function(){
    return CadastroDAO;
}