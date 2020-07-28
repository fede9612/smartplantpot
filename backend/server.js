const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
const mongoose = require('mongoose');
//Esta librería me deja leer las variables de entorno en .env
require('dotenv').config();

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.CONNECTIONMONGODB,(err, res)=>{
  if (err) {
    console.log ('ERROR al conectar:', err);
    } else {
    console.log ('Succeeded connected to:' ,process.env.CONNECTIONMONGODB);
    }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(require('./src/routes'));


let server = app.listen(process.env.PORT || 8080, ()=> console.log("Server iniciado"));

module.exports = server; 