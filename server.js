'use strict'

// importar o mongoose
const mongoose = require('mongoose')

// importar o body-parser
const bodyParser = require('body-parser')

// importar o Express
const Express = require('express')
const ClientController = require('./controller/client-controller')

// importando models
const Client = require('./model/client')

// importando controllers


class Server {
    constructor() {
        // Instanciar o Express
        this.app = new Express();

        // Configuração do body-parser
        this.app.use(bodyParser.json());

        // Configuração de CORS
        // Add headers
        this.app.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);

            // Pass to next layer of middleware
            next();

        });

        // Connectar no banco de dados (mLab)
        mongoose.connect('mongodb://lucas:lucas100@ds159840.mlab.com:59840/crud-cliente');

        // Registrar os Models (Collection) (criar as collections)
        new Client();

        // Instanciar o ClientController
        this.clientController = new ClientController(this.app);

        this.app.listen(3000);
    }
}

new Server();