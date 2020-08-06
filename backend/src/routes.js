const express = require('express');
const router = new express.Router;
const Maceta = require('./controllers/maceta');
router.get('/',(req,res)=>res.send('Hola Alex y Lean, soy el servidor Express'));

router.route('/maceta/actualizar').put(Maceta.actualizar);

module.exports = router;