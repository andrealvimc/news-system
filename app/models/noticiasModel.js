function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query("select * from noticias", callback);
}

Noticias.prototype.getNoticia = function(callback){
    this._connection.query("SELECT * FROM noticias WHERE id_noticia = 2", callback);
}

Noticias.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query("INSERT INTO noticias set ?", noticia, callback);
    console.log('Noticia adiciona')
}

module.exports = function(app){
    return Noticias;
}