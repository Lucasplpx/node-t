const mongoose = require('mongoose');

class Client {

    constructor(){
        mongoose.model('Client', {
            name: String,
            email: String,
            zipcode: String,
            street: String,
            neighborhood: String,
            city: String,
            state: String
        });

    }

}

module.exports = Client;