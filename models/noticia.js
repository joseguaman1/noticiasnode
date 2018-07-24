'use strict';
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var NoticiaSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    cuerpo: String,
    titulo: String,
    external_id: String,
    tipo: String,
    created_at: Date,
    updated_at: Date,
    administrador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Administrador'
    }
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Noticia', NoticiaSchema);

