const Maceta = require('../models/maceta').Maceta;

module.exports = {

    actualizar: async (req, res, next) => {
        var macetaEncontrada = await Maceta.findOne({nombre: req.body.nombre});
        if(macetaEncontrada){
            console.log(macetaEncontrada)
            await macetaEncontrada.update(req.body);
            res.send(macetaEncontrada);
        }else{
            var maceta = new Maceta(req.body);
            await maceta.save();
            res.send(maceta);
        }
    }
}