const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    email:{
        type: String,
    },
    bio: {
        type: String,
    },
    password: {
        type: String,
    }

})

const UserModel = new mongoose.model("User", userSchema);

module.exports = UserModel;




