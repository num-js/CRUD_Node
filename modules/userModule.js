const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user_db', {useNewUrlParser: true});
const conn = mongoose.connection;

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobileno: Number,
    city: String
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;