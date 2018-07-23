'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var AdministradorSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    clave: String,
    correo: String,
    external_id: String,
    nombre: String,
    created_at: Date,
    updated_at: Date
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Administrador', AdministradorSchema);