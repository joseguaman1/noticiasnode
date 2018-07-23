/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
//zona de importaciones
class PuebaController {
    constructor(){};
    suma(req, res) {
        var a = parseInt(req.params.a);
        var b = parseInt(req.params.b);
        var c = a + b;
        res.render('acerca', {title: 'Suma', descripcion: 'La suma es ' + c});
    }
    sumarPost(req, res) {
        var a = parseInt(req.body.a);
        var b = parseInt(req.body.b);
        var c = a + b;
        res.render('acerca', {title: 'Suma', descripcion: 'La suma es ' + c});
    }
    
}

module.exports = PuebaController;
