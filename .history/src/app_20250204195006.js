const express = require("express");
const UserModel = require("./models/user.model");


const app = express();

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

module.exports = app;
