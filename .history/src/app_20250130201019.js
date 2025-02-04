const express = require('express');
const UserModel = require('./models/user.model');

const app = express();

app.use(express.json());

app.post('/create',  async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.create({
        username:username,
        email:email,
        bio:'Hello World',
        password: password

    })
    res.send(user);
})    

app.get('/get-users', async (req, res) => {
    UserModel.find = await UserModel.find({
       
    });

    res.send(users);
})

module.exports = app;

