const express = require('express');
const UserModel = require('./models/user.model');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/create', (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.create({
        username:username,
        email:email,
        password: password
    })
    res.send(user);
})    


module.exports = app;

