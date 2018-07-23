/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const uuidv4 = require('uuid/v4');
var mongoose =  require('mongoose');
var Administrador = require('../models/administrador');
class AdministradorController {    
    guardar(req, res) {        
        //var params = req.body;        
        new Administrador({
            id: new mongoose.Types.ObjectId(),
            clave: req.body.clave,
            correo: req.body.correo,
            nombre: req.body.nombre,
            external_id: uuidv4(),
            created_at: Date.now(),
            updated_at: Date.now()
        }).save(function (err, curso, count)
        {            
            if (err) throw err;
            res.send('Se ha guardado');
        });
    }
}
module.exports = AdministradorController;

