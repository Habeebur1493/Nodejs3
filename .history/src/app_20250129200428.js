const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/create', (req, res) => {
    const { username, email, password } = req.body;

})    


module.exports = app;

