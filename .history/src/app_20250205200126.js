const express = require("express");
const UserModel = require("./models/user.model");
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  const { username, email, password, image } = req.body;

  const user = await UserModel.create({
    username: username,
    email: email,
    image: image,
    password: password,
  });
  res.send(user);
});

app.get('/feed', async (req, res) => {

  const users = await UserModel.find()
  
  res.render('feed')
})


module.exports = app;
