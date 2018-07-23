var express = require('express');
var router = express.Router();
var pruebaContralador = require('../controllers/Prueba');
var obj = new pruebaContralador();
var pruebasi = require('../controllers/pruebasimple');

var administrador = require('../controllers/AdministradorController');
var administradorController = new administrador();

var admin = require('firebase-admin');

/* GET home page. */
router.get('/', function (req, res, next) {
    var login = (req.session.user != undefined);
    if (login == true) {
        res.render('templates/app', {title: 'Principal', login: login,
            fragmento: '../fragmentos/frmprincipal', usuario: req.session.user});
    } else {
        res.render('templates/app', {title: 'Principal', login: login});
    }

    //
});

router.get('/noticias/login', function (req, res, next) {
    res.render('login');
});

router.post('/noticias/login', function (req, res, next) {
    var email = req.body.email;
    var clave = req.body.pass;
    if (email == 'a@admin.com' && clave == '1234') {
        req.session.user = 'Administrador';
        //req.session.save();
        console.log(req.session.user + " *********** ");
        req.session.cookie.expires = false;
        res.redirect("/");
    } else {
        res.redirect('/noticias/login');
    }

});

router.get('/noticias/cerrar', function (req, res, next) {
    req.session.destroy();
    res.render('/');
});
//administrador
router.get('/registro/administrador', function (req, res, next) {
    var login = (req.session.user != undefined);
    if (login == true) {
        res.render('templates/app', {title: 'Principal', login: login,
            fragmento: '../fragmentos/administrador/frmadmin', usuario: req.session.user});
    } else {
        res.render('templates/app', {title: 'Principal', login: login});
    }
});

router.post('/registro/administrador', administradorController.guardar);

/*router.get('/noticias/acerca/:a/:b', function(req, res, next) {
 res.render('acerca', { title: 'Acerca de noticas', descripcion: 'las noticias que se quiera publicar '+req.params.id});
 });*/

//router.get('/noticias/resta/:a/:b', pruebasi.resta);
//router.get('/noticias/suma/:a/:b', obj.suma);
//router.post('/noticias/suma/', obj.sumarPost);
router.get('/test', function (req, res, next) {
    var database = admin.database();
    var ref = database.ref("/");
    ref.once("value", function (snapshot) {
        //console.log("El dato es", snapshot.val());
        res.send(snapshot.val());
    });
});
router.get('/administracion/noticias', function (req, res, next) {
    var login = (req.session.user != undefined);
    if (login == true) {
        res.render('templates/app', {title: 'Principal', login: login,
            fragmento: '../fragmentos/noticias/frm_noticias'});
    } else {
        res.render('templates/app', {title: 'Principal', login: login});
    }
    //res.render('suma', { title: 'Sumar dos variables'});
});
module.exports = router;
