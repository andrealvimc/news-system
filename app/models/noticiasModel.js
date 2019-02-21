function noticiasModel(connection){
    this._connection = connection;
}

noticiasModel.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

noticiasModel.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
}

noticiasModel.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

noticiasModel.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}

module.exports = function(){
    return noticiasModel;
}