/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const uuidv4 = require('uuid/v4');
var mongoose =  require('mongoose');
var Administrador = require('../models/administrador');
const AdministradorQuery = require('../models/administrador');
class AdministradorController {    
    guardar(req, res) {        
        //var params = req.body;        
        new Administrador({
            id: new mongoose.Types.ObjectId(),
            clave: req.body.txt_clave,
            correo: req.body.txt_correo,
            nombre: req.body.txt_nombre,
            external_id: uuidv4(),
            created_at: Date.now(),
            updated_at: Date.now()
        }).save(function (err, curso, count)
        {            
            if (err) throw err;
            res.send('Se ha guardado');
        });
    }
    
    inicioSesion (req, res) {
        var email = req.body.email;
        var clave = req.body.pass;
        AdministradorQuery.findOne({correo: email, clave: clave}, (err, admin) => {
            console.log(err+"   "+admin);
            if(err) {
                res.redirect('/noticias/login');
                console.log(err);
            } else if(admin) {
                req.session.user = admin.nombre;        
                req.session.external = admin.external_id;        
                console.log(req.session.user + " *********** "+ req.session.external);
                req.session.cookie.expires = false;
                res.redirect("/");
            } else {
                res.redirect('/noticias/login');
                
            }
        });
    }
}
module.exports = AdministradorController;

