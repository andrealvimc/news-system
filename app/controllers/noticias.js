module.exports.noticias = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });
}

module.exports.noticia = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(error, result){
        res.render('noticias/noticia', { noticia : result });
    });
}