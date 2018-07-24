'use strict';
const uuidv4 = require('uuid/v4');
var mongoose = require('mongoose');
var Noticia = require('../models/noticia');
class NoticiaController {
    guardar(req, res) {
        //var params = req.body;        
        new Noticia({
            id: new mongoose.Types.ObjectId(),
            clave: req.body.txt_clave,
            correo: req.body.txt_correo,
            nombre: req.body.txt_nombre,
            external_id: uuidv4(),
            created_at: Date.now(),
            updated_at: Date.now()
        }).save(function (err, curso, count)
        {
            if (err)
                throw err;
            res.send('Se ha guardado');
        });
    }

    verNoticiasAdministrador(req, res) {
        Noticia.find({}, (err, noticias) => {
            console.log(noticias);
            var login = (req.session.user != undefined);
            if (!login) {
                res.render('templates/app', {title: 'Principal', login: login});
            } else if (err) {
                res.render('templates/app', {title: 'Principal', login: login,
                    fragmento: '../fragmentos/noticias/frm_noticias', datos: []});
            } else {
                res.render('templates/app', {title: 'Principal', login: login,
                    fragmento: '../fragmentos/noticias/frm_noticias', datos: noticias});
            }
        });
    }

}
module.exports = NoticiaController;