const express = require('express');
const UserModel = require('./models/user.model');

const app = express();

app.use(express.json());

app.post('/create',  async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.create({
        username:username,
        email:email,
        bio:'',
        password: password

    })
    res.send(user);
})    


module.exports = app;

