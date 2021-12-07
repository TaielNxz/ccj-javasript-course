const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Crear el servidor
const app = express();

// Ocultar informacion de peticiones externas
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if( existe ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}

// Habilitar Cors
// app.use( cors(corsOptions) );
app.use(cors());

// Conectar a mongodb
const password = 'fullstack'
const dbname = 'veterinaria'
const url = `mongodb+srv://fullstack:${password}@fullstack.3itgv.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(url);

// habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// habilitar el routing
app.use('/', routes());

// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
});