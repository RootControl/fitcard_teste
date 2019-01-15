module.exports = function(app){
    app.get('/', function(req, res){
        app.app.controllers.index_controller.index(app, req, res);        
    })
}