const express = require('express');
const UserModel = require('./models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/create',  async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.create({
        username:username,
        email:email,
        
        password: password

    })
    res.send(user);
})    

app.get('/get-users', async (req, res) => {
    const users = await UserModel.findOne({
       username: "1"
    });

    res.send(users);
})

module.exports = app;

