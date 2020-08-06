const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let macetaSchema = new mongoose.Schema({
    nombre: {type: String},
    humedad: {type: Number},
    temperatura: {type: Number},
    luz: {type: Number}
})

const Maceta = mongoose.model('maceta', macetaSchema);
module.exports = { macetaSchema, Maceta}