const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    email: String,
    name: String,
    photoURL: String,
    cart: [String],
})

const User = model("User", UserSchema);

module.exports = User