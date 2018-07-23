/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function resta(req, res) {
    var a = req.params.a;
    var b = req.params.b;
    var c = a - b;
    res.render('acerca', {title: 'Resta', descripcion: 'La resta es ' + c});
}
module.exports = {resta};

