const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/node-js-3')
        .then(() => {
           console.log('Connected to MongoDB')
        })     
        .catch((err) => {
            console.log(err)
        })
    }        

module.exports = {connect};

