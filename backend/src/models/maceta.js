const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let macetaSchema = new mongoose.Schema({
    nombre: {type: String},
    humedad: {type: Number},
    humedadSuelo: {type: Number},
    movimiento: {type: Number},
    temperatura: {type: Number},
    luz: {type: Number},
    fechaActual: {type: Date, default: Date.now()}
})

const Maceta = mongoose.model('maceta', macetaSchema);
module.exports = { macetaSchema, Maceta}